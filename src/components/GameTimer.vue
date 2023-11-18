<template>
	<v-card class="card">
        <v-card-title class="card-title">
            In-Game Time
        </v-card-title>
        <v-card-subtitle class="card-subtitle">
        	<table class="collection-table">
        		<tr>
        			<td>
        				Current Game Time: {{ hours }}:{{minutes}} {{noonSwitch}} ({{dayPhase}})
        			</td>
        			<td>
        				<input type="checkbox" id="checkbox" v-model="showAnyTime">
			        	<label for="checkbox">
			        		Show 'Any Time' Bugs and Fish
			        	</label>
        			</td>
        		</tr>
        	</table>
        </v-card-subtitle>
        <v-card-text class="card-text">
        	<v-expansion-panels>
        		<v-expansion-panel class="expansion-panel">
        			<v-expansion-panel-title>
						Missing Bugs
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<CollectionDisplay :fadeButtons="false" :items="missingBugs"/>
					</v-expansion-panel-text>
        		</v-expansion-panel>
        		<v-expansion-panel class="expansion-panel">
        			<v-expansion-panel-title>
						Missing Fish
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<CollectionDisplay :fadeButtons="false" :items="missingFish"/>
					</v-expansion-panel-text>
        		</v-expansion-panel>
        		<v-expansion-panel class="expansion-panel">
        			<v-expansion-panel-title>
						Wanted Bugs
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<CollectionDisplay :fadeButtons="false" :items="wantedBugs"/>
					</v-expansion-panel-text>
        		</v-expansion-panel>
        		<v-expansion-panel class="expansion-panel">
        			<v-expansion-panel-title>
						Wanted Fish
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						<CollectionDisplay :fadeButtons="false" :items="wantedFish"/>
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
	import CollectionDisplay from './CollectionDisplay.vue'

	const props = defineProps({
		bugs: Array,
		fish: Array,
		villagers: Array
	})

	// vars
	const gameRatio = 1 / 24 // 1 real-world hour === 1 in-game day
	var intervalId = 0

	// refs
	const showAnyTime = ref(true)
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
		if (3 <= parseInt(hours.value, 10) && parseInt(hours.value, 10) < 6 && noonSwitch.value === 'am') {
			dayPhase.value = 'Morning'
		} else if ((6 <= parseInt(hours.value, 10) && noonSwitch.value === 'am') || (parseInt(hours.value, 10) < 6 && noonSwitch.value === 'pm')) {
			dayPhase.value = 'Day'
		} else if (6 <= parseInt(hours.value, 10) && parseInt(hours.value, 10) < 9 && noonSwitch.value === 'pm' ) {
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

	watch(showAnyTime, async (newAny, oldAny) => {
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
					if (props.bugs[i][j].additionalDetails.includes('Any Time') && showAnyTime.value === true || props.bugs[i][j].additionalDetails.includes(dayPhase.value)) {
						bugsToCatch.push(props.bugs[i][j])
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
					if (props.fish[i][j].additionalDetails.includes('Any Time') && showAnyTime.value === true || props.fish[i][j].additionalDetails.includes(dayPhase.value)) {
						fishToCatch.push(props.fish[i][j])
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
					if (props.bugs[indices[0]][indices[1]].additionalDetails.includes('Any Time') && showAnyTime.value === true || props.bugs[indices[0]][indices[1]].additionalDetails.includes(dayPhase.value)) {
						bugsToCatch.push(props.villagers[i].weeklyWants[j])
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
					if (props.fish[indices[0]][indices[1]].additionalDetails.includes('Any Time') && showAnyTime.value === true || props.fish[indices[0]][indices[1]].additionalDetails.includes(dayPhase.value)) {
						fishToCatch.push(props.villagers[i].weeklyWants[j])
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