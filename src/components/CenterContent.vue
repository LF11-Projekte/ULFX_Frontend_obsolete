<script setup>
</script>

<template>
  <div class="content">
    <div class="middle">
        <slot />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: var(--space-width) auto var(--space-width);
  margin-top: var(--navbar-height);
}

.middle {
  grid-column-start: 2;
  margin-top: var(--margin-top);
  margin-bottom: var(--margin-bottom);
  padding: var(--paddig);
  background-color: var(--color-background);
}
</style>
