// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("skr19");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Klino", "Sekar", "Miyono", "Bareng", "Deling", "Bobol"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [5061, 4659, 3405, 5154, 4054, 6376]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [2882, 2327, 1709, 2629, 2064, 3188]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [2179, 2332, 1696, 2525, 1990, 3188]
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