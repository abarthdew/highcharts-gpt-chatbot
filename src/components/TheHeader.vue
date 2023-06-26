<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <v-app-bar density="compact" color="blue-grey-lighten-5" elevation="2">
    <v-app-bar-title
      class="text-indigo-darken-4 font-weight-medium"
    >
      HIGHCHART GPT CHATBOT - beta
    </v-app-bar-title>
    <span class="mx-4">
      <RouterLink :to="{ name: 'home' }" active-class="font-weight-medium text-indigo-darken-4">
        Home
      </RouterLink>
    </span>
    <span class="mx-4">
      <a href="https://github.com/abarthdew/highchart-gpt-chatbot" target="_blank" rel="noopener noreferrer">
        <v-icon size="x-large">
          mdi-github
        </v-icon>
      </a>
    </span>
  </v-app-bar>
</template>
