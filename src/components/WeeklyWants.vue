<template>
    <v-card class="card">
        <v-card-title class="card-title">
            Villager Weekly Wants
        </v-card-title>
        <v-card-text class="card-text">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Villager</th>
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
            </div>
        </v-card-text>
        <v-card-actions class="card-actions">
            <v-btn variant="tonal" @click="clearVillagers">
                Reset Villagers
            </v-btn>
            <v-btn variant="tonal" @click="clearDailyGifts">
                Clear Daily Gifts
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import VillagerRow from './Villager.vue';

const villagers = ref(useStorage('Villagers', [
    {Name: 'Ashura', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Channel Catfish", Gifted: false},
                                                                                {Name: "Heartwood Plank", Gifted: false},
                                                                                {Name: "Fish Stew", Gifted: false},
                                                                                {Name: "Sashimi", Gifted: false}
                                                                            ]},
    {Name: 'Auni', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Spotted Stinkbug", Gifted: false}, 
                                                                                {Name: "Garden Snail", Gifted: false}, 
                                                                                {Name: "Apple", Gifted: false}, 
                                                                                {Name: "Apple Pie", Gifted: false}
                                                                            ]},
    {Name: 'Badruu', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Onion Seed", Gifted: false}, 
                                                                                {Name: "Spicy Pepper Seed", Gifted: false}, 
                                                                                {Name: "Loaded Potato Soup", Gifted: false}, 
                                                                                {Name: "Meaty Stir Fry", Gifted: false}
                                                                            ]},
    {Name: 'Caleri', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Paper Lantern Bug", Gifted: false}, 
                                                                                {Name: "Kilima Redfin", Gifted: false}, 
                                                                                {Name: "Silk Thread", Gifted: false}, 
                                                                                {Name: "Chapaa Masala", Gifted: false}
                                                                            ]},
    {Name: 'Chayne', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Potato Seed", Gifted: false}, 
                                                                                {Name: "Rice", Gifted: false}, 
                                                                                {Name: "Apple", Gifted: false}, 
                                                                                {Name: "Green Pearl", Gifted: false}
                                                                            ]},
    {Name: 'Delaila', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Channel Catfish", Gifted: false}, 
                                                                                {Name: "Wheat Seed", Gifted: false}, 
                                                                                {Name: "Blueberry Bush Seed", Gifted: false}, 
                                                                                {Name: "Giant Goldfish", Gifted: false}
                                                                            ]},
    {Name: 'Einar', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Silver Salmon", Gifted: false}, 
                                                                                {Name: "Mirror Carp", Gifted: false}, 
                                                                                {Name: "Shimmerfin", Gifted: false}, 
                                                                                {Name: "Ancient Fish", Gifted: false}
                                                                            ]},
    {Name: 'Elouisa', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Spotted Stinkbug", Gifted: false}, 
                                                                                {Name: "Inky Dragonfly", Gifted: false}, 
                                                                                {Name: "Thundering Eel", Gifted: false}, 
                                                                                {Name: "Midnight Paddlefish", Gifted: false}
                                                                            ]},
    {Name: 'Eshe', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Fur", Gifted: false}, 
                                                                                {Name: "Juniper Seed", Gifted: false}, 
                                                                                {Name: "Silver Bar", Gifted: false}, 
                                                                                {Name: "Bouillabaisse", Gifted: false}
                                                                            ]},
    {Name: 'Hassian', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants: [
                                                                                {Name: "Sernuk Antlers", Gifted: false}, 
                                                                                {Name: "Chapaa Asada Tacos", Gifted: false}, 
                                                                                {Name: "Azure Chapaa Tail", Gifted: false}, 
                                                                                {Name: "Slowdown Arrow", Gifted: false}
                                                                            ]},
    {Name: 'Hekla', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Grilled Fish", Gifted: false}, 
                                                                                {Name: "Brightshroom", Gifted: false}, 
                                                                                {Name: "Trout Dinner", Gifted: false}, 
                                                                                {Name: "Enchanted Pupfish", Gifted: false}
                                                                            ]},
    {Name: 'Hodari', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Copper Ore", Gifted: false}, 
                                                                                {Name: "Striped Chapaa Tail", Gifted: false}, 
                                                                                {Name: "Loaded Potato Soup", Gifted: false}, 
                                                                                {Name: "Bahari Glowbug", Gifted: false}
                                                                            ]},
    {Name: 'Jel', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:     [
                                                                                {Name: "Leather", Gifted: false}, 
                                                                                {Name: "Striped Chapaa Tail", Gifted: false}, 
                                                                                {Name: "Gossamer Veil Moth", Gifted: false}, 
                                                                                {Name: "Willow Lamprey", Gifted: false}
                                                                            ]},
    {Name: 'Jina', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Flint", Gifted: false}, 
                                                                                {Name: "Glass Pane", Gifted: false}, 
                                                                                {Name: "Radiant Sunfish", Gifted: false}, 
                                                                                {Name: "Rainbow-Tipped Butterfly", Gifted: false}
                                                                            ]},
    {Name: 'Kenli', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Grilled Oyster", Gifted: false}, 
                                                                                {Name: "Hearty Vegetable Soup", Gifted: false}, 
                                                                                {Name: "Sushi", Gifted: false}, 
                                                                                {Name: "Gold Bar", Gifted: false}
                                                                            ]},
    {Name: 'Kenyatta', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:[
                                                                                {Name: "Garden Mantis", Gifted: false}, 
                                                                                {Name: "Elder Sernuk Antlers", Gifted: false}, 
                                                                                {Name: "Chili Oil Dumplings", Gifted: false}, 
                                                                                {Name: "Fairy Mantis", Gifted: false}
                                                                            ]},
    {Name: 'Nai\'O', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Stone Brick", Gifted: false}, 
                                                                                {Name: "Pickled Potatoes", Gifted: false}, 
                                                                                {Name: "Fried Catfish Dinner", Gifted: false}, 
                                                                                {Name: "Steak Dinner", Gifted: false}
                                                                            ]},
    {Name: 'Najuma', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Clay", Gifted: false}, 
                                                                                {Name: "Copper Bar", Gifted: false}, 
                                                                                {Name: "Stripeshell Snail", Gifted: false}, 
                                                                                {Name: "Blueberry Pie", Gifted: false}
                                                                            ]},
    {Name: 'Reth', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Sweet Leaf", Gifted: false}, 
                                                                                {Name: "Ramen", Gifted: false}, 
                                                                                {Name: "Apple Jam", Gifted: false}, 
                                                                                {Name: "Dari Cloves", Gifted: false}
                                                                            ]},
    {Name: 'Sifuu', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:   [
                                                                                {Name: "Grilled Meat", Gifted: false}, 
                                                                                {Name: "Iron Ore", Gifted: false}, 
                                                                                {Name: "Proudhorned Sernuk Antlers", Gifted: false}, 
                                                                                {Name: "Swordfin Eel", Gifted: false}
                                                                            ]},
    {Name: 'Tamala', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:  [
                                                                                {Name: "Kilima Night Moth", Gifted: false}, 
                                                                                {Name: "Lunar Fairy Moth", Gifted: false}, 
                                                                                {Name: "Azure Stonehopper", Gifted: false}, 
                                                                                {Name: "Fairy Mantis", Gifted: false}
                                                                            ]},
    {Name: 'Tau', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:     [
                                                                                {Name: "Common Blue Butterfly", Gifted: false}, 
                                                                                {Name: "Steak Dinner", Gifted: false}, 
                                                                                {Name: "Sernuk Noodle Stew", Gifted: false}, 
                                                                                {Name: "Shimmerfin", Gifted: false}
                                                                            ]},
    {Name: 'Tish', dailyGift: false, romance: true, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Shell", Gifted: false}, 
                                                                                {Name: "Samara", Gifted: false}, 
                                                                                {Name: "Silk Thread", Gifted: false}, 
                                                                                {Name: "Blueberry Pie", Gifted: false}
                                                                            ]},
    {Name: 'Zeki', dailyGift: false, romance: false, weeklyRomance: false, weeklyWants:    [
                                                                                {Name: "Unopened Oyster", Gifted: false}, 
                                                                                {Name: "Silk", Gifted: false}, 
                                                                                {Name: "Fish Tacos", Gifted: false}, 
                                                                                {Name: "Bouillabaisse", Gifted: false}
                                                                            ]}
], 
localStorage,
{ mergeDefaults: (storageValue, defaults) => mergeStorage(storageValue, defaults) }))

localStorage.setItem('Villagers', villagers)

function updateVillager(villagerIndex, giftIndex) {
    switch(giftIndex) {
        case 0:
            console.log('Updating ' + villagers.value[villagerIndex].Name + '\'s daily gift to ' + !villagers.value[villagerIndex].dailyGift)
            villagers.value[villagerIndex].dailyGift = !villagers.value[villagerIndex].dailyGift
            break;
        case 1:
            console.log('Updating ' + villagers.value[villagerIndex].Name + '\'s weekly romance to ' + !villagers.value[villagerIndex].weeklyRomance)
            villagers.value[villagerIndex].weeklyRomance = !villagers.value[villagerIndex].weeklyRomance
            villagers.value[villagerIndex].dailyGift = villagers.value[villagerIndex].weeklyRomance
            break;
        default:
            console.log('Updating ' + villagers.value[villagerIndex].Name + '\'s wanted gift: ' + villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Name + ' to ' + !villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted)
            villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted = !villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted
            villagers.value[villagerIndex].dailyGift = villagers.value[villagerIndex].weeklyWants[giftIndex - 2].Gifted
            break;
    }
}

function clearVillagers() {
    for (let i = 0; i < villagers.value.length; i++) {
        villagers.value[i].dailyGift = false
        villagers.value[i].weeklyRomance = false
        for(let j = 0; j < villagers.value[i].weeklyWants.length; j++) {
            villagers.value[i].weeklyWants[j].Gifted = false
        }
    }
}

function clearDailyGifts() {
    for (let i = 0; i < villagers.value.length; i++) {
        villagers.value[i].dailyGift = false
    }
}

function mergeStorage(storageValue, defaults) {
    if (defaults.length > storageValue.length) {
        console.log('More default villagers than storage. Loading default villagers')
        return defaults
    }
    for (let i = 0; i < defaults.length; i++) {
        for (let j = 0; j < defaults[i].weeklyWants.length; j++) {
            if (defaults[i].weeklyWants[j].Name !== storageValue[i].weeklyWants[j].Name) {
                console.log('Weekly wants have been updated. Loading default villagers.\n\n' + 
                            'Incorrect weekly want for: ' + defaults[i].Name + '(default) and ' + storageValue[i].Name + '(storage)\n\n' +
                            'Incorrect want is: ' + defaults[i].weeklyWants[j].Name + '(default) and ' + storageValue[i].weeklyWants[j].Name + '(storage)'
                    )
                return defaults
            }
            storageValue[i].romance = defaults[i].romance
        }
    }
    console.log('Loading stored villagers')
    return storageValue
}

defineExpose({
    clearVillagers,
    clearDailyGifts
})

</script>