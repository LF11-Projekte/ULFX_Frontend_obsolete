<script setup>
import { ref } from 'vue';
import Post from "@/components/Post.vue";
import CenterContent from "@/components/CenterContent.vue";

let posts = ref([]);

fetch("http://localhost:9999/api/Post").then((response) => response.json()).then((data) => {
  posts.value = data;
})

// for resizing posts comments
function resize() {
  for (let element of document.getElementsByClassName("post")) {
    let comments = element.getElementsByClassName("comments")[0];
    let left = element.getElementsByClassName("left")[0];
    let actionbar = element.getElementsByClassName("actionbar")[0];

    comments.style.maxHeight = 0 + "px";
    let maxHeight = left.offsetHeight - actionbar.offsetHeight;
    comments.style.maxHeight = maxHeight + "px";
  }
}

setTimeout(resize, 100);
window.addEventListener("resize", resize);
</script>

<template>
  <CenterContent>
    <template v-for="post in posts">
      <Post :text="post.text" :title="post.title" :creatorId="post.creatorId"/>
    </template>
  </CenterContent>
</template>

<style scoped>

.post-space:last-child {
  margin-bottom: 0;
}

.post-space {
  margin-bottom: var(--post-space-between);
}
</style>
