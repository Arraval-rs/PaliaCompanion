<template>
    <div>
        <header class="header">
            <button class="drawerButton">
                <img src="./assets/Logo.webp" :width="75" :height="53">   
            </button>
            Companion
            <CountdownTimer @weeklyReset="resetWeeklies" @dailyReset="resetDailies"/>
        </header>
        <div>
            <div class="main">
                <WeeklyWants ref="weeklyWantsRef"/>
            </div>
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

    function resetWeeklies() {
        weeklyWantsRef.value.clearVillagers()
        console.log('Cleared weekly gifts')
    }
</script>