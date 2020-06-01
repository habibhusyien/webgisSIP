// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("skr17");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Klino", "Sekar", "Miyono", "Bareng", "Deling", "Bobol"],
        datasets: [{
                label: "Jumlah",
                backgroundColor: "pink",
                borderColor: "red",
                borderWidth: 1,
                data: [4355, 4648, 3388, 5179, 4237, 6398]
            },
            {
                label: "(Lk)",
                backgroundColor: "lightblue",
                borderColor: "blue",
                borderWidth: 1,
                data: [2108, 2345, 1697, 2647, 2187, 3198]
            },
            {
                label: "(Pr)",
                backgroundColor: "lightgreen",
                borderColor: "green",
                borderWidth: 1,
                data: [2247, 2303, 1691, 2532, 2050, 3200]
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