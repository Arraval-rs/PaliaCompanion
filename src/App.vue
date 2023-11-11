<template>
    <div>
        <header class="header">
            <q-avatar>
                <img src="./assets/Logo.webp" width="75" height="53">
                Companion
            </q-avatar>
            <CountdownTimer @weeklyReset="resetWeeklies" @dailyReset="resetDailies"/>
        </header>
        <div class="main">
            <WeeklyWants ref="weeklyWantsRef"/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import WeeklyWants from './components/WeeklyWants.vue'
    import CountdownTimer from './components/CountdownTimer.vue'

    const debug = false

    var w = ref(window.innerWidth)
    var h = ref(window.innerHeight)
    const weeklyWantsRef = ref(null)

    function resetDailies() {
        weeklyWantsRef.value.clearDailyGifts()
        console.log('Cleared daily gifts')
    }

    function resetWeeklies() {
        weeklyWantsRef.value.clearVillagers()
        console.log('Cleared weekly gifts')
    }
</script>