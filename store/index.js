export const strict = false

export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  }
}
