<template>
  <v-app id="app">
    <the-navbar></the-navbar>
    <main>
      <router-view/>
      <c-scroll-top></c-scroll-top>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">

</style>
