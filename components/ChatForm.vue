<template>
  <div class="input-container">
    <img v-if="isAuthenticated" :src="user.photoURL" class="avatar">
    <textarea v-model="text" v-if="isAuthenticated" v-on:keydown.enter="addMessage"></textarea>
    <textarea v-model="text" v-else v-on:click="openLoginModal"></textarea>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%">
      <div class="image-container">
        <img src="~/assets/google_sign_in.png" v-on:click="login"/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { db, firebase } from '~/plugins/firebase'

import Vue from 'vue'
import { mapActions } from 'vuex'
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
  computed: {
    user() {
      return this.$store.state.user
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    ...mapActions(['setUser']),
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
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          this.setUser(user)
          console.log(this.$store.state.user)
          this.dialogVisible = false
        }).catch((error) => {
          window.alert(error)
        })
    }
  }
}
</script>

<style scoped>
.input-container {
  padding: 10px;
  height: 100%;
  display: flex;
}

.avatar {
  height: 100%;
  width: auto;
}

textarea {
  width: 100%;
  height: 100%;
}

.image-container {
  display: flex;
  justify-content: center;
}

img {
  width: 70%;
  cursor: pointer;
}
</style>
