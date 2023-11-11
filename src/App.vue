<template>
    <div>
        <header class="header">
            <q-avatar>
                <img src="./assets/Logo.webp" width="75" height="53">
                Companion
            </q-avatar>
            <CountdownTimer/>
        </header>
        <div class="main">
            <WeeklyWants/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import WeeklyWants from './components/WeeklyWants.vue'
    import CountdownTimer from './components/CountdownTimer.vue'

    var w = ref(window.innerWidth)
    var h = ref(window.innerHeight)
</script>