<template>
	<v-card class="card">
        <v-card-title class="card-title">
            In-Game Timers<br>(Work in Progress)
        </v-card-title>
        <v-card-subtitle class="card-subtitle">
        	Current Game Time: {{ hours }}:{{minutes}} {{noonSwitch}}
            <br>
            Current Phase: {{ dayPhase }}
        </v-card-subtitle>
        <v-card-text class="card-text">
        </v-card-text>
        <v-card-actions class="card-actions">
        </v-card-actions>
    </v-card>
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { timer } from '@/composables/timer.js'

	// vars
	const gameOffset = 5 // offset in game-minutes
	const gameRatio = 1 / 24 // 1 real-world hour === 1 in-game day
	var intervalId = 0
	var counter = 0

	// refs
	const gameHours = ref(0)
	const gameMinutes = ref(0)
	//const noonSwitch = ref('')
	const dayPhase = ref('')
	const { days, hours, minutes, seconds, noonSwitch } = timer(gameRatio, currentGameTime(), false, false)

	function currentGameTime() {
		const now = new Date()
		return (now.getUTCMinutes()  * 60 + now.getSeconds()) / gameRatio
	}

	function updatePhase() {
		if (3 <= hours.value < 6 && noonSwitch.value === 'am') {
			dayPhase.value = 'Morning'
		} else if ((6 <= hours.value && noonSwitch.value === 'am') || (hours.value < 6 && noonSwitch.value === 'pm')) {
			dayPhase.value = 'Day'
		} else if (6 <= hours.value < 9 && noonSwitch.value === 'pm' ) {
			dayPhase.value = 'Evening'
		} else {	
			dayPhase.value = 'Night'
		}
	}

	watch(hours, async (newHours, oldHours) => {
		updatePhase()
	})
</script>