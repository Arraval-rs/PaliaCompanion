<template>
    <div>
        <q-toolbar-title>
            <q-avatar>
                <img src="./assets/Logo.webp"/>
            </q-avatar>
            Palia Tools
        </q-toolbar-title>
    </div>
    <div id="app">
        <h3 class="p-3 text-center">Villager Weekly Wants</h3>
        <table>
            <thead>
                <tr>
                    <th>NPC</th>
                    <th>Daily Gift</th>
                    <th>Weekly Romance</th>
                    <th>Weekly Want 1</th>
                    <th>Weekly Want 2</th>
                    <th>Weekly Want 3</th>
                    <th>Weekly Want 4</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="villager in villagers" is="vue:VillagerRow" :villager=villager></tr>
            </tbody>
        </table>
    </div>    
</template>

<script setup>
import { ref } from 'vue';
import VillagerRow from './components/Villager.vue'


// TODO: change to read from/write to file/database
const villagers = ref([
    { Name: 'Ashura', dailyGift: false, weeklyRomance: false, weeklyWants: ["Grilled Fish", "Samara", "Pinecone", "Sashimi"]},
    { Name: 'Auni', dailyGift: false, weeklyRomance: false, weeklyWants: ["Common Blue Butterfly", "Garden Leafhopper", "Stripeshell Snail", "Apple Pie"]},
    { Name: 'Badruu', dailyGift: false, weeklyRomance: false, weeklyWants: ["Potato Seed", "Corn Seed", "Ramen", "Meaty Stir Fry"]},
    { Name: 'Caleri', dailyGift: false, weeklyRomance: false, weeklyWants: ["Crystal Lake Lotus", "Pickled Carrots", "Cream of Tomato Soup", "Bouillabaisse"]},
    { Name: 'Chayne', dailyGift: false, weeklyRomance: false, weeklyWants: ["Tomato Plant Seed", "Pickled Tomatoes", "Heat Root", "Cream of Mushroom Soup"]},
    { Name: 'Delaila', dailyGift: false, weeklyRomance: false, weeklyWants: ["Bahari Crab", "Kilima Catfish", "Iron Bar", "Gold Bar"]},
    { Name: 'Einar', dailyGift: false, weeklyRomance: false, weeklyWants: ["Mudminnow", "Garden Snail", "Glow Worm", "Enchanted Pupfish"]},
    { Name: 'Elouisa', dailyGift: false, weeklyRomance: false, weeklyWants: ["Ship Fragments", "Bahari Bee", "Dragon's Beard Peat", "Ancient Amber Beetle"]},
    { Name: 'Eshe', dailyGift: false, weeklyRomance: false, weeklyWants: ["Leather", "Fish Stew", "Silver Bar", "Gold Ore"]},
    { Name: 'Hassian', dailyGift: false, weeklyRomance: false, weeklyWants: ["Mountain Morel", "Striped Chapaa Tail", "Iron Ore", "Slowdown Arrow"]},
    { Name: 'Hekla', dailyGift: false, weeklyRomance: false, weeklyWants: ["Grilled Fish", "Painted Perch", "Chub", "Celebration Cake"]},
    { Name: 'Hodari', dailyGift: false, weeklyRomance: false, weeklyWants: ["Paper Lantern Bug", "Elder Sernuk Antlers", "Azure Chapaa Tail", "Spitfire Cicada"]},
    { Name: 'Jel', dailyGift: false, weeklyRomance: false, weeklyWants: ["Fur", "Albino Eel", "Gossamer Veil Moth", "Willow Lamprey"]},
    { Name: 'Jina', dailyGift: false, weeklyRomance: false, weeklyWants: ["Wagon Wheel", "Cotton Seed", "Mutated Angler", "Dari Cloves"]},
    { Name: 'Kenli', dailyGift: false, weeklyRomance: false, weeklyWants: ["Grilled Fish", "Fish Stew", "Trout Dinner", "Bouillabaisse"]},
    { Name: 'Kenyatta', dailyGift: false, weeklyRomance: false, weeklyWants: ["Sernuk Antlers", "Inky Dragonfly", "Pinecone", "Meaty Stir Fry"]},
    { Name: 'Nai\'O', dailyGift: false, weeklyRomance: false, weeklyWants: ["Wagon Wheel", "HarvestBoost Fertilizer", "Stalking Catfish", "Steak Dinner"]},
    { Name: 'Najuma', dailyGift: false, weeklyRomance: false, weeklyWants: ["Flint", "Copper Bar", "Iron Ore", "Silver Bar"]},
    { Name: 'Reth', dailyGift: false, weeklyRomance: false, weeklyWants: ["Yellow Perch", "Hearty Vegetable Soup", "Apple", "Palian Onion Soup"]},
    { Name: 'Sifuu', dailyGift: false, weeklyRomance: false, weeklyWants: ["Copper Ore", "Oily Anchovy", "Proudhorned Sernuk Antlers", "Steak Dinner"]},
    { Name: 'Tamala', dailyGift: false, weeklyRomance: false, weeklyWants: ["Emerald Carpet Moss", "Garden Millipede", "Azure Stonehopper", "Ancient Amber Beetle"]},
    { Name: 'Tau', dailyGift: false, weeklyRomance: false, weeklyWants: ["Sapwood Plank", "Duskwing Butterfly", "Azure Stonehopper", "Grilled Meat"]},
    { Name: 'Tish', dailyGift: false, weeklyRomance: false, weeklyWants: ["Ship Fragments", "Samara", "Pearl", "Blueberry Pie"]},
    { Name: 'Zeki', dailyGift: false, weeklyRomance: false, weeklyWants: ["Grilled Fish", "Fish Stew", "Crab Gumbo", "Gold Bar"]}
])

</script>