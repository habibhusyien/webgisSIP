// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("gym19");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mojodelik", "Gayam", "Bonorejo", "Beged", "Brabowan", "Ngraho", "Begadon", "Ringintunggal", "Katur", "Cengungklung", "Sudu", "Manukan"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [4295, 6641, 1827, 2564, 1287, 2876, 1545, 1290, 4866, 1542, 2695, 2936]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [2163, 3334, 926, 1295, 657, 1462, 788, 646, 2489, 762, 1366, 1433]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [2131, 3307, 901, 1269, 630, 1414, 757, 644, 2377, 780, 1329, 1503]
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