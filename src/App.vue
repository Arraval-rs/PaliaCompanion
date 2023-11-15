<template>
    <v-app>
    <v-app-bar class="header">
        <v-app-bar-nav-icon class="header-item" @click.stop="navDrawer = !navDrawer"></v-app-bar-nav-icon>
        <img class="logo" src="./assets/Logo.png" :width="100" :height="60">
        <v-toolbar-title class="header-title">(Unofficial) Companion</v-toolbar-title>
        <v-spacer></v-spacer>
        <CountdownTimer class="header-item" @weeklyReset="resetVillagers" @dailyReset="resetDailies"/>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="navDrawer" location="left" :width="200">
        <v-list nav>
            <v-list-item prepend-avatar="./assets/Home.png" class="list-item" title="Home" @click="navPage('/'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Gift.webp" class="list-item" title="Weekly Wants" @click="navPage('/WeeklyWants'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Bug.webp" class="list-item" title="Bugs" @click="navPage('/BugCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Fish.webp" class="list-item" title="Fish" @click="navPage('/FishCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Cooking.webp" class="list-item" title="Dishes" @click="navPage('/DishCollection'); infoDrawer=false"></v-list-item>
            <v-list-item prepend-avatar="./assets/Cooking.webp" class="list-item" title="Game Timers" @click="navPage('/GameTimers'); infoDrawer=false"></v-list-item>
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
    import { ref, computed } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { Bugs, Fish, Dishes } from '@/assets/collections.js'
    import WeeklyWants from './components/WeeklyWants.vue'
    import CountdownTimer from './components/CountdownTimer.vue'
    import ItemInfo from './components/ItemInfo.vue'

    // router info
    const router = useRouter()
    const route = useRoute()
    var navDrawer = ref(true)
    const routerViewRef = ref(null)

    function navPage(page) {
        router.push('/PaliaCompanion' + page)
    }

    // Weekly wants info (update storage or push to event queue and wait for element to be active)
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