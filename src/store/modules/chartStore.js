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
    },
    chartCode: `
      // Highcharts/Vue2

      // main.js
      import Highcharts from 'highcharts'; // Initialize the Highcharts modules
      import HighchartsVue from 'highcharts-vue';

      // Register the HighchartsVue component
      Vue.use(HighchartsVue);

      // template
      <highcharts
        :options="chartOptions"
      />

      // script
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
      },
    `,
    column: `
      {
        chartOptions: {
          chart: {
            type: 'column',
            backgroundColor: '',
          },
          title: {
            text: ''
          },
          legend: {
            enabled: ''
          },
          xAxis: {
            labels: {
              style: {
                color: '',
              },
            },
            categories: []
          },
          yAxis: {
            allowDecimals: '',
            title: {
              text: '',
              rotation: '',
              align: '',
              style: {
                color: '',
              },
            },
            labels: {
              style: {
                color: '',
              },
              formatter() {
                return '';
              }
            }
          },
          credits: {
            enabled: ''
          },
          tooltip: {
            formatter: function () {
              return ''
            }
          },
          plotOptions: {
            column: {
              borderRadius: '',
            },
          },
          series: [{
            data: [],
            dataLabels: {
              enabled: '',
              color: '',
              align: '',
              format: '',
              y: '',
              style: {
                textOutline: ''',
                fontSize: '',
                fontFamily: ''
              }
            }
          }]
        }
      }
    }
    `,
    stack: `
    
    `,
    fullStack: `
    
    `,
    overlap: `
    
    `,
    treemap: `
    
    `,
  }),
  getters: {
    getChartOptions(state) {
      return state.chartOptionss
    }
  },
}
