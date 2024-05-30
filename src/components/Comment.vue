<script setup>
import ProfileCircle from './ProfileCircle.vue';
</script>

<template>
    <div class="comment">
        <ProfileCircle class="profile-picture"/>
        <div class="text">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, adipisci. Modi excepturi repudiandae eaque voluptates iusto ipsa explicabo mollitia voluptate.
        </div>
    </div>
</template>

<style scoped>
.comment {
    display: flex;
    box-shadow: var(--box-shadow);
    margin: 5px;
    border: var(--border);
}

.profile-picture {
    margin: 5px;
}

.text {
    margin: 5px;
    font-size: small;
}
</style>