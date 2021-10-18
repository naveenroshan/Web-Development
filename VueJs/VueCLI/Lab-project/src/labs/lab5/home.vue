<template>
  <div class="float-container">
    <div
      class="float-child"
      id="chart1"
      style="width: 500px; height: 300px"
    ></div>
    <br />
    <div
      class="float-child"
      id="chart2"
      style="width: 300px; height: 300px"
    ></div>
    <br />
    <div
      class="float-child"
      id="chart3"
      style="width: 500px; height: 500px"
    ></div>
    <br />
    <div id="graph" class="float-child" style="height: 500px; width: 900px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartLabels: ["Inbox", "Sent", "Overdue", "Completed"],
      chartValues: [2, 2, 6, 4],
      timeTakenData: {
        expectedCompletionHours: [2, 3, 6, 4],
        actualCompletionHours: [3, 1, 4, 7],
      },
      pieChartData: [
        ["Inbox", 7],
        ["Sent", 13],
        ["Overdue", 14],
        ["Completed", 5],
      ],
      vardata : [
        15.2, 13.0, 11.7, 12.9, 16.9, 22.7, 26.0, 22.7, 29.7, 31.7, 21.3, 16.7,
        11.4, 6.6, 2.7, -5.0, -7.3, -11.3,
      ]
      
    };
  },
  //creating a function for this instance
  methods: {
    drawChart1() {
      const chart = this.chartLabels;
      $.jqplot("chart1", [this.chartValues], {
        // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
        animate: !$.jqplot.use_excanvas,
        seriesColors: ["orange", "blue", "tomato", "green"],
        seriesDefaults: {
          renderer: $.jqplot.BarRenderer,
          rendererOptions: {
            // Set varyBarColor to tru to use the custom colors on the bars.
            varyBarColor: true,
          },
          pointLabels: { show: true },
        },
        axes: {
          xaxis: {
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: this.chartLabels,
          },
        },
        highlighter: { show: false },
      });

      $("#chart1").bind(
        "jqplotDataClick",
        function (ev, seriesIndex, pointIndex, data) {
          var index = data[0] - 1;
          alert("clicked : " + chart[index] + " value: " + data[1]);
        }
      );
    },

    drawChart2() {
      $.jqplot(
        "chart2",
        [
          this.timeTakenData.expectedCompletionHours,
          this.timeTakenData.actualCompletionHours,
        ],
        {
          // Set default options on all series, turn on smoothing.
          seriesDefaults: {
            rendererOptions: {
              smooth: true,
            },
          },
          // Series options are specified as an array of objects, one object
          // for each series.
          series: [
            {
              // Change our line width and use a diamond shaped marker.
              lineWidth: 2,
              markerOptions: { style: "diamond" },
            },
            {
              // Change our line width and use a diamond shaped marker.
              lineWidth: 4,
              markerOptions: { style: "diamond" },
            },
            {
              // Don't show a line, just show markers.
              // Make the markers 7 pixels with an 'x' style
              showLine: false,
              markerOptions: { size: 4, style: "x" },
            },
            {
              // Use (open) circlular markers.
              markerOptions: { style: "circle" },
            },
            {
              // Use a thicker, 5 pixel line and 10 pixel
              // filled square markers.
              lineWidth: 5,
              markerOptions: { style: "filledSquare", size: 10 },
            },
          ],
        }
      );
    },

    drawChart3() {
      $.jqplot("chart3", [this.pieChartData], {
        gridPadding: { top: 0, bottom: 38, left: 0, right: 0 },
        //#CED8F6 for pie chart color
        seriesColors: ["orange", "blue", "tomato", "green"],
        seriesDefaults: {
          renderer: $.jqplot.PieRenderer,
          trendline: { show: false },
          rendererOptions: { padding: 8, showDataLabels: true },
        },
        legend: {
          show: true,
          placement: "inside",
          rendererOptions: {
            numberRows: 1,
          },
          location: "n",
          marginTop: "20px",
        },
      });

      $("#chart3").bind(
        "jqplotDataClick",
        function (ev, seriesIndex, pointIndex, data, plot,axes) {
          alert("clicked : " + data);
        }
      );
    },

    drawChart4() {
      Array.prototype.average = function () {
        var sum = 0;
        var j = 0;
        for (var i = 0; i < this.length; i++) {
          if (isFinite(this[i])) {
            sum = sum + parseFloat(this[i]);
            j++;
          }
        }
        if (j === 0) {
          return 0;
        } else {
          return sum / j;
        }
      };

      Array.prototype.stddev = function () {
        var n = 0;
        var sum = 0.0;
        var sum_sq = 0.0;
        for (var i = 0; i < this.length; i++) {
          n++;
          sum += this[i];
          sum_sq += this[i] * this[i];
        }
        return Math.sqrt(sum_sq / n - Math.pow(sum / n, 2));
      };

      Array.prototype.average_t = function () {
        var sum = 0;
        var j = 0;
        var average_t = [];
        for (var i = 0; i < this.length; i++) {
          if (isFinite(this[i])) {
            sum = sum + parseFloat(this[i]);
            j++;
            average_t[i] = sum / j;
          }
        }
        if (j === 0) {
          return 0;
        } else {
          return average_t;
        }
      };

      
      var line = this.vardata.average_t();
      var options = {
        title: "Statistics on a Bar Chart",
        seriesColors: ["darkgreen", "orange"],
        series: [
          {
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
              barMargin: 5,
              fillToZero: true,
            },
            pointLabels: {
              show: true,
              formatString: "%.1f",
              seriesLabelIndex: 1,
              hideZeros: false,
            },
          },
        ],
        axes: {
          xaxis: {
            tickRenderer: $.jqplot.CanvasAxisTickRenderer,
            renderer: $.jqplot.CategoryAxisRenderer,
            label: "Sample #",
          },
          yaxis: {
            labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
            padMin: 0,
            pad: 1.1,
            label: "Temperatures (°C)",
            rendererOptions: { forceTickAt0: true },
          },
        },
        negativeSeriesColors: ["darkred"],
        grid: {
          background: "#f8f8f8",
        },
        canvasOverlay: {
          show: true,
          objects: [
            {
              dashedHorizontalLine: {
                name: "average",
                y: this.vardata.average(),
                lineWidth: 3,
                color: "black",
                shadow: false,
              },
            },
            {
              rectangle: {
                name: "stddev",
                ymin: this.vardata.average() - this.vardata.stddev(),
                ymax: this.vardata.average() + this.vardata.stddev(),
                color: "rgba(150,150,150,0.3)",
                shadow: false,
              },
            },
          ],
        },
      };
      $.jqplot("graph", [this.vardata, line], options);

      /* CLICK CODE START*/
      $("#graph").bind(
        "jqplotDataClick",
        function (ev, seriesIndex, pointIndex, data) {
          alert(data +" "+ pointIndex);
        }
      );
    },
  },

  mounted() {
    $.jqplot.config.enablePlugins = true;
    this.drawChart1();
   // this.drawChart2();
    this.drawChart3();
   // this.drawChart4();
  },
};
</script>

<style scoped>
.float-container {
  display: flex;
}

.float-child {
  width: 50%;
  float: left;
  padding: 10px;
}
</style>
