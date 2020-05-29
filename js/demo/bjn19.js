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
            data: [3559, 3067, 10940, 7432, 5465, 5654, 3681, 4370, 1344, 4001, 2400, 12084, 5107, 5239, 5088, 2441, 4784, 3914, ],
        }, {
            label: "(Lk)",
            backgroundColor: "lightblue",
            borderColor: "blue",
            borderWidth: 1,
            data: [3559, 3067, 10940, 7432, 5465, 5654, 3681, 4370, 1344, 4001, 2400, 12084, 5107, 5239, 5088, 2441, 4784, 3914, ],
        }, {
            label: "(Pr)",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [3559, 3067, 10940, 7432, 5465, 5654, 3681, 4370, 1344, 4001, 2400, 12084, 5107, 5239, 5088, 2441, 4784, 3914, ],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'Desa'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 18
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 8
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: true,
            position: "top"
        }
    }
});