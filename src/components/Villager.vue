<template>
	<tr>
		<td>
			<img :src="villagerImage" :alt="villagerImage" width="75" height="75">
			{{villager.Name}}
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 0)">
				<img src="../assets/Gifting.webp" alt="../assets/Gifting.webp" width="75" height="75">
			</button>
			<input type="checkbox" :checked="villager.dailyGift">
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 1)">
				<img src="../assets/Items/Box of Chocolates.webp" alt="../assets/Items/Box of Chocolates.webp" width="75" height="75">
			</button>
			<input type="checkbox" :checked="villager.weeklyRomance">
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 2)">
				<img :src="wantImage(villager.weeklyWants[0].Name)" :alt="wantImage(villager.weeklyWants[0].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[0].Name}}
			<input type="checkbox" :checked="villager.weeklyWants[0].Gifted">
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 3)">
				<img :src="wantImage(villager.weeklyWants[1].Name)" :alt="wantImage(villager.weeklyWants[1].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[1].Name}}
			<input type="checkbox" :checked="villager.weeklyWants[1].Gifted">
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 4)">
				<img :src="wantImage(villager.weeklyWants[2].Name)" :alt="wantImage(villager.weeklyWants[2].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[2].Name}}
			<input type="checkbox" :checked="villager.weeklyWants[2].Gifted">
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 5)">
				<img :src="wantImage(villager.weeklyWants[3].Name)" :alt="wantImage(villager.weeklyWants[3].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[3].Name}}
			<input type="checkbox" :checked="villager.weeklyWants[3].Gifted">
		</td>
	</tr>
</template>

<script setup>
	import { computed } from 'vue'
	//potentially turn villager table into a component for filtering?
	const props = defineProps({
		villager: Object,
		villagerIndex: Number
	})

	const villagerImage = computed(() => {
		return './src/assets/Villagers/' + props.villager.Name + '.webp'
	})

	function wantImage(item) {
		return './src/assets/Items/' + item + '.webp'
	}
</script>