<script setup>
import router from '@/router';

const props = defineProps(['user', 'size', 'picture']);

let size = "35px";
let picture = "/src/assets/profile.svg";

if (props.size)
    size = props.size;

</script>

<template>
    <div class="profile-picture" v-on:click="router.push('/profile/' + props.user)" v-bind:style="{minWidth: size, maxWidth: size, minHeight: size, maxHeight: size, backgroundImage: `url(${picture})`}"/>
</template>

<style scoped>

.profile-picture {
    border-radius: 100%;
    border: 2px solid white;
    background-color: var(--color-profile-circle-background);
    background-position-x: center;
    background-position-y: center;
    background-size: 60%;
    background-repeat: no-repeat;
}

.profile-picture:hover {
    background-color: var(--color-profile-circle-background-hover);
}
</style>