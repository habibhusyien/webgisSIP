// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("gym18");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mojodelik", "Gayam", "Bonorejo", "Beged", "Brabowan", "Ngraho", "Begadon", "Ringintunggal", "Katur", "Cengungklung", "Sudu", "Manukan"],
        datasets: [{
                label: "Kepadatan (Jiwa/Km2)",
                backgroundColor: "orange",
                borderColor: "grey",
                borderWidth: 1,
                data: [4.43, 6.03, 7.93, 14.3, 6.9, 10.03, 7.82, 6.66, 5.76, 7.5, 8.35, 11.13]
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