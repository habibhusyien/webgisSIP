// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("skr17");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Klino", "Sekar", "Miyono", "Bareng", "Deling", "Bobol"],
        datasets: [{
                label: "Kepadatan (Jiwa/Km2)",
                backgroundColor: "orange",
                borderColor: "grey",
                borderWidth: 1,
                data: [2.14, 3.38, 1.67, 2.25, 2.58, 1.71]
            },

        ],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 12,
                    fontFamily: "'Roboto', sans-serif",
                    fontColor: '#000',
                    fontStyle: 'normal'
                }
            }],
            yAxes: [{}],
        },
        legend: {
            display: false,
        }
    }
});