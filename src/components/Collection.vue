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
						<CollectionDisplay :items="collection.Common" />
					</v-list-item>
					<v-list-item class="list-item">
						Uncommon
						<v-divider :thickness="dividerThickness" class="uncommon-divider"></v-divider>
						<CollectionDisplay :items="collection.Uncommon" />
					</v-list-item>
					<v-list-item class="list-item">
						Rare
						<v-divider :thickness="dividerThickness" class="rare-divider"></v-divider>
						<CollectionDisplay :items="collection.Rare" />
					</v-list-item>
					<v-list-item class="list-item">
						Epic
						<v-divider :thickness="dividerThickness" class="epic-divider"></v-divider>
						<CollectionDisplay :items="collection.Epic" />
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

	const props = defineProps({
		title: String,
		collection: Object
	})

	function resetCollection() {

	}
</script>