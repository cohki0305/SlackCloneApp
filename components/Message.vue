<template>
  <div class="chat-container">
    <div class="thumbnail-container">
      <img src="https://pbs.twimg.com/profile_images/1131882065337602049/0JRUGd3S_400x400.jpg" />
    </div>
    <div class="message-container">
      <div class="user-name">cohki0305</div>
      <div class="message">今日も良い天気ですね</div>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  padding: 8px;
}

.thumbnail-container {
  margin-right: 16px;
}

.thumbnail-container img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.user-name {
  font-weight: bold;
}
</style>
