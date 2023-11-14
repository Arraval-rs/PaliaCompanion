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
						<CollectionDisplay ref="commonItems" :items="collectionRef.Common" @selected-collection-item="eventPassthrough($event, 'Common')"/>
					</v-list-item>
					<v-list-item class="list-item">
						Uncommon
						<v-divider :thickness="dividerThickness" class="uncommon-divider"></v-divider>
						<CollectionDisplay :items="collectionRef.Uncommon" @selected-collection-item="eventPassthrough($event, 'Uncommon')"/>
					</v-list-item>
					<v-list-item class="list-item">
						Rare
						<v-divider :thickness="dividerThickness" class="rare-divider"></v-divider>
						<CollectionDisplay :items="collectionRef.Rare" @selected-collection-item="eventPassthrough($event, 'Rare')"/>
					</v-list-item>
					<v-list-item class="list-item">
						Epic
						<v-divider :thickness="dividerThickness" class="epic-divider"></v-divider>
						<CollectionDisplay :items="collectionRef.Epic" @selected-collection-item="eventPassthrough($event, 'Epic')"/>
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

	const collectionRef = ref(props.collection)

	const commonItems = ref(null)

	function resetCollection() {

	}

	function eventPassthrough(index, rarity) {
		emit('selected-collection-item', index, rarity, props.title)
	}
</script>