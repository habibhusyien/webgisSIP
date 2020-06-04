// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 
var Kpdt19 = [2.49, 3.39, 1.68, 2.24, 2.57, 1.71];
var Kpdt18 = [2.49, 3.39, 1.68, 2.24, 2.57, 1.71];
var Kpdt17 = [2.14, 3.38, 1.67, 2.25, 2.58, 1.71];


var ctx = document.getElementById("Grafik Sekar").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Klino", "Sekar", "Miyono", "Bareng", "Deling", "Bobol"],
        datasets: [{
            label: "Kepadatan (Jiwa/Km2)",
            backgroundColor: "orange",
            borderColor: "gray",
            borderWidth: 1,
            data: Kpdt19,
        }, ],
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

function updateChart1() {
    barchart.data.datasets[0].data = Kpdt17;
    barchart.update();
};

function updateChart2() {
    barchart.data.datasets[0].data = Kpdt18;
    barchart.update();
};

function updateChart3() {
    barchart.data.datasets[0].data = Kpdt19;
    barchart.update();
};