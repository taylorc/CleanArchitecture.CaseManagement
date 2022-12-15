<template>
  <v-app id="inspire">
    <AppBar></AppBar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <LeftColumn></LeftColumn>
          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <router-view></router-view>
            </v-sheet>
          </v-col>

          <RightColumn></RightColumn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import LeftColumn from './components/LeftColumn.vue'
import RightColumn from './components/RightColumn.vue'
import AppBar from './components/AppBar.vue'

  
</script>
