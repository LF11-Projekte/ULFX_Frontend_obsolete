<script setup>
import router from '@/router';
import ProfileCircle from '@/components/ProfileCircle.vue';

import {useUserStore} from "@/stores/user.js";

const userStore = useUserStore();

</script>

<template>
  <div class="navbar">
    <div class="navbar-left" v-on:click="router.push('/')">
      <img src="@/assets/ULFX_Logo.png">
    </div>

    <div class="navbar-center">
      <div class="searchbar">
        <img src="@/assets/magnifying-glass.svg">
        <input type="text"/>
      </div>
    </div>

    <div class="navbar-right">
      <button v-if="userStore.userId === 0">Anmelden</button>
      <ProfileCircle v-else class="profile-picture" user="me"/>
    </div>
  </div>
</template>

<style scoped>
img {
  height: var(--navbar-height);
}

.navbar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: var(--color-navbar);
  top: 0;
  left: 0;
  height: var(--navbar-height);
  width: 100%;
}

.navbar-left {
  margin: auto auto auto 0;
  max-height: 100%;
}

.navbar-center {
  margin: auto 0;
  max-height: 100%;
}

.navbar-right {
  display: flex;
  max-height: 100%;
  margin: auto 15px auto auto;
}

.searchbar {
  background-color: var(--color-searchbar);
  height: var(--height-searchbar);
  width: var(--width-searchbar);
  border-radius: var(--border-radius-searchbar);

  display: flex;
}

.searchbar img {
  height: var(--height-searchbar);
}

.searchbar input {
  background-color: var(--color-searchbar);
  margin-right: var(--border-radius-searchbar);
  width: 100%;
  outline: none;
  height: auto;
  border: 0;
}
</style>