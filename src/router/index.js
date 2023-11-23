// Composables
import { ref } from 'vue'
import { useStorage } from '@vueuse/core';
import { createRouter, createMemoryHistory } from 'vue-router'
import WeeklyWants from '@/components/WeeklyWants'
import Collection from '@/components/Collection'
import GameTimer from '@/components/GameTimer.vue'
import FurnitureCollection from '@/components/FurnitureCollection.vue'
import Bugs from '@/assets/Collections/Bugs.json'
import Fish from '@/assets/Collections/Fish.json'
import Dishes from '@/assets/Collections/Dishes.json'
import Furniture from '@/assets/Collections/Furniture.json'
import Villagers from '@/assets/Collections/Villagers.json'

const VillagerCollection = ref(useStorage('Villagers', Villagers, localStorage, { mergeDefaults: (storageValue, defaults) => mergeVillagers(storageValue, defaults) }))
const BugCollection = ref(useStorage("Bug Collection", Bugs, localStorage, { mergeDefaults: (storageValue, defaults) => mergeCollection(storageValue, defaults) }))
const FishCollection = ref(useStorage("Fish Collection", Fish, localStorage, { mergeDefaults: (storageValue, defaults) => mergeCollection(storageValue, defaults) }))
const DishCollection = ref(useStorage("Dish Collection", Dishes, localStorage, { mergeDefaults: (storageValue, defaults) => mergeCollection(storageValue, defaults) }))

// route components
    const routes = [
        { path: '/PaliaCompanion/', component: () => import('@/components/HomePage') },
        { path: '/PaliaCompanion/WeeklyWants', component: WeeklyWants, props: {villagers: VillagerCollection.value}},
        { path: '/PaliaCompanion/BugCollection', component: Collection, props: { title: "Bug Collection", collection: BugCollection.value}},
        { path: '/PaliaCompanion/FishCollection', component: Collection, props: { title: "Fish Collection", collection: FishCollection.value}},
        { path: '/PaliaCompanion/DishCollection', component: Collection, props: { title: "Dish Collection", collection: DishCollection.value}},
        { path: '/PaliaCompanion/FurnitureCollection', component: FurnitureCollection},
        { path: '/PaliaCompanion/GameTimers', component: GameTimer, props: { bugs: Bugs, fish: Fish, villagers: VillagerCollection.value}},
        { path: '/PaliaCompanion/*', component: () => import('@/components/HomePage')}
    ]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

function mergeCollection(storageValue, defaults) {
    var newValues = defaults
    for (let i = 0; i < storageValue.length; i++) {
        for (let j = 0; j < storageValue[i].length; j++) {
            if(storageValue[i][j].status !== 'No') {
                for (let k = 0; k < newValues[i].length; k++) {
                    if (storageValue[i][j].Name === newValues[i][k].Name) {
                        console.log("Assigning status '" + storageValue[i][j].status + "' to " + newValues[i][k].Name + " from storage")
                        newValues[i][k].status = storageValue[i][k].status
                    }
                }
            }
        }
    }
    return newValues
}

function mergeVillagers(storageValue, defaults) {
    if (defaults.length > storageValue.length) {
        console.log('More default villagers than storage. Loading default villagers')
        return defaults
    }
    for (let i = 0; i < defaults.length; i++) {
        for (let j = 0; j < defaults[i].weeklyWants.length; j++) {
            if (defaults[i].weeklyWants[j].Name !== storageValue[i].weeklyWants[j].Name) {
                console.log('Weekly wants have been updated. Loading default villagers.\n\n' + 
                            'Incorrect weekly want for: ' + defaults[i].Name + '(default) and ' + storageValue[i].Name + '(storage)\n\n' +
                            'Incorrect want is: ' + defaults[i].weeklyWants[j].Name + '(default) and ' + storageValue[i].weeklyWants[j].Name + '(storage)'
                    )
                return defaults
            }
            storageValue[i].romance = defaults[i].romance
        }
    }
    console.log('Loading stored villagers')
    return storageValue
}

function mergeFurniture(storageValue, defaults) {

}

export default router

