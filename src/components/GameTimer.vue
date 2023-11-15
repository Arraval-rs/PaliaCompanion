<template>
	<v-card class="card">
        <v-card-title class="card-title">
            In-Game Timers
        </v-card-title>
        <v-card-text class="card-text">
            Current Game Time: {{ gameHours }}:{{gameMinutes}}
        </v-card-text>
        <v-card-actions class="card-actions">
        </v-card-actions>
    </v-card>
</template>

<script setup>
	// https://palia.wiki.gg/wiki/Guide:Time_Passage_in_Palia
	import { ref, onMounted } from 'vue'

	// vars
	const gameOffset = 5 // offset in game-minutes
	var intervalId = 0
	var counter = 0

	// refs
	const gameHours = ref(0)
	const gameMinutes = ref(0)

	onMounted(() => {
		setInitialTime()
		intervalId = setInterval(() => {
			updateTime()
		}, 1000)
	})

	function updateTime() {
		counter = mod(++counter, 60 * 60)
		gameHours.value = Math.floor((counter/2.5+gameOffset)/60)
		gameMinutes.value = Math.floor(mod(counter/2.5+gameOffset, 60))
	}

	function setInitialTime() {
		const currentSeconds = mod(new Date() - (new Date()).getTimezoneOffset() * 60, 1000 * 60 * 60)
		counter = currentSeconds/1000
		gameHours.value = Math.floor((counter/2.5+gameOffset)/60)
		gameMinutes.value = Math.floor(mod(counter/2.5+gameOffset, 60))
	}

	function mod(n, m) {
	  return ((n % m) + m) % m;
	}
</script>