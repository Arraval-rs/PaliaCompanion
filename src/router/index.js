// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { Bugs, Fish, Dishes } from '@/assets/collections.js'
import Collection from '@/components/Collection'

// route components
    const routes = [
        { path: '/PaliaCompanion', component: () => import('@/components/WeeklyWants') },
        { path: '/PaliaCompanion/BugCollection', component: Collection, props: { title: "Bug Collection (Currently no function)", collection: Bugs}},
        { path: '/PaliaCompanion/FishCollection', component: Collection, props: { title: "Fish Collection (Currently no function)", collection: Fish}},
        { path: '/PaliaCompanion/DishCollection', component: Collection, props: { title: "Dish Collection (Currently no function)", collection: Dishes}}
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

