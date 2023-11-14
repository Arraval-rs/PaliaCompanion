// Composables
import { createRouter, createWebHistory } from 'vue-router'

// route components
    const routes = [
        { path: '/PaliaCompanion', component: () => import('@/components/WeeklyWants') },
        { path: '/PaliaCompanion/BugCollection', component: () => import('@/components/BugCollection') }
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router