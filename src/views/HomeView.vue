<script setup>
import Post from "@/components/Post.vue";
import CenterContent from "@/components/CenterContent.vue";

import { Api } from "@/API";

const api = new Api();
api.user.create({

})
api.comment.create({
  userId: "123",
  referenceId: "123",
  referenceType: "COMMENT",
  text: "string"
})
console.log(api.comment.getAll())

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
    <Post class="post-space" v-for="i in 32"/>
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
