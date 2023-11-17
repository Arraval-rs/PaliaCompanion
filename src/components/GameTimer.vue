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
        	<v-expansion-panels>
        		<v-expansion-panel>
        			<v-expansion-panel-title>
						Missing Bugs
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						{{ missingBugs }}
					</v-expansion-panel-text>
        		</v-expansion-panel>
        		<v-expansion-panel>
        			<v-expansion-panel-title>
						Missing Fish
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						{{ missingFish }}
					</v-expansion-panel-text>
        		</v-expansion-panel>
        		<v-expansion-panel>
        			<v-expansion-panel-title>
						Wanted Bugs
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						{{ wantedBugs }}
					</v-expansion-panel-text>
        		</v-expansion-panel>
        		<v-expansion-panel>
        			<v-expansion-panel-title>
						Wanted Fish
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						{{ wantedFish }}
					</v-expansion-panel-text>
        		</v-expansion-panel>
        	</v-expansion-panels>
        </v-card-text>
        <v-card-actions class="card-actions">
        </v-card-actions>
    </v-card>
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { timer } from '@/composables/timer.js'

	const props = defineProps({
		bugs: Array,
		fish: Array,
		villagers: Array
	})

	// vars
	const gameRatio = 1 / 24 // 1 real-world hour === 1 in-game day
	var intervalId = 0

	// refs
	const dayPhase = ref('')
	const { days, hours, minutes, seconds, noonSwitch } = timer(gameRatio, currentGameTime(), false, false)
	const missingBugs = ref([])
	const missingFish = ref([])
	const wantedBugs = ref([])
	const wantedFish = ref([])

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

	watch(minutes, async (newHours, oldHours) => {
		updatePhase()
	})

	watch(dayPhase, async (newPhase, oldPhase) => {
		missingFish.value = getMissingFish()
		missingBugs.value = getMissingBugs()
		wantedBugs.value = getWantedBugs()
		wantedFish.value = getWantedFish()
	})

	// missing item info
	function getMissingBugs() {
		var bugsToCatch = []
		for (let i = 0; i < props.bugs.length; i++) {
			for (let j = 0; j < props.bugs[i].length; j++) {
				if (props.bugs[i][j].status === 'No') {
					if (props.bugs[i][j].additionalDetails.includes('Any Time') || props.bugs[i][j].additionalDetails.includes(dayPhase.value)) {
						bugsToCatch.push(props.bugs[i][j].Name)
					}
				}
			}
		}
		return bugsToCatch
	}

	function getMissingFish() {
		var fishToCatch = []
		for (let i = 0; i < props.fish.length; i++) {
			for (let j = 0; j < props.fish[i].length; j++) {
				if (props.fish[i][j].status === 'No') {
					if (props.fish[i][j].additionalDetails.includes('Any Time') || props.fish[i][j].additionalDetails.includes(dayPhase.value)) {
						fishToCatch.push(props.fish[i][j].Name)
					}
				}
			}
		}
		return fishToCatch
	}

	function getWantedBugs() {
		var bugsToCatch = []
		for (let i = 0; i < props.villagers.length; i++) {
			for (let j = 0; j < props.villagers[i].weeklyWants.length; j++) {
				const indices = indexInCollection(props.villagers[i].weeklyWants[j].Name, props.bugs)
				if (!props.villagers[i].weeklyWants[j].Gifted && indices[0] > -1) {
					if (props.bugs[indices[0]][indices[1]].additionalDetails.includes('Any Time') || props.bugs[indices[0]][indices[1]].additionalDetails.includes(dayPhase.value)) {
						bugsToCatch.push(props.villagers[i].weeklyWants[j].Name)
					}
				}
			}
		}
		return bugsToCatch
	}

	function getWantedFish() {
		var fishToCatch = []
		for (let i = 0; i < props.villagers.length; i++) {
			for (let j = 0; j < props.villagers[i].weeklyWants.length; j++) {
				const indices = indexInCollection(props.villagers[i].weeklyWants[j].Name, props.fish)
				if (!props.villagers[i].weeklyWants[j].Gifted && indices[0] > -1) {
					if (props.fish[indices[0]][indices[1]].additionalDetails.includes('Any Time') || props.fish[indices[0]][indices[1]].additionalDetails.includes(dayPhase.value)) {
						fishToCatch.push(props.villagers[i].weeklyWants[j].Name)
					}
				}
			}
		}
		return fishToCatch
	}

	function indexInCollection(itemName, collection) {
		for (let i = 0; i < collection.length; i++) {
			for (let j = 0; j < collection[i].length; j++) {
				if (collection[i][j].Name === itemName) {
					return [i, j]
				}
			}
		}
		return [-1, -1]
	}
</script>