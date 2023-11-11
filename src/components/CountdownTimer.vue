<template>
	<div>
		<vue-countdown :key="weeklyKey" :time="weeklyCountdown" @end="weeklyResetTime" v-slot="{ days, hours, minutes, seconds }">
			Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
		</vue-countdown>
		<br>
		<vue-countdown :key="dailyKey" :time="dailyCountdown" @end="dailyResetTime" v-slot="{ hours, minutes, seconds }">
			Time Remaining：{{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
		</vue-countdown>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import VueCountdown from '@chenfengyuan/vue-countdown';

	var weeklyCountdown = ref(1)
	var dailyCountdown = ref(1)
	const weeklyKey = ref(0)
	const dailyKey = ref(0)

	function weeklyResetTime() {
		const now = new Date()
		const nextReset = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8 - now.getDay(), 1, 30) - now
		weeklyCountdown = nextReset
		weeklyKey.value++
	}

	function dailyResetTime() {
		const now = new Date()
		const nextReset = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 1, 30) - now
		dailyCountdown.value = nextReset
		dailyKey.value++
	}
</script>