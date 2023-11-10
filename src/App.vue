<template>
    <div>
        <header class="header">
            <q-avatar>
                <img src="./assets/Logo.webp" width="75" height="53">
                Companion
            </q-avatar>
        </header>
        <div class="main">
            <WeeklyWants/>
        </div>
    </div>
</template>

<script setup>
    import WeeklyWants from './components/WeeklyWants.vue'
</script>