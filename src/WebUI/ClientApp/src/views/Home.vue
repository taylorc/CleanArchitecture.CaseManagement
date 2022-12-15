<template>
    <v-container>
        <v-row>
            <v-col>
                <HomeList :data="desserts"></HomeList>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';
import HomeList from '../components/HomeList.vue';
import { dessert } from '../models/dessert';

const desserts = ref<dessert[]>([
    {
        name: 'Frozen Yogurt',
        calories: 159,
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
    },
    {
        name: 'Eclair',
        calories: 262,
    },
    {
        name: 'Cupcake',
        calories: 305,
    },
    {
        name: 'Gingerbread',
        calories: 356,
    },
    {
        name: 'Jelly bean',
        calories: 375,
    },
    {
        name: 'Lollipop',
        calories: 392,
    },
    {
        name: 'Honeycomb',
        calories: 408,
    },
    {
        name: 'Donut',
        calories: 452,
    },
    {
        name: 'KitKat',
        calories: 518,
    },
])    
</script>
  