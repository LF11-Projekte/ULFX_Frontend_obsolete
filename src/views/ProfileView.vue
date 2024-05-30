<script setup>
import CenterContent from '@/components/CenterContent.vue';
import Post from '@/components/Post.vue';
import ProfileCircle from '@/components/ProfileCircle.vue';

import { useUserStore} from "@/stores/user.js";
import {ref} from "vue";

let x = document.baseURI.split("/");
let rs = x[x.length - 1];

let userId = useUserStore().userId;
let username = useUserStore().userName;
let description = useUserStore().description;

let isNotMe = rs !== "me";
if (isNotMe) {
  userId = rs;
  fetch("http://localhost:9999/api/User/" + rs).then((res) => res.json()).then((data) => {
    username = data.username;
    description = data.description;
  })
}

let isFollowing = false;
let followers = 0;

let posts = ref([]);

fetch("http://localhost:9999/api/Post").then((response) => response.json()).then((data) => {
  for (let post of data) {
    if (userId === post.creatorId)
      posts.value.push({title: post.title, text: post.text});
  }
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
        <div class="left" style="display: flex; justify-content: space-between;">
          <div>
            <ProfileCircle size="150px"/>
            <div style="display: flex; justify-content: center; margin-top: 10px;">
              <button v-if="isNotMe" class="followButton">
                <span v-if="isFollowing">Entfolgen</span>
                <span v-else>Folgen</span>
                <span>{{ followers }}</span>
              </button>

              <span v-if="!isNotMe">{{ followers }}</span>

            </div>
          </div>
          <div />
        </div>

        <div class="right">
          <input class="username" type="text" v-bind:value="username"/>
          <input class="description" type="text" v-bind:value="description"/>
        </div>
        <template v-for="post in posts">
          <Post :text="post.text" :title="post.title" :creatorId="userId" />
        </template>
    </CenterContent>
</template>

<style scoped>

.content {
    width: 100%;
}

.left {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 25px;
}

.left .profile-picture {
    margin: auto;
}

.right {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 25px;
}

.username {
    font-size: larger;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 5px;
}

.description {
    font-size: small;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
}

.post {
    margin-bottom: 10px;
}

.post:last-child {
    margin-bottom: 0;
}

.followButton {
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100px;
    outline: none;
    border: var(--border);
    box-shadow: var(--box-shadow);
    background-color: var(--color-background);
}

.followButton span {
    margin: auto;
}

.followButton:hover {
    background-color: var(--color-button-hover);
}

</style>