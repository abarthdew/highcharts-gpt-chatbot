<template>
  <div>
  <VueHighcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender" />
  <VueMarkdownIt :source='chartOptions3' 
    style="height: 260px; overflow-y: scroll; margin-top: 15px;"
  />
  
  <VueHighcharts
    type="chart"
    :options="chartOptions4.chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender" />
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: 'TheChart',
  setup() {
    const store = useStore();
    const chartOptions = store.state.chartStore.chartOptions;
    const chartOptions3 = "```javascript \n" + `{
  "chartOptions": {
    "chart": {
      "type": "line"
    },
    "title": {
      "text": "Monthly Sales"
    },
    "xAxis": {
      "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    "yAxis": {
      "title": {
        "text": "Sales ($) "
      }
    },
    "series": [{
      "name": "Sales",
      "data": [1500, 2000, 1800, 2500, 2200, 2700]
    }]
  }
}`
    const onRender = () => {
      // nothing
    };
    const test = "```json\n" + `{
  "chartOptions": {
    "chart": {
      "type": "line"
    },
    "title": {
      "text": "Monthly Sales"
    },
    "xAxis": {
      "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    "yAxis": {
      "title": {
        "text": "Sales ($) "
      }
    },
    "series": [{
      "name": "Sales",
      "data": [1500, 2000, 1800, 2500, 2200, 2700]
    }]
  }
}` + "\n```"
    let regex = new RegExp(/(```(.|\n)*```)/, "g");
    let word = test.match(regex);
    const userMessages = word[0].split('\n').filter((item) => !!item);
    let result = [];
    for (let i=0; i<userMessages.length - 1; i++) {
      if (i!==0) {
        result += userMessages[i]
      }
    }
    const chartOptions4 = JSON.parse(result)
    console.log(result)
    return {
      chartOptions4,
      chartOptions3,
      result,
      chartOptions,
      onRender,
      test,
    };
  },
};
</script>