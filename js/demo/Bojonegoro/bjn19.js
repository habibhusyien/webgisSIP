// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("bjn19");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pacul", "Jetak", "Sukorejo", "Sumbang", "Mojokampung", "Klangon", "Kepatihan", "Semanding", "Kauman", "Kadipaten", "Ngrowo", "Karangpacar", "Ledok Wetan", "Campurejo", "Banjarjo", "Ledok Kulon", "Mulyoagung", "Kalirejo"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                showInLegend: true,
                data: [3515, 2843, 10823, 6499, 5061, 5745, 3735, 4332, 1476, 3994, 2397, 12687, 5087, 5266, 4862, 2774, 4977, 3881]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                showInLegend: true,
                data: [1629, 1457, 5277, 3160, 2459, 2885, 1885, 2108, 723, 1742, 1136, 6144, 2558, 2598, 2383, 1422, 2465, 1857]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                showInLegend: true,
                data: [1886, 1386, 5546, 3339, 2602, 2860, 1850, 2224, 753, 2252, 1261, 6543, 2529, 2668, 2479, 1352, 2512, 2024]
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

        }

    }
});