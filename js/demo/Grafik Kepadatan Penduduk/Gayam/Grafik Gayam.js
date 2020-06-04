// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 
var Kpdt19 = [4.45, 6.03, 7.55, 14.4, 6.07, 10.02, 7.88, 6.72, 5.77, 7.56, 8.37, 11.16];
var Kpdt18 = [4.43, 6.03, 7.93, 14.3, 6.9, 10.03, 7.82, 6.66, 5.76, 7.5, 8.35, 11.13];
var Kpdt17 = [4.39, 6, 7.4, 14.46, 6.48, 9.94, 7.93, 7.68, 5.74, 7.44, 8.82, 11.1];


var ctx = document.getElementById("Grafik Gayam").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mojodelik", "Gayam", "Bonorejo", "Beged", "Brabowan", "Ngraho", "Begadon", "Ringintunggal", "Katur", "Cengungklung", "Sudu", "Manukan"],
        datasets: [{
            label: "Kepadatan (Jiwa/Km2)",
            backgroundColor: "orange",
            borderColor: "gray",
            borderWidth: 1,
            data: Kpdt19,
        }, ],
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

function updateChart1() {
    barchart.data.datasets[0].data = Kpdt17;
    barchart.update();
};

function updateChart2() {
    barchart.data.datasets[0].data = Kpdt18;
    barchart.update();
};

function updateChart3() {
    barchart.data.datasets[0].data = Kpdt19;
    barchart.update();
};