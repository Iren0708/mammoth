import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Price from '@/views/Price.vue'
import Trainer from '@/views/Trainer.vue'
import Schedule from '@/views/Schedule.vue'
import Blog from '@/views/Blog.vue'
import Contacts from '@/views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Главная | Школа бокса "Мамонт"'
    }
  },
  {
    path: '/price',
    name: 'price',
    component: Price,
    meta: {
      title: 'Цены | Школа бокса "Мамонт"'
    }
  },
  {
    path: '/trener',
    name: 'trainer',
    component: Trainer,
    meta: {
      title: 'Тренер | Школа бокса "Мамонт"'
    }
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: Schedule,
    meta: {
      title: 'Расписание | Школа бокса "Мамонт"'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Блог | Школа бокса "Мамонт"'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      title: 'Контакты | Школа бокса "Мамонт"'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/blog/:slug',
    name: 'BlogNewsOne',
    component: () => import('../views/BlogNewsOne.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    }
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Школа бокса "Мамонт"'
})

export default router