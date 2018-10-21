import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export default () => {
  const router = createRouter()

  console.log('=============> IN CREATE APP <================')

  const app = new Vue({
    router,
    render: h => h(App)
  })

  return { app, router }
}
