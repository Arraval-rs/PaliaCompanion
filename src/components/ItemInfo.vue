<template>
	<div class='drawer'>
		<img :src="imagePath()" class="info-image">
	</div>
	<v-card>
		<v-card-title class="card-title">
			{{ item.Name }}
		</v-card-title>
		<v-card-text class="card-text">
			Obtained: {{ item.status }}
			<v-divider :thickness="dividerThickness"></v-divider>
			<div v-html="item.additionalDetails"></div>
			<v-divider :thickness="dividerThickness"></v-divider>
		</v-card-text>
		<v-card-actions class="card-actions">
			<v-btn variant="tonal" @click="item.status='No'">
                Unobtained
            </v-btn>
            <v-btn variant="tonal" @click="item.status='Yes'">
                Obtained
            </v-btn>
            <v-btn variant="tonal" @click="item.status='Quality!'">
                Quality
            </v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
	import { ref } from 'vue'

	const dividerThickness = 4
	const placeholderItem = { Name: 'Celebration Cake', status: 'null', additionalDetails: 'null'}

	var item = ref(placeholderItem)

	function updateItem(newItem) {
		item.value = newItem
	}

	function imagePath() {
		return new URL('../assets/Items/' + item.value.Name + '.webp', import.meta.url).href
	}

	defineExpose({
    	updateItem
	})
</script>