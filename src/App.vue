<template>
    <v-app>
    <v-app-bar class="header">
        <v-app-bar-nav-icon class="header-item" @click.stop="navDrawer = !navDrawer"></v-app-bar-nav-icon>
        <img class="logo" src="./assets/Logo.png" :width="100" :height="60">
        <v-toolbar-title class="header-title">(Unofficial) Companion</v-toolbar-title>
        <v-spacer></v-spacer>
        <CountdownTimer class="header-item" @weeklyReset="resetVillagers" @dailyReset="resetDailies"/>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="navDrawer" location="left" :width="201">
        <v-list nav>
            <v-list-item prepend-avatar="./assets/Home.png" class="list-item" title="Home" @click="navPage('/')"></v-list-item>
            <v-list-item prepend-avatar="./assets/Gift.webp" class="list-item" title="Weekly Wants" @click="navPage('/WeeklyWants')"></v-list-item>
            <v-list-item prepend-avatar="./assets/Bug.webp" class="list-item" title="Bugs" @click="navPage('/BugCollection')"></v-list-item>
            <v-list-item prepend-avatar="./assets/Fish.webp" class="list-item" title="Fish" @click="navPage('/FishCollection')"></v-list-item>
            <v-list-item prepend-avatar="./assets/Cooking.webp" class="list-item" title="Dishes" @click="navPage('/DishCollection')"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <div class="main">
        <div class="flex-container">
            <router-view v-slot="{Component}">
                <component ref="routerViewRef" :is="Component"/>
            </router-view>
        </div> 
    </div>
</v-app>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import WeeklyWants from './components/WeeklyWants.vue'
    import CountdownTimer from './components/CountdownTimer.vue'

    // router info
    const router = useRouter()
    const route = useRoute()
    var navDrawer = ref(true)
    const routerViewRef = ref(null)

    function navPage(page) {
        router.push('/PaliaCompanion' + page)
    }

    // Weekly wants info
    function resetVillagers() {
        routerViewRef.value.clearVillagers()
    }

    function resetDailies() {
        routerViewRef.value.clearDailyGifts()
    }
</script>