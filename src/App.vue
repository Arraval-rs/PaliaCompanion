<template>
    <div>
        <v-toolbar>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <img src="./assets/Logo.webp" :width="75" :height="53">
            <v-toolbar-title>Palia Companion</v-toolbar-title>
            <CountdownTimer @weeklyReset="resetVillagers" @dailyReset="resetDailies"/>
        </v-toolbar>
    </div>
    <div style="height: 600px">
        <v-card class="card">
            <v-card-title>
                Villager Weekly Wants
            </v-card-title>
            <v-card-text class="card-text">
                <div>
                    <WeeklyWants ref="weeklyWantsRef"/>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="resetVillagers">
                    Reset Villagers
                </v-btn>
                <v-btn @click="clearStorage">
                    Clear Local Storage
                </v-btn>
            </v-card-actions>
        </v-card>
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