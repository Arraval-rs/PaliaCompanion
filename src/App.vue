<template>
    <v-app>
    <v-app-bar class="header">
        <v-app-bar-nav-icon class="header-item" @click.stop="navDrawer = !navDrawer"></v-app-bar-nav-icon>
        <img class="logo" src="./assets/Logo.png" :width="100" :height="60">
        <v-toolbar-title class="header-title">(Unofficial) Companion</v-toolbar-title>
        <v-spacer></v-spacer>
        <p class="header-item">
            Weekly Reset: {{ weekly.days }} days, {{ weekly.hours }} hours, {{ weekly.minutes }} minutes, {{ weekly.seconds }} seconds
            <br>
            Daily Reset: {{ daily.hours }} hours, {{ daily.minutes }} minutes, {{ daily.seconds }} seconds
        </p>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="navDrawer" location="left" :width="200">
        <v-list nav>
            <v-list-item prepend-avatar="./assets/Home.png" class="list-item" title="Home" @click="navPage('/'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Gift.webp" class="list-item" title="Weekly Wants" @click="navPage('/WeeklyWants'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Bug.webp" class="list-item" title="Bugs" @click="navPage('/BugCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Fish.webp" class="list-item" title="Fish" @click="navPage('/FishCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Cooking.webp" class="list-item" title="Dishes" @click="navPage('/DishCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Furniture.webp" class="list-item" title="Furniture" @click="navPage('/FurnitureCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Clock.webp" class="list-item" title="Game Timers" @click="navPage('/GameTimers'); infoDrawer=false"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer class="drawer" v-model="infoDrawer" location="right" :width="325">
        <button class="close-button" @click="infoDrawer = false">
            X
        </button>
        <br>
        <ItemInfo ref="ItemInfoRef"/>
    </v-navigation-drawer>
    <div class="main">
        <div class="flex-container">
            <router-view :key="route.path" v-slot="{Component}">
                <component ref="routerViewRef" :is="Component" @selected-collection-item="handleCollectionEvent"/>
            </router-view>
        </div> 
    </div>
</v-app>
</template>

<script setup>
    import { ref, computed, watch } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { Bugs, Fish, Dishes } from '@/assets/collections.js'
    import { timer } from '@/composables/timer.js'
    import WeeklyWants from '@/components/WeeklyWants.vue'
    import ItemInfo from '@/components/ItemInfo.vue'

    // Router info
    const router = useRouter()
    const route = useRoute()
    var navDrawer = ref(true)
    const routerViewRef = ref(null)

    function navPage(page) {
        router.push('/PaliaCompanion' + page)
    }

    // Timer info
    const weekly = timer(1, timeToWeeklyReset(), true, true, 7 * 24 * 60 * 60)
    const daily = timer(1, mod(timeToWeeklyReset(), 24 * 60 * 60), true, true, 24 * 60 * 60)

    watch(daily.end, (newDaily, oldDaily) => {
        resetDailies()
    })

    watch(weekly.end, (newDaily, oldDaily) => {
        resetVillagers()
    })

    function timeToWeeklyReset() {
        const now = new Date()
        const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8 - now.getDay(), 4, -now.getTimezoneOffset())
        const nextReset = mod(target.getTime() - now.getTime(), 1000 * 60 * 60 * 24 * 7) // difference mod 1 week
        return nextReset / 1000
    }

    function mod(n, m) {
      return ((n % m) + m) % m;
    }

    // Weekly wants info
    function resetVillagers() {
        if (typeof routerViewRef.value.clearVillagers === 'function') {
            routerViewRef.value.clearVillagers()
        }
        else {
            console.log('Weekly wants not active page. Villagers not reset')
        }
    }

    function resetDailies() {
        if (typeof routerViewRef.value.clearDailyGifts === 'function') {
            routerViewRef.value.clearDailyGifts()
        }
        else {
            console.log('Weekly wants not active page. Villagers not reset')
        }
    }

    // Collections info
    var infoDrawer = ref(false)
    var ItemInfoRef = ref(null)
    function handleCollectionEvent(index, rarity, collection) {
        var col = null
        if (collection.startsWith('Bug')) {
            col = Bugs
        }
        else if (collection.startsWith('Fish')) {
            col = Fish
        }
        else if (collection.startsWith('Dish')) {
            col = Dishes
        }
        else
        {
            console.log("Collection: '" + collection + "' not found!")
        }
        ItemInfoRef.value.updateItem(col[rarity][index])
        infoDrawer.value = true
        console.log('Displaying information for ' + col[rarity][index].Name)
    }
</script>