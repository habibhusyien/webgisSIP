// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("gym17");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mojodelik", "Gayam", "Bonorejo", "Beged", "Brabowan", "Ngraho", "Begadon", "Ringintunggal", "Katur", "Cengungklung", "Sudu", "Manukan"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [4239, 6606, 1790, 2573, 1373, 2853, 1554, 1475, 4840, 1517, 2840, 2919]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [2123, 3316, 898, 1293, 743, 1423, 784, 723, 2481, 747, 1507, 1432]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [2116, 3290, 892, 1280, 630, 1430, 770, 752, 2359, 770, 1333, 1487]
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