<script setup>
import { capitalize } from '../utils';

defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
  chartOptions: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div
    v-for="(message, i) in messages"
    :key="i"
    class="mb-4"
  >
    <v-chip color="indigo-lighten-1" variant="elevated" size="x-small" class="mb-2">
      {{ capitalize(message.role) }}
    </v-chip>
    <v-sheet color="blue-grey-lighten-4" rounded="xl" class="px-4 py-2">
      <VueMarkdownIt :source='message.content' />
      <VueHighcharts v-if="message.role === 'assistant' && chartOptions.chart"
        class="ma-4"
        type="chart"
        :options="chartOptions"
        :redrawOnUpdate="true"
        :oneToOneUpdate="false"
        :animateOnUpdate="true" />
    </v-sheet>
  </div>
</template>
