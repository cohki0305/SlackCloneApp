<template>
  <div class="chats-container">
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
    <message />
  </div>
</template>

<script>
import Message from '~/components/Message'

export default {
  components: {
    Message
  }
}
</script>

<style>
.chats-container {
  padding: 16px;
}
</style>
