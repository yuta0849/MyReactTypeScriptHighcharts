import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const App = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = new Highcharts.Chart({
        chart: {
          renderTo: chartRef.current,
          type: 'line',
          margin: [50, 150, 60, 80]
        },
        title: {
          text: '平均CPM',
          style: { margin: '50px 100px 0 0' }
        },
        xAxis: {
          categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          title: { text: '月' }
        },
        yAxis: {
          title: { text: 'CPM (¥)' },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          formatter: function () {
            return this.series.name + ' ' + this.x + ': ¥' + this.y;
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -10,
          y: 100,
          borderWidth: 0
        },
        series: [{
          type: 'line',
          name: '広告枠A',
          data: [75, 82, 80, 76, 72, 70, 74, 79, 77, 81, 73, 75]
        },
        {
          type: 'line',
          name: '広告枠B',
          data: [65, 68, 74, 71, 73, 66, 80, 71, 69, 75, 71, 77]
        }]
      });
    }
  }, []);

  return (
    <div id="container" ref={chartRef} style={{width:'100%', height:'400px'}}></div>
  );
}

export default App;
