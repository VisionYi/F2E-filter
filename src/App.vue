<template>
  <v-app id="app">
    <the-navbar></the-navbar>
    <main>
      <router-view/>
      <c-scroll-top
        :startOffsetTop="500"
        :stopBodyBottom="102"
      ></c-scroll-top>
    </main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

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

</style>
