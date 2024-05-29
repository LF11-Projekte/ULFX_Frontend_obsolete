<script setup>
</script>

<template>
    <div class="profile-picture"></div>
</template>

<style scoped>

.profile-picture {
    max-width: var(--size-profile-picture);
    width: var(--size-profile-picture);
    min-width: var(--size-profile-picture);
    max-height: var(--size-profile-picture);
    height: var(--size-profile-picture);
    min-height: var(--size-profile-picture);
    border-radius: 100%;
    border: 2px solid white;
    background-image: url("@/assets/profile.svg");
    background-color: var(--color-profile-circle-background);
    background-position-x: center;
    background-position-y: center;
    background-size: 20px;
    background-repeat: no-repeat;
}

.profile-picture:hover {
    background-color: var(--color-profile-circle-background-hover);
}
</style>