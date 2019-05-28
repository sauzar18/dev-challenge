import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  csrfToken: null,
  authUser: null,
  post: null,
  article: null,
  comment: null,
  like: null
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
  },
  SET_ARTICLE(state, data) {
    state.article = data
  },
  SET_COMMENT(state, data) {
    state.comment = data
  },
  SET_LIKE(state, data) {
    state.like = data
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
    if (req.cookies) {
      commit('SET_CSRF_TOKEN', req.cookies['auth._token._csrf'])
    }
  },
  post({ commit }, { id, name, avatar, usertag, title, tags, content, cover, canonical, series, type, _csrf }) {
    return fetch('/api/posts', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _csrf,
        'X-CSRF-TOKEN': _csrf
      },
      body: JSON.stringify({ id, name, avatar, usertag, title, tags, content, cover, canonical, series, type, _csrf })
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('記事の投稿に失敗しました。')
        } else {
          this.$router.go('/')
        }
      })
      .then((post) => {
        commit('SET_POST', post)
      })
  },
  removeFile({ commit }, { filepath, _csrf }) {
    return fetch('/api/remove_file', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _csrf,
        'X-CSRF-TOKEN': _csrf
      },
      body: JSON.stringify({ filepath })
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('画像の削除に失敗しました')
        } else {
          this.$router.go()
        }
      })
  }
}
