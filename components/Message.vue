<template>
 <div class="chat-container">
   <!-- <div class="thumbnail-container">
     <img v-bind:src="message.user.thumbnail" />
   </div> -->
   <div class="message-container">
     <!-- <div class="user-name">{{ displayName }}</div> -->
     <div class="message">{{ message.text }}</div>
   </div>
 </div>
</template>

<script>
export default {
  props: ['message'],
  computed: {
    displayName(){
      return `@${this.message.user.name}`
   }
 }
}
</script>