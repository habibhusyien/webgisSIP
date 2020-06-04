// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 2019
var jumlah19 = [3515, 2843, 10823, 6499, 5061, 5745, 3735, 4332, 1476, 3994, 2397, 12687, 5087, 5266, 4862, 2774, 4977, 3881];
var lk19 = [1629, 1457, 5277, 3160, 2459, 2885, 1885, 2108, 723, 1742, 1136, 6144, 2558, 2598, 2383, 1422, 2465, 1857];
var pr19 = [1886, 1386, 5546, 3339, 2602, 2860, 1850, 2224, 753, 2252, 1261, 6543, 2529, 2668, 2479, 1352, 2512, 2024];
//Data 2018
var jumlah18 = [5266, 2818, 12744, 5105, 4356, 3443, 2352, 1467, 5396, 4034, 5105, 4862, 4394, 5742, 6568, 10945, 3673, 2753];
var lk18 = [2598, 1451, 6162, 2560, 2166, 1345, 1113, 722, 3505, 1842, 2480, 2383, 2190, 2882, 3171, 5422, 1856, 1414];
var pr18 = [2668, 1367, 6582, 2545, 2190, 2098, 1239, 745, 1891, 2192, 2625, 2479, 2204, 2860, 3397, 5523, 1817, 1339];
//Data 2017
var jumlah17 = [3559, 3067, 10940, 7432, 5465, 5654, 3681, 4370, 1344, 4001, 2400, 12084, 5107, 5239, 5088, 2441, 4784, 3914, ];
var lk17 = [1686, 1547, 5469, 3701, 2692, 2838, 1876, 2124, 661, 1747, 1138, 5865, 2568, 2597, 2442, 1237, 2375, 1898];
var pr17 = [1872, 1520, 5471, 3731, 2773, 2816, 1805, 2246, 683, 2254, 1262, 6219, 2539, 2642, 2646, 1204, 2409, 2016];

var ctx = document.getElementById("Grafik Bojonegoro").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pacul", "Jetak", "Sukorejo", "Sumbang", "Mojokampung", "Klangon", "Kepatihan", "Semanding", "Kauman", "Kadipaten", "Ngrowo", "Karangpacar", "Ledok Wetan", "Campurejo", "Banjarjo", "Ledok Kulon", "Mulyoagung", "Kalirejo"],
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