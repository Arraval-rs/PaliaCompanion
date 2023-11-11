<template>
	<div>
		<vue-countdown :key="weeklyKey" :time="weeklyCountdown" @end="weeklyResetTime" v-slot="{ days, hours, minutes, seconds }">
			Weekly Reset：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
		</vue-countdown>
		<br>
		<vue-countdown :key="dailyKey" :time="dailyCountdown" @end="dailyResetTime" v-slot="{ hours, minutes, seconds }">
			Daily Reset：{{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
		</vue-countdown>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import VueCountdown from '@chenfengyuan/vue-countdown';

	const emit =  defineEmits(['dailyReset', 'weeklyReset'])

	var weeklyCountdown = ref(1)
	var dailyCountdown = ref(1)
	var weeklyKey = ref(0)
	var dailyKey = ref(0)

	function weeklyResetTime() {
		console.log('Attempting to reset daily timer with key ' + weeklyKey.value)
		if(weeklyKey.value > 0) {
			emit('weeklyReset')
			console.log('Emitted weeklyReset event')
		}
		const now = new Date()
		const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8 - now.getDay(), 1, 30)
		const nextReset = (target - now) % (1000 * 60 * 60 * 24 * 7) // difference mod 1 week
		weeklyCountdown = nextReset
		weeklyKey.value++
		console.log('Daily timer reset with new key ' + weeklyKey.value)
	}

	function dailyResetTime() {
		console.log('Attempting to reset daily timer with key ' + dailyKey.value)
		if(dailyKey.value > 0) {
			emit('dailyReset')
			console.log('Emitted dailyReset event')
		}
		const now = new Date()
		const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 1, 30)
		const nextReset = (target - now) % (1000 * 60 * 60 * 24) // difference mod 1 day
		console.log('Current: ' + now + '\nTarget: ' + target + '\nDifference: ' + nextReset + '\nDate of diff: ' + new Date(nextReset))
		dailyCountdown.value = nextReset
		dailyKey.value++
		console.log('Daily timer reset with new key ' + dailyKey.value + ' and time ' + nextReset)
	}
</script>