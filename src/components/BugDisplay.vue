<template>
	<table class="collection-table">
		<thead>
			<th v-for="i in 5"></th> <!--empty headers to align columns -->
		</thead>
		<tbody>
			<tr v-for="i in Math.ceil(props.items.length/5)">
				<td v-for="j in props.items.slice(5*(i-1), 5*(i-1)+5)">
					<button class="image-button">
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
		items: Array
	})

	function imagePath(bugName) {
		return new URL('../assets/Items/' + bugName + '.webp', import.meta.url).href
	}
</script>