<template>
	<v-card class="card">
        <v-card-title class="card-title">
            Furniture Collection<br>(Work in Progress)
        </v-card-title>
        <v-card-text class="card-text">
            <div>
				<v-expansion-panels>
					<v-expansion-panel class="expansion-panel" v-for="(set, colIndex) in collection">
						<v-expansion-panel-title>
							{{ set.Name }} Furniture
						</v-expansion-panel-title>
						<v-expansion-panel-text>
							<table class="collection-table">
								<thead>
									<th v-for="i in 5"></th> <!--empty headers to align columns -->
								</thead>
								<tbody>
									<tr v-for="i in Math.ceil(set.pieces.length/5)">
										<td v-for="(j, index) in set.pieces.slice(5*(i-1), 5*(i-1)+5)">
											<button @click="updateFurniture(colIndex, 5*(i-1)+index)" :class="{ 	'image-button-clicked': j.status === 'No', 
																			'image-button':  j.status === 'Yes' }">
												<img class="item-image" :src="imagePath(set.Name, j.Name)">
											</button>
											<p v-text="j.Name"></p>
										</td>
									</tr>
								</tbody>
							</table>
						</v-expansion-panel-text>
					</v-expansion-panel>
				</v-expansion-panels>
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
	import { ref } from 'vue'
	import Furniture from '@/assets/Collections/Furniture.json'

	const collection = ref(Furniture)

	function updateFurniture(collectionIndex, pieceIndex) {
		if (collection.value[collectionIndex].pieces[pieceIndex].status === 'No') {
			collection.value[collectionIndex].pieces[pieceIndex].status = 'Yes'
		} else {
			collection.value[collectionIndex].pieces[pieceIndex].status = 'No'
		}
	}

	function resetCollection() {
		for (let i = 0; i < collectionRef.value.length; i++) {
			for (let j = 0; j < collectionRef.value[i].length; j++) {
				collectionRef.value[i][j].status = 'No'
			}
		}
	}

	function imagePath(setName, itemName) {
		return new URL('../assets/Furniture/' + setName + ' ' + itemName + '.webp', import.meta.url).href
	}
</script>