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
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [4274, 6639, 1920, 2546, 1291, 2880, 1533, 1279, 4858, 1529, 2689, 2928]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [2145, 3329, 927, 1280, 659, 1458, 779, 646, 2483, 759, 1357, 1432]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [2129, 3310, 983, 1266, 632, 1422, 754, 633, 2375, 770, 1332, 1496]
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