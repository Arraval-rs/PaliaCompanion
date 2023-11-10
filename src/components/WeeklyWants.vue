<template>
	<button @click="clearVillagers">
        Reset Villagers
    </button>
    <button @click="clearStorage">
        Clear Local Storage
    </button>
    <table>
        <thead>
            <tr>
                <th id="tophead" colspan="7">
                    Villager Weekly Wants
                </th>
            </tr>
        </thead>
        <thead>
            <tr>
                <th>NPC</th>
                <th>Daily Gift</th>
                <th>Romance Gift</th>
                <th>Want 1</th>
                <th>Want 2</th>
                <th>Want 3</th>
                <th>Want 4</th>
            </tr>
        </thead>
        <tbody>
            <tr @gifted="updateVillager" v-for="(villager, index) in villagers" is="vue:VillagerRow" :villager=villager :villagerIndex=index></tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core'
import VillagerRow from './Villager.vue';

const villagers = ref(useStorage('Villagers', [
    {Name: 'Ashura', dailyGift: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Grilled Fish", Gifted: false},
                                                                                {Name: "Samara", Gifted: false},
                                                                                {Name: "Pinecone", Gifted: false},
                                                                                {Name: "Sashimi", Gifted: false}
                                                                            ]},
    {Name: 'Auni', dailyGift: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Common Blue Butterfly", Gifted: false}, 
                                                                                {Name: "Garden Leafhopper", Gifted: false}, 
                                                                                {Name: "Stripeshell Snail", Gifted: false}, 
                                                                                {Name: "Apple Pie", Gifted: false}
                                                                            ]},
    {Name: 'Badruu', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Potato Seed", Gifted: false}, 
                                                                                {Name: "Corn Seed", Gifted: false}, 
                                                                                {Name: "Ramen", Gifted: false}, 
                                                                                {Name: "Meaty Stir Fry", Gifted: false}
                                                                            ]},
    {Name: 'Caleri', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Crystal Lake Lotus", Gifted: false}, 
                                                                                {Name: "Pickled Carrots", Gifted: false}, 
                                                                                {Name: "Cream of Tomato Soup", Gifted: false}, 
                                                                                {Name: "Bouillabaisse", Gifted: false}
                                                                            ]},
    {Name: 'Chayne', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Tomato Plant Seed", Gifted: false}, 
                                                                                {Name: "Pickled Tomatoes", Gifted: false}, 
                                                                                {Name: "Heat Root", Gifted: false}, 
                                                                                {Name: "Cream of Mushroom Soup", Gifted: false}
                                                                            ]},
    {Name: 'Delaila', dailyGift: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Bahari Crab", Gifted: false}, 
                                                                                {Name: "Kilima Catfish", Gifted: false}, 
                                                                                {Name: "Iron Bar", Gifted: false}, 
                                                                                {Name: "Gold Bar", Gifted: false}
                                                                            ]},
    {Name: 'Einar', dailyGift: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Mudminnow", Gifted: false}, 
                                                                                {Name: "Garden Snail", Gifted: false}, 
                                                                                {Name: "Glow Worm", Gifted: false}, 
                                                                                {Name: "Enchanted Pupfish", Gifted: false}
                                                                            ]},
    {Name: 'Elouisa', dailyGift: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Ship Fragments", Gifted: false}, 
                                                                                {Name: "Bahari Bee", Gifted: false}, 
                                                                                {Name: "Dragon's Beard Peat", Gifted: false}, 
                                                                                {Name: "Ancient Amber Beetle", Gifted: false}
                                                                            ]},
    {Name: 'Eshe', dailyGift: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Leather", Gifted: false}, 
                                                                                {Name: "Fish Stew", Gifted: false}, 
                                                                                {Name: "Silver Bar", Gifted: false}, 
                                                                                {Name: "Gold Ore", Gifted: false}
                                                                            ]},
    {Name: 'Hassian', dailyGift: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Mountain Morel", Gifted: false}, 
                                                                                {Name: "Striped Chapaa Tail", Gifted: false}, 
                                                                                {Name: "Iron Ore", Gifted: false}, 
                                                                                {Name: "Slowdown Arrow", Gifted: false}
                                                                            ]},
    {Name: 'Hekla', dailyGift: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Grilled Fish", Gifted: false}, 
                                                                                {Name: "Painted Perch", Gifted: false}, 
                                                                                {Name: "Chub", Gifted: false}, 
                                                                                {Name: "Celebration Cake", Gifted: false}
                                                                            ]},
    {Name: 'Hodari', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Paper Lantern Bug", Gifted: false}, 
                                                                                {Name: "Elder Sernuk Antlers", Gifted: false}, 
                                                                                {Name: "Azure Chapaa Tail", Gifted: false}, 
                                                                                {Name: "Spitfire Cicada", Gifted: false}
                                                                            ]},
    {Name: 'Jel', dailyGift: false, weeklyRomance: false, weeklyWants:     [
                                                                                {Name: "Fur", Gifted: false}, 
                                                                                {Name: "Albino Eel", Gifted: false}, 
                                                                                {Name: "Gossamer Veil Moth", Gifted: false}, 
                                                                                {Name: "Willow Lamprey", Gifted: false}
                                                                            ]},
    {Name: 'Jina', dailyGift: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Wagon Wheel", Gifted: false}, 
                                                                                {Name: "Cotton Seed", Gifted: false}, 
                                                                                {Name: "Mutated Angler", Gifted: false}, 
                                                                                {Name: "Dari Cloves", Gifted: false}
                                                                            ]},
    {Name: 'Kenli', dailyGift: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Grilled Fish", Gifted: false}, 
                                                                                {Name: "Fish Stew", Gifted: false}, 
                                                                                {Name: "Trout Dinner", Gifted: false}, 
                                                                                {Name: "Bouillabaisse", Gifted: false}
                                                                            ]},
    {Name: 'Kenyatta', dailyGift: false, weeklyRomance: false, weeklyWants:[
                                                                                {Name: "Sernuk Antlers", Gifted: false}, 
                                                                                {Name: "Inky Dragonfly", Gifted: false}, 
                                                                                {Name: "Pinecone", Gifted: false}, 
                                                                                {Name: "Meaty Stir Fry", Gifted: false}
                                                                            ]},
    {Name: 'Nai\'O', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Wagon Wheel", Gifted: false}, 
                                                                                {Name: "HarvestBoost Fertilizer", Gifted: false}, 
                                                                                {Name: "Stalking Catfish", Gifted: false}, 
                                                                                {Name: "Steak Dinner", Gifted: false}
                                                                            ]},
    {Name: 'Najuma', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Flint", Gifted: false}, 
                                                                                {Name: "Copper Bar", Gifted: false}, 
                                                                                {Name: "Iron Ore", Gifted: false}, 
                                                                                {Name: "Silver Bar", Gifted: false}
                                                                            ]},
    {Name: 'Reth', dailyGift: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Yellow Perch", Gifted: false}, 
                                                                                {Name: "Hearty Vegetable Soup", Gifted: false}, 
                                                                                {Name: "Apple", Gifted: false}, 
                                                                                {Name: "Palian Onion Soup", Gifted: false}
                                                                            ]},
    {Name: 'Sifuu', dailyGift: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Copper Ore", Gifted: false}, 
                                                                                {Name: "Oily Anchovy", Gifted: false}, 
                                                                                {Name: "Proudhorned Sernuk Antlers", Gifted: false}, 
                                                                                {Name: "Steak Dinner", Gifted: false}
                                                                            ]},
    {Name: 'Tamala', dailyGift: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Emerald Carpet Moss", Gifted: false}, 
                                                                                {Name: "Garden Millipede", Gifted: false}, 
                                                                                {Name: "Azure Stonehopper", Gifted: false}, 
                                                                                {Name: "Ancient Amber Beetle", Gifted: false}
                                                                            ]},
    {Name: 'Tau', dailyGift: false, weeklyRomance: false, weeklyWants:     [
                                                                                {Name: "Sapwood Plank", Gifted: false}, 
                                                                                {Name: "Duskwing Butterfly", Gifted: false}, 
                                                                                {Name: "Azure Stonehopper", Gifted: false}, 
                                                                                {Name: "Grilled Meat", Gifted: false}
                                                                            ]},
    {Name: 'Tish', dailyGift: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Ship Fragments", Gifted: false}, 
                                                                                {Name: "Samara", Gifted: false}, 
                                                                                {Name: "Pearl", Gifted: false}, 
                                                                                {Name: "Blueberry Pie", Gifted: false}
                                                                            ]},
    {Name: 'Zeki', dailyGift: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Grilled Fish", Gifted: false}, 
                                                                                {Name: "Fish Stew", Gifted: false}, 
                                                                                {Name: "Crab Gumbo", Gifted: false}, 
                                                                                {Name: "Gold Bar", Gifted: false}
                                                                            ]}
], 
localStorage,
{ mergeDefaults: true }))

function updateVillager(villagerIndex, giftIndex) {
    switch(giftIndex) {
        case 0:
            console.log('Updating ' + villagers.value[villagerIndex].Name + '\'s daily gift to ' + villagers.value[villagerIndex].dailyGift)
            villagers.value[villagerIndex].dailyGift = !villagers.value[villagerIndex].dailyGift
            break;
        case 1:
            console.log('Updating ' + villagers.value[villagerIndex].Name + '\'s weekly romance to ' + villagers.value[villagerIndex].weeklyRomance)
            villagers.value[villagerIndex].weeklyRomance = !villagers.value[villagerIndex].weeklyRomance
            break;
        default:
            console.log('Updating ' + villagers.value[villagerIndex].Name + '\'s wanted gift: ' + villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Name + ' to ' + villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted)
            villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted = !villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted
            break;
    }
    localStorage.setItem('Villagers', villagers)
}

function clearVillagers() {
    for(let i = 0; i < villagers.value.length; i++) {
        villagers.value[i].dailyGift = false
        villagers.value[i].weeklyRomance = false
        for(let j = 0; j < villagers.value[i].weeklyWants.length; j++) {
            villagers.value[i].weeklyWants[j].Gifted = false
        }
    }
}

function clearStorage() {
    villagers.value = null
    location.reload()
}

</script>