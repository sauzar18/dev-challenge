import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  csrfToken: null,
  authUser: null,
  post: null
})

export const mutations = {
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken
  },
  SET_USER(state, user) {
    state.authUser = user
  },
  SET_POST(state, data) {
    state.post = data
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
    if (req.cookies) {
      commit('SET_CSRF_TOKEN', req.csrfToken())
    }
  },
  post({ commit }, { title, tags, content, cover, canonical, series, type, _csrf }) {
    return fetch('/api/post', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _csrf,
        'X-CSRF-TOKEN': _csrf
      },
      body: JSON.stringify({ title, tags, content, cover, canonical, series, type, _csrf })
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('記事の投稿に失敗しました。')
        } else {
          return res.json()
        }
      })
      .then((post) => {
        commit('SET_POST', post)
      })
  }
}
