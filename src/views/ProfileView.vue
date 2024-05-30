<script setup>
import CenterContent from '@/components/CenterContent.vue';
import Post from '@/components/Post.vue';
import ProfileCircle from '@/components/ProfileCircle.vue';

let username = "Username";
let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis, eaque unde qui odio harum? Autem eum minima voluptatum earum beatae quos deserunt incidunt non laborum exercitationem sapiente culpa provident impedit neque doloremque aliquid quasi at eius, enim laboriosam, harum quidem itaque accusamus? Iusto, accusantium vel. Molestias officia non velit.";
let isFollowing = false;
let followers = 0;

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
              <button class="followButton">
                <span v-if="isFollowing">Entfolgen</span>
                <span v-else>Folgen</span>
                <span>{{ followers }}</span>
              </button>
            </div>
          </div>
          <div />
        </div>

        <div class="right">
          <input class="username" type="text" v-bind:value="username"/>
          <input class="description" type="text" v-bind:value="description"/>
        </div>

        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
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