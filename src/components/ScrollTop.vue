<template>
  <div class="scroll-top" :style="mainStyle" ref="scrollBtn">
    <transition name="zoom">
      <v-btn
        v-show="isShow"
        :color="color"
        fab
        @click="onScrollToTop()"
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
      windowOffsetTop: 0,
    };
  },

  computed: {
    isShow() {
      return this.windowOffsetTop >= this.startOffsetTop;
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
        return this.bodyHeight - this.stopBodyBottom;
      }
      return null;
    },

    mainStyle() {
      if (this.stopPoint && (this.btnFixedTop + this.windowOffsetTop) >= this.stopPoint) {
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
    this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop;
    this.btnHeight = this.$refs.scrollBtn.offsetHeight;
    this.windowHeight = window.innerHeight;
    this.bodyHeight = document.querySelector('body').offsetHeight;

    window.addEventListener('scroll', () => {
      this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop;
      this.btnHeight = this.$refs.scrollBtn.offsetHeight;
      this.bodyHeight = document.querySelector('body').offsetHeight;
    });

    window.addEventListener(
      'resize',
      debounce(() => {
        this.windowHeight = window.innerHeight;
      }, 300),
    );
  },

  methods: {
    onScrollToTop() {
      scrollToTop();
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
