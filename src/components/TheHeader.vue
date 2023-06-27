<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <v-app-bar density="compact" color="blue-grey-lighten-5" elevation="2">
    <v-app-bar-title
      class="text-deep-purple-darken-4 font-weight-medium"
    >
      <b>HIGHCHART GPT CHATBOT - beta</b>
    </v-app-bar-title>
    <span class="mx-4">
      <RouterLink :to="{ name: 'home' }" active-class="font-weight-medium text-deep-purple-darken-3">
        <v-icon size="x-large">
          mdi-home
        </v-icon>
      </RouterLink>
    </span>
    <span class="mx-4 ml-1">
      <a href="https://github.com/abarthdew/highcharts-gpt-chatbot" target="_blank" rel="noopener noreferrer">
        <v-icon size="x-large">
          mdi-github
        </v-icon>
      </a>
    </span>
  </v-app-bar>
</template>
