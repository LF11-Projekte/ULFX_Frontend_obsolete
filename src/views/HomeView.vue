<script setup>
import Post from "@/components/Post.vue";
</script>

<template>
  <div class="content">
    <div class="space-left"/>
    <div class="middle">
      <Post class="submenu-entry"/>
      <Post class="submenu-entry"/>
      <Post class="submenu-entry"/>
      <Post class="submenu-entry"/>
    </div>
    <div class="space-right"/>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: var(--navbar-height);
}

.middle {
  margin-top: var(--margin-top-middle);
  padding: var(--paddig-middle);
  background-color: var(--color-background);
  flex-grow: 1;
}

.space-left {
  width: var(--space-width);
}

.space-right {
  width: var(--space-width);
}
</style>
