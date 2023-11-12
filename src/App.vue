<template>
    <div class="main">
        <div>
            <v-toolbar class="header">
                <v-app-bar-nav-icon class="header-item"></v-app-bar-nav-icon>
                <img src="./assets/Logo.png" :width="100" :height="60">
                <v-toolbar-title class="header-item">Palia Companion</v-toolbar-title>
                <CountdownTimer class="header-item" @weeklyReset="resetVillagers" @dailyReset="resetDailies"/>
            </v-toolbar>
        </div>
        <div class="flex-container">
            <v-card class="card">
                <v-card-title class="card-title">
                    Villager Weekly Wants
                </v-card-title>
                <v-card-text class="card-text">
                    <div>
                        <WeeklyWants ref="weeklyWantsRef"/>
                    </div>
                </v-card-text>
                <v-card-actions class="card-actions">
                    <v-btn variant="tonal" @click="resetVillagers">
                        Reset Villagers
                    </v-btn>
                    <v-btn variant="tonal" @click="clearStorage">
                        Clear Local Storage
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div> 
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import WeeklyWants from './components/WeeklyWants.vue'
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

    function clearStorage() {
        weeklyWantsRef.value.clearStorage()
    }
</script>