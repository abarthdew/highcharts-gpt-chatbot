export default {
  namespaced: true,
  state: () => ({
    chartOptions: {
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
    }
  }),
  getters: {
    getChartOptions(state) {
      return state.chartOptionss
    }
  },
}
