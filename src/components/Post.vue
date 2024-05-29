<script setup>
import Comment from '@/components/Comment.vue';
</script>

<template>
  <div class="post">
    <div class="title">Titel</div>
    <div class="post-content">
      <div class="image">
        <img src="@/assets/ULFX_Logo.png "/>
      </div>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum esse aperiam hic tempore, quod iste, nulla excepturi officia illum voluptatum incidunt recusandae corrupti perferendis temporibus voluptatem? Harum pariatur quisquam suscipit cum iste alias fugit, eveniet aliquam odit quia unde nihil laboriosam praesentium iure repellendus, in libero nobis? Ullam, blanditiis!
      </div>
    </div>
    <div class="post-actions">
      <div class="comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
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
  display: flex;
  flex-direction: row;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  padding: var(--padding-post);
  border: var(--border);

  max-height: var(--max-post-height);
}

.post-content {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  width: 50%;
  min-width: 50%;
  height: 100%;
}

.image {
  margin: 5px;
}

.image img {
  width: 100%;
}

.text {
  padding: 5px;
}

.post-actions {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}

.comments {
  max-height: 100%;
  overflow: auto;
}

.actionbar {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}

.actionbar input {
  background-color: var(--color-searchbar);
  width: 100%;
  margin: 5px;
  padding-left: 5px;
  padding-right: 5px;
  outline: none;
  border: var(--border);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}

.actionbar button {
  background-position-x: center;
  background-position-y: center;
  background-size: contain;
  max-width: var(--size-actionbuttons);
  min-width: var(--size-actionbuttons);
  width: var(--size-actionbuttons);
  max-height: var(--size-actionbuttons);
  min-height: var(--size-actionbuttons);
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