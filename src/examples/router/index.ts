import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Portal from '../views/portal.vue'
import QuickStart from '../views/quickstart.vue'
import Link from '../views/link.vue'
import Button from '../views/button.vue'
import Icon from '../views/icon.vue'
import Layout from '../views/layout.vue'
import Radio from '../views/radio.vue'
import Card from '../views/card.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Portal',
    component: Portal,
    redirect: '/quickstart',
    children: [
      {
        path: '/quickstart',
        name: 'QuickStart',
        component: QuickStart
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
