<template>
  <v-app id="app">
    <the-navbar></the-navbar>
    <main v-if="!loading">
      <transition appear name="fade-in">
        <router-view/>
      </transition>
      <c-scroll-top
        :startOffsetTop="500"
        :stopBodyBottom="84"
      ></c-scroll-top>
    </main>
    <div v-else class="bouncing-loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'loading',
    ]),
  },

  mounted() {
    this.initialData();
  },

  methods: {
    ...mapActions([
      'initialData',
    ]),
  },
};
</script>

<style lang="scss">
main {
  margin-bottom: $spacing-l;
}

</style>
