<template>
  <div>
    <VueHighcharts
      type="chart"
      :options="chartOptions"
      :redrawOnUpdate="true"
      :oneToOneUpdate="false"
      :animateOnUpdate="true"
      @rendered="onRender" />
    <VueMarkdownIt :source='chartCode' 
      style="height: 260px; overflow-y: scroll; margin-top: 15px;"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: 'TheChart',
  setup() {
    const store = useStore();
    const chartOptions = store.state.chartStore.chartOptions;
    const chartCode = "```javascript \n" + store.state.chartStore.chartCode
    const onRender = () => {
      // nothing
    };
    return {
      chartOptions,
      chartCode,
      onRender,
    };
  },
};
</script>