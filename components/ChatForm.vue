<template>
  <div class="input-container">
    <textarea v-model="text" v-on:click="openLoginModal" v-on:keydown.enter="addMessage"></textarea>
    <el-dialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="30%">
      <span>This is a message</span>
    </el-dialog>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default {
  data () {
    return {
      dialogVisible: false,
      text: null
    }
  },
  methods: {
    openLoginModal () {
      this.dialogVisible = true
    },
    addMessage(event) {
      if (this.keyDownedForJPConversion(event)) { return }
      const channelId = this.$route.params.id
      db.collection('channels').doc(channelId).collection('messages').add({
        text: this.text,
        createdAt: new Date().getTime()
      }).then(() => {
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
