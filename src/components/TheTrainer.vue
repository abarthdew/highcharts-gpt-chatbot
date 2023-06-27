<script setup>
import { computed, reactive } from 'vue';
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

const data = reactive({
  error: '',
  key: window.atob(localStorage.getItem('key') || ''),
  systemMessage: localStorage.getItem('systemMessage') || DEFAULT_SYSTEM_MESSAGE,
  userMessage: localStorage.getItem('userMessage') || DEFAULT_USER_MESSAGE,
  delaySeconds: Number(localStorage.getItem('delaySeconds')) || DEFAULT_DELAY_SECONDS,
  generatedMessages: [],
  loads: false,
  chartOptions: {},
});

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
    data.generatedMessages.push(new Message(ROLE_USER, data.userMessage));
    data.userMessage = '';
    const result = await createCompletion(client)({
      messages: generatedMessages.value,
    });
    const { choices } = result.data;
    const [choice] = choices;
    const { message } = choice;
    data.generatedMessages.push(new Message(ROLE_ASSISTANT, message.content));
    console.log('content: ', message.content)
    await new Promise((resolve) => setTimeout(resolve, data.delaySeconds * 1000));
    data.loads = false;
  } catch (err) {
    data.error = err?.response?.data?.error?.message || err.message;
    data.loads = false;
  }
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
              Sample Graph
            </div>
            <div>
              <TheChart />
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
            <TheResult :messages="generatedMessages" :chart-options="data.chartOptions" />
          </div>
        </v-card-item>
        <v-card-item class="pl-8 pr-8 pb-2">
          <div class="loading" v-if="data.loads">
            <div class="loader2" />
          </div>
          <div class="my-4">
            <div class="text-subtitle-2 mb-2">
              <b>User Messages</b> or Here's some samples...
              <v-btn color="primary" size="x-small" rounded="xl" class="mr-2">
                Column
              </v-btn>
              <v-btn color="secondary" size="x-small" rounded="xl" class="mr-2">
                Stack
              </v-btn>
              <v-btn color="info" size="x-small" rounded="xl" class="mr-2">
                Full Stack
              </v-btn>
              <v-btn color="success" size="x-small" rounded="xl" class="mr-2">
                Overlap
              </v-btn>
              <v-btn color="warning" size="x-small" rounded="xl" class="mr-2">
                Treemap
              </v-btn>
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
