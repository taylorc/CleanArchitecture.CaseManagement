<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Calories
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in props.data" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { dessert } from '../models/dessert';

const props = defineProps<{
    data?: dessert[]
}>()

</script>