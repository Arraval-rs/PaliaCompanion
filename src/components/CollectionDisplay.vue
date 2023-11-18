<template>
	<table class="collection-table">
		<thead>
			<th v-for="i in 5"></th> <!--empty headers to align columns -->
		</thead>
		<tbody>
			<tr v-for="i in Math.ceil(props.items.length/5)">
				<td v-for="(j, index) in props.items.slice(5*(i-1), 5*(i-1)+5)">
					<button @click="emit('selected-collection-item', 5*(i-1)+index)" :class="{ 	'image-button-clicked': items[5*(i-1)+index].status === 'No' && props.fadeButtons === true,
																								'image-button-quality': items[5*(i-1)+index].status === 'Quality!' && props.fadeButtons === true, 
																								'image-button': 'true'}">
						<img class="item-image" :src="imagePath(j.Name)" :alt="j.Name">
					</button>
					<p v-text="j.Name"></p>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
	const props = defineProps({
		items: Array,
		fadeButtons: Boolean
	})

	const emit = defineEmits(['selected-collection-item'])

	function imagePath(itemName) {
		return new URL('../assets/Items/' + itemName + '.webp', import.meta.url).href
	}
</script>