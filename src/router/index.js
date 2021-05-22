import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import Info from '../views/Info.vue'
import Gallery from '../views/Gallery.vue'
import Scout from '../views/Scout.vue'
import Leader from '../views/Leader.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Info',
    name: 'Info',
    component: Info
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/Scout',
    name: 'Scout',
    component: Scout
  },
  {
    path: '/Leader',
    name: 'Leader',
    component: Leader
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
