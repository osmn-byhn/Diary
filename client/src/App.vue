<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import Popup from './components/Popup.vue'

</script>

<template>
  <Navbar />
  <Popup />
  <RouterView />
</template>

<style scoped lang="scss">

</style>
