<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  data () {
    return {
      text: null
    }
  },
  methods: {
    addMessage(event) {
      if (this.keyDownedForJPConversion(event)) { return }
      const channelId = this.$route.params.id
      db.collection('channels').doc(channelId).collection('messages').add({ text: this.text })
        .then(() => {
          this.text = null
        })
    },
    keyDownedForJPConversion (event) {
      const codeForConversion = 229
      return event.keyCode === codeForConversion
    }
  }
}
</script>

<style scoped>
.input-container {
  padding: 10px;
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
}
</style>
