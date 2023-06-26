<script setup>
import { computed, reactive, ref } from 'vue';
import TheResult from './TheResult.vue';
import {
  createCompletion,
  createClient,
  ROLE_ASSISTANT,
  ROLE_SYSTEM,
  ROLE_USER,
} from '../services/openai';
import {
  DEFAULT_DELAY_SECONDS,
  DEFAULT_SYSTEM_MESSAGE,
  DEFAULT_USER_MESSAGE,
} from '../constants';
import { Message } from '../models';
import TheChart from '../components/TheChart.vue';
import VueHighcharts from 'vue3-highcharts';

const data = reactive({
  error: '',
  key: window.atob(localStorage.getItem('key') || ''),
  systemMessage: localStorage.getItem('systemMessage') || DEFAULT_SYSTEM_MESSAGE,
  userMessage: localStorage.getItem('userMessage') || DEFAULT_USER_MESSAGE,
  delaySeconds: Number(localStorage.getItem('delaySeconds')) || DEFAULT_DELAY_SECONDS,
  generatedMessages: [],
  loads: false,
});

const loads = false;

const initMessages = computed(() => [
  new Message(ROLE_SYSTEM, data.systemMessage),
]);

const generatedMessages = computed(() => initMessages.value.concat(data.generatedMessages));

const remember = (key, value) => localStorage.setItem(key, value);

const rememberKey = () => localStorage.setItem('key', window.btoa(data.key));

const run = async () => {
  data.loads = true;
  const client = createClient(data.key);
  try {
    const userMessages = data.userMessage.split('\n').filter((userMessage) => !!userMessage);
    for await (const userMessage of userMessages) {
      data.generatedMessages.push(new Message(ROLE_USER, userMessage));
      data.userMessage = '';
      const result = await createCompletion(client)({
        messages: generatedMessages.value,
      });
      const { choices } = result.data;
      const [choice] = choices;
      const { message } = choice;
      data.generatedMessages.push(new Message(ROLE_ASSISTANT, message.content));
      console.log(message.content)
      document.getElementById('input-9').focus();
      await new Promise((resolve) => setTimeout(resolve, data.delaySeconds * 1000));
      data.loads = false;
    }
  } catch (err) {
    data.error = err?.response?.data?.error?.message || err.message;
    data.loads = false;
  }
};

// test graph data
const seriesData = ref([25, 39, 30, 15]);
const categories = ref(['Jun', 'Jul', 'Aug', 'Sept']);

const chartOptions = computed(() => ({
  chart: {
    type: 'line',
  },
  title: {
    text: 'Number of project stars',
  },
  xAxis: {
    categories: categories.value,
  },
  yAxis: {
    title: {
      text: 'Number of stars',
    },
  },
  series: [{
    name: 'New project stars',
    data: seriesData.value,
  }],
}));

const onRender = () => {
  console.log('Chart rendered');
};
</script>

<template>
  <v-snackbar
    v-if="data.error"
    color="indigo-lighten-1"
    model-value
    @update:modelValue="data.error = ''"
  >
    {{ data.error }}
  </v-snackbar>
  <v-row class="justify-center">
  <TheChart />
    <v-col cols="12">
      <v-card
        color="blue-grey-lighten-5"
        height="100%"
      >
        <v-card-item class="pa-8 pb-4">
          <div class="text-h5 mb-4 font-weight-bold text-indigo">
            Settings
          </div>
          <div class="my-4" style="display: none;">
            <div class="text-subtitle-2 mb-2">
              System Messages
            </div>
            <div>
              <v-textarea
                v-model="data.systemMessage"
                autofocus
                color="indigo"
                hide-details
                no-resize
                rows="4"
                variant="outlined"
              />
            </div>
          </div>
          <div class="my-4">
            <div class="text-subtitle-2 mb-2">
              API Key
            </div>
            <div>
              <v-text-field
                v-model="data.key"
                color="indigo"
                density="compact"
                hide-details
                type="password"
                variant="outlined"
                @input="rememberKey"
              />
            </div>
          </div>
          <div class="my-4">
            <div class="text-subtitle-2 mb-2">
              Result Graph
            </div>
            <div>
              <VueHighcharts
                type="chart"
                :options="chartOptions"
                :redrawOnUpdate="true"
                :oneToOneUpdate="false"
                :animateOnUpdate="true"
                @rendered="onRender"/>
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
        color="blue-grey-lighten-5"
        height="100%"
      >
        <v-card-item class="pa-8 pb-0">
          <div class="text-h5 mb-4 font-weight-bold text-indigo">
            Chat
          </div>
          <div class="my-4">
            <TheResult :messages="generatedMessages" />
          </div>
        </v-card-item>
        <v-card-item class="pl-8 pr-8 pb-2">
          <div class="loading" v-if="data.loads">
            <div class="loader2" />
          </div>
          <div class="my-4">
            <div class="text-subtitle-2 mb-2">
              User Messages
            </div>
            <div>
              <v-textarea
                v-model="data.userMessage"
                color="indigo"
                hide-details
                no-resize
                rows="4"
                variant="outlined"
                @input="remember('userMessage', data.userMessage)"
                ref="msg"
              />
            </div>
          </div>
        </v-card-item>
        <v-card-actions class="justify-end pa-8 pt-0">
          <v-btn
            block
            color="indigo"
            variant="outlined"
            @click="run"
          >
            Send Message
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<style>
  @import "../assets/loading.css";
</style>
