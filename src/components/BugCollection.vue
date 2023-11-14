<template>
	<v-card class="card">
        <v-card-title class="card-title">
            Bug Collection (does not do anything yet)
        </v-card-title>
        <v-card-text class="card-text">
            <div>
				<v-list class="list">
					<v-list-item class="list-item">
						Common
						<v-divider :thickness="dividerThickness" class="common-divider"></v-divider>
						<BugDisplay :items="bugs.Common" />
					</v-list-item>
					<v-list-item class="list-item">
						Uncommon
						<v-divider :thickness="dividerThickness" class="uncommon-divider"></v-divider>
						<BugDisplay :items="bugs.Uncommon" />
					</v-list-item>
					<v-list-item class="list-item">
						Rare
						<v-divider :thickness="dividerThickness" class="rare-divider"></v-divider>
						<BugDisplay :items="bugs.Rare" />
					</v-list-item>
					<v-list-item class="list-item">
						Epic
						<v-divider :thickness="dividerThickness" class="epic-divider"></v-divider>
						<BugDisplay :items="bugs.Epic" />
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
	import BugDisplay from './BugDisplay.vue'

	const dividerThickness = 4

	const bugs = ref({	
						Common: 	[
										{ Name: "Bahari Crab", status: 0 },
										{ Name: "Brushtail Dragonfly", status: 0 },
										{ Name: "Common Bark Cicada", status: 0},
										{ Name: "Common Blue Butterfly", status: 0},
										{ Name: "Common Field Cricket", status: 0},
										{ Name: "Kilima Night Moth", status: 0},
										{ Name: "Paper Lantern Bug", status: 0},
										{ Name: "Spotted Stinkbug", status: 0}
									], 
						Uncommon: 	[
										{ Name: "Bahari Bee", status: 0},
										{ Name: "Cerulean Cicada", status: 0},
										{ Name: "Duskwing Butterfly", status: 0},
										{ Name: "Garden Ladybug", status: 0},
										{ Name: "Garden Leafhopper", status: 0},
										{ Name: "Garden Mantis", status: 0},
										{ Name: "Garden Millipede", status: 0},
										{ Name: "Garden Snail", status: 0},
										{ Name: "Inky Dragonfly", status: 0},
										{ Name: "Lunar Fairy Moth", status: 0},
										{ Name: "Proudhorned Stag Beetle", status: 0},
										{ Name: "Spineshell Crab", status: 0}
									], 
						Rare: 		[
										{ Name: "Azure Stonehopper", status: 0},
										{ Name: "Bahari Glowbug", status: 0},
										{ Name: "Brighteye Butterfly", status: 0},
										{ Name: "Firebreathing Dragonfly", status: 0},
										{ Name: "Golden Glory Bee", status: 0},
										{ Name: "Gossamer Veil Moth", status: 0},
										{ Name: "Hairy Millipede", status: 0},
										{ Name: "Leafstalker Mantis", status: 0},
										{ Name: "Princess Ladybug", status: 0},
										{ Name: "Raspberry Beetle", status: 0},
										{ Name: "Scintillating Centipede", status: 0},
										{ Name: "Spitfire Cicada", status: 0},
										{ Name: "Spotted Mantis", status: 0},
										{ Name: "Stripeshell Snail", status: 0},
										{ Name: "Vampire Crab", status: 0}
									], 
						Epic: 		[
										{ Name: "Ancient Amber Beetle", status: 0},
										{ Name: "Fairy Mantis", status: 0},
										{ Name: "Jewelwing Dragonfly", status: 0},
										{ Name: "Rainbow-Tipped Butterfly", status: 0}
									]
					})

	function resetCollection() {

	}
</script>