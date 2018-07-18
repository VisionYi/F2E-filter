<template>
  <div class="scroll-top" :style="mainStyle">
    <v-btn :color="color" fab @click="scrollToTop">
      <v-icon>fas fa-angle-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    bottom: {
      type: String,
      default: '1.25rem',
    },
    right: {
      type: String,
      default: '1.25rem',
    },
  },
  data() {
    return {
      mainStyle: {
        bottom: this.bottom,
        right: this.right,
      },
    };
  },
  methods: {
    scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(this.scrollToTop);
        window.scrollTo(0, c - (c / 6));
      }
    },
  },
};
</script>

<style lang="scss">
.scroll-top {
  position: fixed;

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
