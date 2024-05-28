<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/">Home</RouterLink>
  </Navbar>

  <RouterView />
</template>

<style scoped>
</style>