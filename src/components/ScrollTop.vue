<template>
  <div class="scroll-top" :style="mainStyle" v-scroll.init="handleScroll">
    <transition name="zoom">
      <v-btn
        v-show="isShow"
        :color="color"
        fab
        title="back to top"
        @click="doScrollToTop()"
      >
        <v-icon>fas fa-angle-up</v-icon>
      </v-btn>
    </transition>
  </div>
</template>

<script>
import { debounce, scrollToTop } from '@/shared/util';

export default {
  name: 'ScrollTop',
  directives: {
    scroll: {
      inserted(el, binding) {
        // 在綁定監聽事件前事先執行一次，初始化使用
        if (binding.modifiers.init) {
          binding.value(el);
        }

        const handle = function handle() {
          const isRemoveEvent = binding.value(el);
          if (isRemoveEvent) {
            window.removeEventListener('scroll', handle);
          }
        };
        window.addEventListener('scroll', handle);
      },
    },
  },
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    bottom: {
      type: Number,
      default: 20,
    },
    right: {
      type: Number,
      default: 20,
    },
    top: Number,
    left: Number,
    // 開始位置，當 btn 到達時才顯示
    startOffsetTop: {
      type: Number,
      default: 0,
    },
    // 停止位置，當 btn 到達時就跳出固定的視窗位置
    stopOffsetTop: Number,
    // 從頁面底部數上來的 停止位置
    stopBodyBottom: Number,
  },
  data() {
    return {
      btnHeight: 0,
      windowHeight: 0,
      bodyHeight: 0,
      windowScrollTop: 0,
    };
  },

  computed: {
    isShow() {
      return this.windowScrollTop >= this.startOffsetTop;
    },

    btnFixedTop() {
      if (this.top || this.top === 0) {
        return this.top;
      }
      return this.windowHeight - this.btnHeight - this.bottom;
    },

    stopPoint() {
      if (this.stopOffsetTop) {
        return this.stopOffsetTop;
      }
      if (this.stopBodyBottom) {
        return this.bodyHeight - this.btnHeight - this.stopBodyBottom;
      }
      return null;
    },

    mainStyle() {
      const btnOffsetTop = this.btnFixedTop + this.windowScrollTop;
      if (this.stopPoint && btnOffsetTop >= this.stopPoint && btnOffsetTop >= this.startOffsetTop) {
        return {
          position: 'absolute',
          top: `${this.stopPoint}px`,
          right: `${this.right}px`,
          left: (this.left || this.left === 0) ? `${this.left}px` : false,
        };
      }

      return {
        position: 'fixed',
        top: `${this.btnFixedTop}px`,
        right: `${this.right}px`,
        left: (this.left || this.left === 0) ? `${this.left}px` : false,
      };
    },
  },

  mounted() {
    this.windowHeight = window.innerHeight;

    window.addEventListener(
      'resize',
      debounce(() => {
        this.windowHeight = window.innerHeight;
      }, 300),
    );
  },

  methods: {
    doScrollToTop() {
      scrollToTop();
    },

    handleScroll(el) {
      this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.btnHeight = el.offsetHeight;
      this.bodyHeight = document.querySelector('body').offsetHeight;
    },
  },
};
</script>

<style lang="scss">
.scroll-top {

  .v-btn {
    height: 3rem;
    width: 3rem;
    font-size: 20px;

    @include respond-to('tablet-down') {
      height: 2.5rem;
      width: 2.5rem;
      font-size: 18px;
    }
  }
}
</style>
