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
                label: "Kepadatan (Jiwa/Km2)",
                backgroundColor: "orange",
                borderColor: "grey",
                borderWidth: 1,
                data: [4.39, 6, 7.4, 14.46, 6.48, 9.94, 7.93, 7.68, 5.74, 7.44, 8.82, 11.1]
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