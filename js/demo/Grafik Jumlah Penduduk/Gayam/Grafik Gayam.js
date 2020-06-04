// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 2019
var jumlah19 = [4295, 6641, 1827, 2564, 1287, 2876, 1545, 1290, 4866, 1542, 2695, 2936];
var lk19 = [2163, 3334, 926, 1295, 657, 1462, 788, 646, 2489, 762, 1366, 1433];
var pr19 = [2131, 3307, 901, 1269, 630, 1414, 757, 644, 2377, 780, 1329, 1503];
//Data 2018
var jumlah18 = [4274, 6639, 1920, 2546, 1291, 2880, 1533, 1279, 4858, 1529, 2689, 2928];
var lk18 = [2145, 3329, 927, 1280, 659, 1458, 779, 646, 2483, 759, 1357, 1432];
var pr18 = [2129, 3310, 983, 1266, 632, 1422, 754, 633, 2375, 770, 1332, 1496];
//Data 2017
var jumlah17 = [4239, 6606, 1790, 2573, 1373, 2853, 1554, 1475, 4840, 1517, 2840, 2919];
var lk17 = [2123, 3316, 898, 1293, 743, 1423, 784, 723, 2481, 747, 1507, 1432];
var pr17 = [2116, 3290, 892, 1280, 630, 1430, 770, 752, 2359, 770, 1333, 1487];

var ctx = document.getElementById("Grafik Gayam").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mojodelik", "Gayam", "Bonorejo", "Beged", "Brabowan", "Ngraho", "Begadon", "Ringintunggal", "Katur", "Cengungklung", "Sudu", "Manukan"],
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