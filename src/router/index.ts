import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Portal from '../examples/Portal.vue'
import About from '../examples/views/About.vue'
import Link from '../examples/views/Link.vue'
import Button from '../examples/views/Button.vue'
import Icon from '../examples/views/Icon.vue'
import Layout from '../examples/views/Layout.vue'
import Radio from '../examples/views/Radio.vue'
import Card from '../examples/views/Card.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Portal',
    component: Portal,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/layout',
        name: 'Layout',
        component: Layout
      },
      {
        path: '/link',
        name: 'Link',
        component: Link
      },
      {
        path: '/button',
        name: 'Button',
        component: Button
      },
      {
        path: '/icon',
        name: 'Icon',
        component: Icon
      },
      {
        path: '/radio',
        name: 'Radio',
        component: Radio
      },
      {
        path: '/card',
        name: 'Card',
        component: Card
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
