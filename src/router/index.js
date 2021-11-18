import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailMovie from '../views/DetailMovie.vue'
import DetailNowPlaying from '../views/DetailNowPlaying.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail-movie/:imdbID',
    name: 'DetailMovie',
    component: DetailMovie
  },
  {
    path: '/detail-nowplaying/:imdbID',
    name: 'DetailNowPlaying',
    component: DetailNowPlaying
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
