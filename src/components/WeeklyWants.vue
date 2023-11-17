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

const props = defineProps({
        villagers: Array
    })

function updateVillager(villagerIndex, giftIndex) {
    switch(giftIndex) {
        case 0:
            console.log('Updating ' + props.villagers[villagerIndex].Name + '\'s daily gift to ' + !props.villagers[villagerIndex].dailyGift)
            props.villagers[villagerIndex].dailyGift = !props.villagers[villagerIndex].dailyGift
            break;
        case 1:
            console.log('Updating ' + props.villagers[villagerIndex].Name + '\'s weekly romance to ' + !props.villagers[villagerIndex].weeklyRomance)
            props.villagers[villagerIndex].weeklyRomance = !props.villagers[villagerIndex].weeklyRomance
            props.villagers[villagerIndex].dailyGift = props.villagers[villagerIndex].weeklyRomance
            break;
        default:
            console.log('Updating ' + props.villagers[villagerIndex].Name + '\'s wanted gift: ' + props.villagers[villagerIndex].weeklyWants[giftIndex - 2].Name + ' to ' + !props.villagers[villagerIndex].weeklyWants[giftIndex - 2].Gifted)
            props.villagers[villagerIndex].weeklyWants[giftIndex - 2].Gifted = !props.villagers[villagerIndex].weeklyWants[giftIndex - 2].Gifted
            props.villagers[villagerIndex].dailyGift = props.villagers[villagerIndex].weeklyWants[giftIndex - 2].Gifted
            break;
    }
}

function clearVillagers() {
    for (let i = 0; i < props.villagers.length; i++) {
        props.villagers[i].dailyGift = false
        props.villagers[i].weeklyRomance = false
        for(let j = 0; j < props.villagers[i].weeklyWants.length; j++) {
            props.villagers[i].weeklyWants[j].Gifted = false
        }
    }
}

function clearDailyGifts() {
    for (let i = 0; i < props.villagers.length; i++) {
        props.villagers[i].dailyGift = false
    }
}

defineExpose({
    clearVillagers,
    clearDailyGifts
})

</script>