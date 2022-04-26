import Vue from 'vue'
import VueRouter from 'vue-router'
import LogView from '@/views/LogView'
import GameView from '@/views/GameView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },

]

const router = new VueRouter({
  routes
})

export default router
