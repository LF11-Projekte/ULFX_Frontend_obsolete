<script setup>
import Comment from '@/components/Comment.vue';
import ProfileCircle from "@/components/ProfileCircle.vue";

const props = defineProps(['text', 'title', 'creatorId']);

import { ref } from 'vue';

const image = ref("src/assets/ULFX_Logo.png");

</script>

<template>
  <div class="post">

    <div class="left">
      <div class="title" style="display: flex; justify-content: space-between">
        <ProfileCircle :user="props.creatorId" />
        {{ props.title }}
        <div/>
      </div>
      <img :src="image" class="image" alt="img">
      <div class="text">
        {{ props.text }}
      </div>
    </div>

    <div class="right" >
      <div class="comments">
        <Comment v-for="i in 32" />
      </div>
      <div class="actionbar">
        <input type="text"/>
        <button class="like" />
        <button class="dislike" />
        <button class="comment" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.post {
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  border: var(--border);
  padding: 10px;
}

.post, .left, .right {
  display: flex;
}

.left, .right {
  flex-direction: column;
  flex-basis: 50%;
}

.right {
  justify-content: space-between;
}

.title {
  font-size: larger;
  text-align: center;
  margin: 25px;
  max-height: fit-content;
}

.image {
  max-width: 100%;
  height: auto;
}

.text {
  width: 100%;
  height: auto;
}

.comments {
  overflow: auto;
  min-height: 400px;
  max-height: 0;
}

.actionbar {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}

.actionbar input {
  background-color: var(--color-background);
  flex-grow: 1;
  padding: 0 5px;
  outline: none;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  border: var(--border);
  margin: 5px;
}

.actionbar button {
  background-position-x: center;
  background-position-y: center;
  background-size: contain;
  width: var(--size-actionbuttons);
  height: var(--size-actionbuttons);
  border-radius: 25%;
  margin: 5px;

  background-color: var(--color-button);
  outline: none;
  border: var(--border);
  box-shadow: var(--box-shadow);
}

.actionbar button:hover {
  background-color: var(--color-button-hover);
}

.comment {
  background-image: url('@/assets/comment.svg');
}

.dislike {
  background-image: url('@/assets/dislike.svg');
}

.like {
  background-image: url('@/assets/like.svg');
}
</style>