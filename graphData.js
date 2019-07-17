(function() {
  var graphData = {
    type: "radar",
    data: {
      labels: [
        "Axes 1",
        "Axes 2",
        "Axes 3",
        "Axes 4",
        "Axes 5",
        "Axes 6",
        "Axes 7"
      ],

      datasets: [
        {
          label: "DataSeries",
          fill: true,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,0.3)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "rgba(75,192,192,0.5)",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [30, 5, 30, 20, 30, 25, 50],
          spanGaps: false
        },
        {
         label: "Control",
          fill: false,
          lineTension: 0.1,
          //backgroundColor: "rgba(75,192,192,0.3)",
          borderColor: "rgba(255,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [5,10],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255,192,192,1)",
          pointBackgroundColor: "rgba(255,192,192,1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 20,
          data: [40, 40, 40, 30, 20, 40, 40],
          spanGaps: false 
        }
      ]
    },
    options: {
      scale: {
        ticks: {
          min: 0, // suggestedMin: 0,
          max: 50, //suggestedMax: 50
          stepSize: 10
        }
      },
      animation: false,
      responsive: false
    }
  }

  // canvas drawing
  var context = document.getElementById("radarCanvas").getContext("2d");
  var radarChart = new Chart(context, graphData); // Works fine

  // svg drawing
  var svgContext = C2S(900, 600);
  var mySvg = new Chart(svgContext, graphData);

  var svgString = svgContext.getSerializedSvg(true);
  var svgContainer = document.getElementById('svg-container');
  svgContainer.outerHTML += svgString;
})();
