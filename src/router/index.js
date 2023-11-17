// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { Bugs, Fish, Dishes, Furniture} from '@/assets/collections.js'
import Collection from '@/components/Collection'
import GameTimer from '@/components/GameTimer.vue'
import FurnitureCollection from '@/components/FurnitureCollection.vue'

const BugCollection = Collection

// route components
    const routes = [
        { path: '/PaliaCompanion/', component: () => import('@/components/HomePage') },
        { path: '/PaliaCompanion/WeeklyWants', component: () => import('@/components/WeeklyWants') },
        { path: '/PaliaCompanion/BugCollection', component: Collection, props: { title: "Bug Collection", collection: Bugs}},
        { path: '/PaliaCompanion/FishCollection', component: Collection, props: { title: "Fish Collection", collection: Fish}},
        { path: '/PaliaCompanion/DishCollection', component: Collection, props: { title: "Dish Collection", collection: Dishes}},
        { path: '/PaliaCompanion/FurnitureCollection', component: FurnitureCollection, props: { collection: Furniture}},
        { path: '/PaliaCompanion/GameTimers', component: GameTimer},
        { path: '/PaliaCompanion/*', component: () => import('@/components/HomePage')}
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

