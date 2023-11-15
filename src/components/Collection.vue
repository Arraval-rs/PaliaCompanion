<template>
	<v-card class="card">
        <v-card-title class="card-title">
            {{ title }}
        </v-card-title>
        <v-card-text class="card-text">
            <div>
				<v-list class="list">
					<v-list-item class="list-item">
						Common
						<v-divider :thickness="dividerThickness" class="common-divider"></v-divider>
						<CollectionDisplay :items="collectionRef[0]" @selected-collection-item="eventPassthrough($event, 0)"/>
					</v-list-item>
					<v-list-item class="list-item">
						Uncommon
						<v-divider :thickness="dividerThickness" class="uncommon-divider"></v-divider>
						<CollectionDisplay :items="collectionRef[1]" @selected-collection-item="eventPassthrough($event, 1)"/>
					</v-list-item>
					<v-list-item class="list-item">
						Rare
						<v-divider :thickness="dividerThickness" class="rare-divider"></v-divider>
						<CollectionDisplay :items="collectionRef[2]" @selected-collection-item="eventPassthrough($event, 2)"/>
					</v-list-item>
					<v-list-item class="list-item">
						Epic
						<v-divider :thickness="dividerThickness" class="epic-divider"></v-divider>
						<CollectionDisplay :items="collectionRef[3]" @selected-collection-item="eventPassthrough($event, 3)"/>
					</v-list-item>
				</v-list>
			</div>
        </v-card-text>
        <v-card-actions class="card-actions">
            <v-btn variant="tonal" @click="resetCollection">
                Reset Collection
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script setup>
	import { ref } from 'vue';
	import { useStorage } from '@vueuse/core';
	import CollectionDisplay from './CollectionDisplay.vue'

	const dividerThickness = 4

	const emit = defineEmits(['selected-collection-item'])

	const props = defineProps({
		title: String,
		collection: Object
	})

	const collectionRef = ref(useStorage(props.title, props.collection, localStorage, { mergeDefaults: (storageValue, defaults) => mergeStorage(storageValue, defaults) }))
	localStorage.setItem('test', collectionRef.value)

	function resetCollection() {
		for (let i = 0; i < collectionRef.value.length; i++) {
			for (let j = 0; j < collectionRef.value[i].length; j++) {
				collectionRef.value[i][j].status = 'No'
			}
		}
	}

	function eventPassthrough(index, rarity) {
		emit('selected-collection-item', index, rarity, props.title)
	}

	function mergeStorage(storageValue, defaults) {
		var newValues = defaults
		for (let i = 0; i < storageValue.length; i++) {
			for (let j = 0; j < storageValue[i].length; j++) {
				for (let k = 0; k < storageValue[i].length; k++) {
					if (storageValue[i][j].Name === newValues[i][k].Name) {
						//console.log('Assigning status ' + storageValue[i][j].status + ' for ' + storageValue[i][j].Name + ' to ' + newValues[i][k].Name)
						newValues[i][k].status = storageValue[i][k].status
					}
				}
			}
		}
		return newValues
	}
</script>