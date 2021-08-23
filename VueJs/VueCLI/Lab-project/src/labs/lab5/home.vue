<template>
  <div class="float-container">
    <div
      class="float-child"
      id="chart1"
      style="width: 300px; height: 300px"
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
      style="width: 300px; height: 300px"
    ></div>
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
        actualCompletionHours: [3, 1, 4, 7]
      },
      pieChartData: [
        ["Inbox", 7],
        ["Sent", 13],
        ["Overdue", 14],
        ["Completed", 5]
      ]
    };
  },
  //creating a function for this instance
  methods: {
    drawChart1() {
      $.jqplot("chart1", [this.chartValues], {
        // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
        animate: !$.jqplot.use_excanvas,
        seriesColors: ["orange", "blue", "tomato", "green"],
        seriesDefaults: {
          renderer: $.jqplot.BarRenderer,
          rendererOptions: {
            // Set varyBarColor to tru to use the custom colors on the bars.
            varyBarColor: true
          },
          pointLabels: { show: true }
        },
        axes: {
          xaxis: {
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: this.chartLabels
          }
        },
        highlighter: { show: false }
      });
    },

    drawChart2() {
      $.jqplot(
        "chart2",
        [
          this.timeTakenData.expectedCompletionHours,
          this.timeTakenData.actualCompletionHours
        ],
        {
          // Set default options on all series, turn on smoothing.
          seriesDefaults: {
            rendererOptions: {
              smooth: true
            }
          },
          // Series options are specified as an array of objects, one object
          // for each series.
          series: [
            {
              // Change our line width and use a diamond shaped marker.
              lineWidth: 2,
              markerOptions: { style: "diamond" }
            },
            {
              // Change our line width and use a diamond shaped marker.
              lineWidth: 4,
              markerOptions: { style: "diamond" }
            },
            {
              // Don't show a line, just show markers.
              // Make the markers 7 pixels with an 'x' style
              showLine: false,
              markerOptions: { size: 4, style: "x" }
            },
            {
              // Use (open) circlular markers.
              markerOptions: { style: "circle" }
            },
            {
              // Use a thicker, 5 pixel line and 10 pixel
              // filled square markers.
              lineWidth: 5,
              markerOptions: { style: "filledSquare", size: 10 }
            }
          ]
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
          rendererOptions: { padding: 8, showDataLabels: true }
        },
        legend: {
          show: true,
          placement: "inside",
          rendererOptions: {
            numberRows: 1
          },
          location: "n",
          marginTop: "20px"
        }
      });
    }
  },

  mounted() {
    $.jqplot.config.enablePlugins = true;
    this.drawChart1();
    this.drawChart2();
    this.drawChart3();
  }
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
