export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line dot-notation
    config.headers['Authorization'] = 'Bearer ' + store.state.csrfToken
  })
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/')
    }
  })
}
