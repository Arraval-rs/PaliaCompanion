<template>
	<tr>
		<td><img :src="villagerImage" :alt="villagerImage" width="75" height="75">{{villager.Name}}</td>
		<td><input type="checkbox" :checked="villager.dailyGift"></td>
		<td><input type="checkbox" :checked="villager.weeklyRomance"></td>
		<td><img :src="wantImage(villager.weeklyWants[0])" :alt="wantImage(villager.weeklyWants[0])" width="75" height="75">{{villager.weeklyWants[0]}}</td>
		<td><img :src="wantImage(villager.weeklyWants[1])" :alt="wantImage(villager.weeklyWants[1])" width="75" height="75">{{villager.weeklyWants[1]}}</td>
		<td><img :src="wantImage(villager.weeklyWants[2])" :alt="wantImage(villager.weeklyWants[2])" width="75" height="75">{{villager.weeklyWants[2]}}</td>
		<td><img :src="wantImage(villager.weeklyWants[3])" :alt="wantImage(villager.weeklyWants[3])" width="75" height="75">{{villager.weeklyWants[3]}}</td>
	</tr>
</template>

<script setup>
	import { computed } from 'vue'
	//potentially turn villager table into a component for filtering?
	const props = defineProps({
		villager: Object
	})

	const villagerImage = computed(() => {
		return './src/assets/Villagers/' + props.villager.Name + '.webp'
	})

	function wantImage(item) {
		return './src/assets/Items/' + item + '.webp'
	}
</script>