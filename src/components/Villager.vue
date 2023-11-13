<template>
	<tr>
		<td>
			<img class="portrait" :src="villagerImage" :alt="villagerImage">
			<div class="table-text">
				{{villager.Name}}
			</div>
		</td>
		<td>
			<div>
				<button @click="$emit('gifted', villagerIndex, 0)" :class="{'image-button': !villager.dailyGift, 'image-button-clicked': villager.dailyGift}">
					<img class="item-image" src="../assets/Gifting.webp" alt="Gifting.webp">
				</button>
			</div>
			<div class="table-text">
				Daily Gift
			</div>
		</td>
		<td>
			<div>
				<button v-if="props.villager.romance" @click="$emit('gifted', villagerIndex, 1)" :class="{'image-button': !villager.weeklyRomance, 'image-button-clicked': villager.weeklyRomance}">
					<img class="item-image" src="../assets/Items/Box of Chocolates.webp" alt="Box of Chocolates.webp">
				</button>
				<button v-else class="image-button-disabled" disabled>
					<img class="item-image" src="../assets/Items/Friendship.webp" alt="Friendship.webp">
				</button>
			</div>
			<div v-if="props.villager.romance" class="table-text">
				Weekly Romance
			</div>
			<div v-else class="table-text">
				Not Romanceable
			</div>
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 2)" :class="{'image-button': !villager.weeklyWants[0].Gifted, 'image-button-clicked': villager.weeklyWants[0].Gifted}">
				<img class="item-image" :src="wantItem[0]" :alt="props.villager.weeklyWants[0].Name">
			</button>
			<div class="table-text">
				{{villager.weeklyWants[0].Name}}
			</div>
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 3)" :class="{'image-button': !villager.weeklyWants[1].Gifted, 'image-button-clicked': villager.weeklyWants[1].Gifted}">
				<img class="item-image" :src="wantItem[1]" :alt="props.villager.weeklyWants[1].Name">
			</button>
			<div class="table-text">
				{{villager.weeklyWants[1].Name}}
			</div>
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 4)" :class="{'image-button': !villager.weeklyWants[2].Gifted, 'image-button-clicked': villager.weeklyWants[2].Gifted}">
				<img class="item-image" :src="wantItem[2]" :alt="props.villager.weeklyWants[2].Name">
			</button>
			<div class="table-text">
				{{villager.weeklyWants[2].Name}}
			</div>
		</td>
		<td>
			<button @click="$emit('gifted', villagerIndex, 5)" :class="{'image-button': !villager.weeklyWants[3].Gifted, 'image-button-clicked': villager.weeklyWants[3].Gifted}">
				<img class="item-image" :src="wantItem[3]" :alt="props.villager.weeklyWants[3].Name">
			</button>
			<div class="table-text">
				{{villager.weeklyWants[3].Name}}
			</div>
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

	console.log('Villager romance is ' + props.villager.romance)

	const villagerImage = new URL('../assets/Villagers/' + props.villager.Name + '.webp', import.meta.url).href

	const wantItem = [
		new URL('../assets/Items/' + props.villager.weeklyWants[0].Name + '.webp', import.meta.url).href,
		new URL('../assets/Items/' + props.villager.weeklyWants[1].Name + '.webp', import.meta.url).href,
		new URL('../assets/Items/' + props.villager.weeklyWants[2].Name + '.webp', import.meta.url).href,
		new URL('../assets/Items/' + props.villager.weeklyWants[3].Name + '.webp', import.meta.url).href
	]
</script>