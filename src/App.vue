<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";

import { useUserStore } from '@/stores/user'

const user = useUserStore();

if (user.userId === 0)
  user.auth();

</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
</style>