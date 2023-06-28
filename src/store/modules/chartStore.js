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
    column: {
      chartOptions: {
        chart: {
          type: 'column',
          backgroundColor: null,
        },
        title: {
          text: ''
        },
        legend: {
          enabled: false
        },
        xAxis: {
          labels: {
            style: {
              color: '#b4b7bd',
            },
          },
          categories: ['0시', '1시', '2시', '3시', '4시', '5시', '6시', '7시', '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시', '21시', '23시']
        },
        yAxis: {
          allowDecimals: true,
          title: {
            text: '전력량<br>(kWh)',
            rotation: 360,
            align: 'high',
            style: {
              color: '#b4b7bd',
            },
          },
          labels: {
            style: {
              color: '#b4b7bd',
            },
            formatter() {
              return this.value + '';
            }
          }
        },
        credits: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y
          }
        },
        plotOptions: {
          column: {
            borderRadius: '',
          },
        },
        series: [{
          data: [20,30,30,50,20,80,50,60,70,40,50,80,60,60,70,50,40,20,50,80,70,60,50,80,40],
          dataLabels: {
            enabled: true,
            color: '#b4b7bd',
            align: 'center',
            format: '{point.y}',
            // format: '{point.y:.1f}', // one decimal
            y: -5,
            style: {
              textOutline: 'none',
              fontSize: '12px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        }]
      }
    },
    stack: {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'StackedColumnChartMng'
        },
        legend: {
          floating: false, // 범례를 차트 영역 위로 띄울 시 true 지정
          align: 'right', // 수평 정렬
          // verticalAlign: 'top', // 수직 정렬 지정
          symbolRadius: 0,
          symbolWidth: 15,
          // symbolHeight: 12,
          itemDistance: 15, // 범례 간 간격 지정
          itemStyle: {
            color:'#444',
            fontSize: '14px',
            fontWeight:'400'
          },
          // x: 10, // 가로 위치 지정
          // y: -3, // 세로 위치 지정
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
          title: {
            text: 'kWh'
          },
          labels: {
            formatter() {
              return this.value + '';
            }
          }
        },
        credits: {
          enabled: false
        },
        tooltip: {
          // crosshairs: true,
          // shared: true
        },
        plotOptions: {
          column: { // 컬럼 차트 전체 옵션 지정
            borderRadius: '5%',
            // stacking: 'normal', //stacked bar 필수 설정 옵션(default undefined)
              dataLabels: {
                enabled: true,
                style: {
                  fontSize:'15px',
                  fontWeight:'500',
                  textOutline:0, // label 수치의 outline 제거 0으로 지정
                }
              }
          },
        },
        series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2],
          dataLabels: { // 바 상단의 수치값 개별 지정
            enabled: true,
            format: '{y}', // 수치 표현 포맷
            color: '#a562d4',
            // align: 'left',
            verticalAlign: 'top', //위치 지정
            x:0,
            y: -25,
          }
        }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
        }, {
          name: 'Joe',
          data: [-3, -4, -4, -2, -5]
        }, {
          name: 'Jil',
          data: [-5, -2, -6, -4, -2]
        }]
      },
    },
    fullStack: {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'FullStackedColumnChartMng'
        },
        legend: {
          floating: false, // 범례를 차트 영역 위로 띄울 시 true 지정
          align: 'right', // 수평 정렬
          // verticalAlign: 'top', // 수직 정렬 지정
          symbolRadius: 0,
          symbolWidth: 15,
          // symbolHeight: 12,
          itemDistance: 15, // 범례 간 간격 지정
          itemStyle: {
            color:'#444',
            fontSize: '14px',
            fontWeight:'400'
          },
          // x: 10, // 가로 위치 지정
          // y: -3, // 세로 위치 지정
        },
        xAxis: {
          categories: ['Gold', 'Silver', 'Bronze']
        },
        yAxis: {
          allowDecimals: true,
          title: {
            text: 'kWh'
          },
          labels: {
            formatter() {
              return this.value + '';
            }
          }
        },
        credits: {
          enabled: false
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: { // 컬럼 차트 전체 옵션 지정
            borderRadius: '5%',
            stacking: 'normal', //stacked bar 필수 설정 옵션(default undefined)
              dataLabels: {
                enabled: true,
                style: {
                  fontSize:'15px',
                  fontWeight:'500',
                  textOutline:0, // label 수치의 outline 제거 0으로 지정
                }
              }
          },
        },
        series: [{
          name: 'Norway',
          data: [148, 133, 124],
          dataLabels: { // 바 상단의 수치값 개별 지정
            enabled: true,
            format: '{y}', // 수치 표현 포맷
            color: '#444',
            // align: 'left',
            verticalAlign: 'top', //위치 지정
            x:0,
            y: -25,
          },
          stack: 'Europe'
        }, {
          name: 'Germany',
          data: [-102, -98, -65],
          stack: 'Europe'
        }, {
          name: 'United States',
          data: [113, 122, 95],
          stack: 'North America'
        }, {
          name: 'Canada',
          data: [-77, -72, -80],
          stack: 'North America'
        }]
      },
    },
    overlap: {
      chartOptions: {
        chart: {
          zoomType: 'xy',
          backgroundColor: null,
          marginTop: 20,
        },
        title: {
          text: ''
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
          backgroundColor: '#fff',
        },
        xAxis: [{
          categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23'],
          crosshair: true,
          tickInterval: 1,
          title:{
            text:""
          },
          plotBands: [{
            color: 'rgba(212, 250, 0, 0.1)',
            from: -30,
            to: 6,
            label: {
              text: '중부하',
              align: 'center',
              style: {
                color: '#b4b7bd',
              },
              y: -5
            }
          }, {
            color: 'rgba(0, 255, 167, 0.1)',
            from: 6,
            to: 10,
            label: {
              text: '경부하',
              align: 'center',
              style: {
                color: '#b4b7bd',
              },
              y: -5
            }
          }, {
            color: 'rgba(212, 250, 0, 0.1)',
            from: 10,
            to: 20,
            label: {
              text: '중부하',
              align: 'center',
              style: {
                color: '#b4b7bd',
              },
              y: -5
            }
          }, {
            color: 'rgba(250, 0, 0, 0.1)',
            from: 20,
            to: 100,
            label: {
              text: '최대부하',
              align: 'center',
              style: {
                color: '#b4b7bd',
              },
              y: -5
            }
          }],
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}',
            style: {
              color: '#b4b7bd',
            }
          },
          title: {
            text: '전력(kWh)',
            style: {
              color: '#b4b7bd',
            }
          }
        }, { // Secondary yAxis
          title: {
            text: '온도/습도',
            style: {
              color: '#b4b7bd',
            }
          },
          labels: {
            format: '{value}°C',
            style: {
              color: '#b4b7bd',
            }
          },
          opposite: true
        }],
        credits: {
          enabled: false,
        },
        tooltip: {
          shared: true
        },
        plotOptions: {
          column: {
            borderRadius: '',
          },
        },
        series: [{
          name: '현재 피크전력',
          type: 'column',
          color: '#FFB6C1',
          yAxis: 1,
          data: [20,30,30,50,20,80,50,60,70,40,50,80,60,60,70,50,0,0,0,0,0,0,0,0,0],
          tooltip: {
            valueSuffix: ' kWh'
          }
        }, {
          name: '[온도]외부온도',
          type: 'spline',
          color: '#ff9f43',
          data: [30,40,50,50,40,20,30,60,80,60,20,40,40,50,60,70,0,0,0,0,0,0,0,0,0],
          tooltip: {
            valueSuffix: '°C'
          }
        }]
      }
    },
    treemap: {
      chartOptions: {
        title: {
          text: 'TreeMapChartMng',
          align: 'left'
        },
        subtitle: {
          text: 'Source: <a href="https://snl.no/Norge" target="_blank">SNL</a>',
          align: 'left'
        },
        tooltip: {
          useHTML: true,
          pointFormat:
              'The area of <b>{point.name}</b> is <b>{point.value} km<sup>2</sup></b>'
        },
        series: [{
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          alternateStartingDirection: true,
          showInLegend: true,
          legendType: 'point',
          // allowTraversingTree: true,
          borderColor: '#fff',
          borderRadius: 1,
          borderWidth: 2,
          levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
              enabled: true,
              align: 'left',
              verticalAlign: 'top',
              style: {
                fontSize: '15px',
                fontWeight: 'bold'
              },
              format: '{point.name}',
            }
          },
          {
            level: 2,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
              enabled: true,
              crop: true,
              defer: false,
              // useHTML: true,
              align: "center",
              verticalAlign: "middle",
              allowOverlap: true,
              inside: true,
              z: 20,
              padding: 3,
              style: {
                fontSize: '13px',
                fontWeight: 'bold',
                textOverflow: "ellipsis",
              },
              formatter () {
                return `${this.point.name} <br> ${this.point.age}<span style="color:red"> ${this.point.age%2 === 0 ? '▲' : '▼'} </span>`
              }
            }
          }],
          data: [{
            id: 'Nord-Norge',
            name: 'Nord-Norge',
            color: '#50FFB1',
          },
          {
            id: 'Trøndelag',
            name: 'Trøndelag',
            color: '#F5FBEF',
          },
          {
            id: 'Vestlandet',
            name: 'Vestlandet',
            color: '#A09FA8',
          },
          {
            id: 'Østlandet',
            name: 'Østlandet',
            color: '#E7ECEF',
          },
          {
            id: 'Sørlandet',
            name: 'Sørlandet',
            color: '#A9B4C2',
          },
          {
            name: 'Troms og Finnmark',
            parent: 'Nord-Norge',
            value: 70923,
            age: 14,
          },
          {
            name: 'Nordland',
            parent: 'Nord-Norge',
            value: 35759,
            age: 92,
          },
          {
            name: 'Trøndelag',
            parent: 'Trøndelag',
            value: 39494,
            age: 13,
          },
          {
            name: 'Møre og Romsdal',
            parent: 'Vestlandet',
            value: 13840,
            age: 22,
          },
          {
            name: 'Vestland',
            parent: 'Vestlandet',
            value: 31969,
            age: 46,
          },
          {
            name: 'Rogaland',
            parent: 'Vestlandet',
            value: 8576,
            age: 31,
          },
          {
            name: 'Viken',
            parent: 'Østlandet',
            value: 22768,
            age: 67,
          },
          {
            name: 'Innlandet',
            parent: 'Østlandet',
            value: 49391,
            age: 87,
          },
          {
            name: 'Oslo',
            parent: 'Østlandet',
            value: 454,
            age: 75,
          },
          {
            name: 'Vestfold og Telemark',
            parent: 'Sørlandet',
            value: 15925,
            age: 41,
          },
          {
            name: 'Agder',
            parent: 'Agder',
            value: 14981,
            age: 22,
          },],
          cursor: 'pointer',
          // point: {
          //   events: {
          //     click: (item) => {
          //       alert('You cannot use this event using sample chart')
          //     },
          //   }
          // }
        }]
      },
    },
  }),
  getters: {
    getChartOptions(state) {
      return state.chartOptionss
    }
  },
}
