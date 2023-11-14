<template>
    <div class="main">
        <div>
            <v-toolbar class="header">
                <v-app-bar-nav-icon class="header-item"></v-app-bar-nav-icon>
                <img class="logo" src="./assets/Logo.png" :width="100" :height="60">
                <v-toolbar-title class="header-item">(Unofficial) Companion</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-card class="header-card" variant="outlined">
                    <v-card-text class="flex-container">
                        This is a fan-made website and is not affiliated with Palia or Singularity 6
                    </v-card-text>
                </v-card>
                <v-spacer></v-spacer>
                <CountdownTimer class="header-item" @weeklyReset="resetVillagers" @dailyReset="resetDailies"/>
            </v-toolbar>
        </div>
        <div class="flex-container">
            <WeeklyWants/>
        </div> 
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import WeeklyWants from './components/WeeklyWants.vue'
    import BugCollection from './components/BugCollection.vue'
    import CountdownTimer from './components/CountdownTimer.vue'

    // need to pair to additional console logs and pass to child component props
    const debug = false

    // child component refs
    const weeklyWantsRef = ref(null)

    function resetDailies() {
        weeklyWantsRef.value.clearDailyGifts()
        console.log('Cleared daily gifts')
    }

    function resetVillagers() {
        weeklyWantsRef.value.clearVillagers()
        console.log('Cleared weekly gifts')
    }
</script>