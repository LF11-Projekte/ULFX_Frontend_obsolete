<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";

import { useUserStore } from '@/stores/user'

const user = useUserStore();

user.auth();

</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
</style>