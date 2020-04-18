<template>
   <div class="chats-container">
    <message v-for="message in messages" :message="message"/>
 </div>
</template>

<script>
import Message from '~/components/Message'

export default {
 props: ['messages'],
 components: {
   Message
 },
 mounted () {
   console.log(this.messages)
 }
}
</script>

<style>
.chats-container {
 padding: 16px;
}
</style>