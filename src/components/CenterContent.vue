<script setup>
</script>

<template>
  <div class="content">
    <div class="space"/>
    <div class="middle">
        <slot />
    </div>
    <div class="space"/>
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
  margin-bottom: var(--margin-bottom-middle);
  padding: var(--paddig-middle);
  background-color: var(--color-background);
  flex-grow: 1;
}

.space {
  width: var(--space-width);
  min-width: var(--space-width);
  max-width: var(--space-width);
}
</style>
