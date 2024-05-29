<script setup>
import ProfileCircle from '@/components/ProfileCircle.vue';

import {ref} from "vue";
const showSubmenu = ref(false);

</script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <img src="@/assets/ULFX_Logo.png">
    </div>

    <div class="navbar-center">
      <div class="searchbar">
        <img src="@/assets/magnifying-glass.svg">
        <input type="text"/>
      </div>
    </div>

    <div class="navbar-right">
      <ProfileCircle class="profile-picture"/>
      <div class="menu">
        <img class="menu-icon" src="@/assets/menu.svg" @click="showSubmenu = !showSubmenu">
        <div v-show="showSubmenu" id="submenu">
          <p class="submenu-entry">test</p>
        </div>
      </div>
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
  margin: auto 0 auto auto;
  max-height: 100%;
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

.menu-icon:hover {
  background-color: #D9D9D9;
}

#submenu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: var(--navbar-height);
}

.submenu-entry {
  color: #D9D9D9;
  display: block;
  background-color: var(--color-submenu);
  margin: 0;
  padding: 5px;
  text-align: center;
  min-width: var(--min-width-submenu-entry);
}

.submenu-entry:hover {
  background-color: var(--color-submenu-hover);
}

.profile-picture {
  margin: auto;
  margin-right: 10px;
}
</style>