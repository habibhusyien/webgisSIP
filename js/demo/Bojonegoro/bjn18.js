// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("bjn18");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pacul", "Jetak", "Sukorejo", "Sumbang", "Mojokampung", "Klangon", "Kepatihan", "Semanding", "Kauman", "Kadipaten", "Ngrowo", "Karangpacar", "Ledok Wetan", "Campurejo", "Banjarjo", "Ledok Kulon", "Mulyoagung", "Kalirejo"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [5266, 2818, 12744, 5105, 4356, 3443, 2352, 1467, 5396, 4034, 5105, 4862, 4394, 5742, 6568, 10945, 3673, 2753]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [2598, 1451, 6162, 2560, 2166, 1345, 1113, 722, 3505, 1842, 2480, 2383, 2190, 2882, 3171, 5422, 1856, 1414]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [2668, 1367, 6582, 2545, 2190, 2098, 1239, 745, 1891, 2192, 2625, 2479, 2204, 2860, 3397, 5523, 1817, 1339]
            },

        ],
    },
    options: {
        scales: {
            xAxes: [{}],
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }],
        },
        legend: {
            display: false,
            position: "top",

        }
    }
});