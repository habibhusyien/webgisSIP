// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 2019
var jumlah19 = [5061, 4659, 3405, 5154, 4054, 6376];
var lk19 = [2882, 2327, 1709, 2629, 2064, 3188];
var pr19 = [2179, 2332, 1696, 2525, 1990, 3188];
//Data 2018
var jumlah18 = [5061, 4659, 3405, 5154, 4054, 6376];
var lk18 = [2882, 2327, 1709, 2629, 2064, 3188];
var pr18 = [2179, 2332, 1696, 2525, 1990, 3188];
//Data 2017
var jumlah17 = [4355, 4648, 3388, 5179, 4237, 6398];
var lk17 = [2108, 2345, 1697, 2647, 2187, 3198];
var pr17 = [2247, 2303, 1691, 2532, 2050, 3200];

var ctx = document.getElementById("Grafik Sekar").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Klino", "Sekar", "Miyono", "Bareng", "Deling", "Bobol"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                showInLegend: true,
                data: jumlah19,
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                showInLegend: true,
                data: lk19,
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                showInLegend: true,
                data: pr19,
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
            display: true,
            position: "top",
        }

    }
});

function updateChart1() {
    barchart.data.datasets[0].data = jumlah17;
    barchart.data.datasets[1].data = lk17;
    barchart.data.datasets[2].data = pr17;
    barchart.update();
};

function updateChart2() {
    barchart.data.datasets[0].data = jumlah18;
    barchart.data.datasets[1].data = lk18;
    barchart.data.datasets[2].data = pr18;
    barchart.update();
};

function updateChart3() {
    barchart.data.datasets[0].data = jumlah19;
    barchart.data.datasets[1].data = lk19;
    barchart.data.datasets[2].data = pr19;
    barchart.update();
};