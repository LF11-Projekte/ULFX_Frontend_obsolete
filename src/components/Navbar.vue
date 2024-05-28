<script setup>

import {ref} from "vue";
const showSubmenu = ref(true);

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
      <div class="profile">
        <img src="@/assets/profile.svg">
      </div>
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
}

.navbar-center {
  margin: auto 0;
}

.navbar-right {
  display: flex;
  margin: auto 0 auto auto;
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

.profile {
  user-select: none;
  margin: 5px;
  background-color: var(--color-profile-background);
  border-radius: var(--border-radius-profile-circle);
  height: var(--height-profile-circle);
  width: var(--height-profile-circle);
  overflow: hidden;
}

.profile img {
  height: var(--height-profile-image);
  transform: translate(50%, 50%);
  display: block;
}

.profile:hover {
  background-color: rgba(150,150,150,0.8);
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
</style>