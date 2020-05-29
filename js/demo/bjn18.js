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
                data: [3559, 3067, 10940, 7432, 5465, 5654, 3681, 4370, 1344, 4001, 2400, 12084, 5107, 5239, 5088, 2441, 4784, 3914, ]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [1686, 1547, 5469, 3701, 2692, 2838, 1876, 2124, 661, 1747, 1138, 5865, 2568, 2597, 2442, 1237, 2375, 1898]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [1872, 1520, 5471, 3731, 2773, 2816, 1805, 2246, 683, 2254, 1262, 6219, 2539, 2642, 1204, 2409, 2016]
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
            display: true,
            position: "top",
        }
    }
});