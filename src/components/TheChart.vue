<template>
  <div>
  <VueHighcharts
    type="chart"
    :options="chartOptions"
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender" />
  <VueMarkdownIt :source='chartOptions3' style="height: 260px; overflow-y: scroll; margin-top: 15px;" />
  
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
import { computed } from 'vue';

export default {
  name: 'TheChart',
  setup() {
    const chartOptions = computed(() => ({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Example Line Chart Title',
        align: 'center',
      },
      subtitle: {
        text: 'Refer this basic released information',
        align: 'center'
      },
      legend: {
        floating: false,
        align: 'right',
        symbolRadius: 0,
        symbolWidth: 15,
        itemDistance: 15,
        itemStyle: {
          color:'#444',
          fontSize: '14px',
          fontWeight:'400'
        },
      },
      xAxis: {
        categories: ['xAxis1', 'xAxis2', 'xAxis3']
      },
      yAxis: {
        allowDecimals: true,
        title: {
          text: 'yAxis - allowDecimals'
        },
        labels: {
          formatter() {
            return 'label: ' + this.value;
          }
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function () {
          return '<b>tootip: ' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>';
        }
      },
      ployOptions: {},
      series: [{
        name: 'legend1',
        data: [148, 133, 124],
      }, {
        name: 'legend2',
        data: [102, 98, 65],
      }, {
        name: 'legend3',
        data: [113, 122, 95],
      }, {
        name: 'legend4',
        data: [77, 72, 80],
      }],
    }));
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
    const test = "```JSON\n" + `{
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
    // let result2 = result[0].toString();
    // console.log(result2.slice(0, -1))
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