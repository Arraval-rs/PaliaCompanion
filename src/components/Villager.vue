<template>
	<tr>
		<td>
			<img :src="villagerImage" :alt="villagerImage" width="75" height="75">
			{{villager.Name}}
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 0)" :class="{'button': !villager.dailyGift, 'clicked': villager.dailyGift}">
				<img src="../assets/Gifting.webp" alt="../assets/Gifting.webp" width="75" height="75">
			</button>
			<br>
			Daily Gift
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 1)" :class="{'button': !villager.weeklyRomance, 'clicked': villager.weeklyRomance}">
				<img src="../assets/Items/Box of Chocolates.webp" alt="../assets/Items/Box of Chocolates.webp" width="75" height="75">
			</button>
			<br>
			Weekly Romance
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 2)" :class="{'button': !villager.weeklyWants[0].Gifted, 'clicked': villager.weeklyWants[0].Gifted}">
				<img :src="wantImage(villager.weeklyWants[0].Name)" :alt="wantImage(villager.weeklyWants[0].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[0].Name}}
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 3)" :class="{'button': !villager.weeklyWants[1].Gifted, 'clicked': villager.weeklyWants[1].Gifted}">
				<img :src="wantImage(villager.weeklyWants[1].Name)" :alt="wantImage(villager.weeklyWants[1].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[1].Name}}
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 4)" :class="{'button': !villager.weeklyWants[2].Gifted, 'clicked': villager.weeklyWants[2].Gifted}">
				<img :src="wantImage(villager.weeklyWants[2].Name)" :alt="wantImage(villager.weeklyWants[2].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[2].Name}}
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 5)" :class="{'button': !villager.weeklyWants[3].Gifted, 'clicked': villager.weeklyWants[3].Gifted}">
				<img :src="wantImage(villager.weeklyWants[3].Name)" :alt="wantImage(villager.weeklyWants[3].Name)" width="75" height="75">
			</button>
			<br>
			{{villager.weeklyWants[3].Name}}
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