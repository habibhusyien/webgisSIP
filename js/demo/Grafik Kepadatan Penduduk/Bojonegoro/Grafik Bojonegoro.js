// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example

//Data 
var Kpdt19 = [16, 19, 57, 34, 76, 106, 47, 18, 46, 23, 19, 66, 118, 23, 58, 26, 28, 19];
var Kpdt18 = [24, 19, 67, 27, 65, 64, 29, 6, 169, 23, 40, 25, 102, 25, 78, 103, 20, 14];
var Kpdt17 = [16, 20, 57, 39, 81, 105, 46, 18, 42, 23, 19, 63, 119, 23, 61, 23, 27, 19];


var ctx = document.getElementById("Grafik Bojonegoro").getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pacul", "Jetak", "Sukorejo", "Sumbang", "Mojokampung", "Klangon", "Kepatihan", "Semanding", "Kauman", "Kadipaten", "Ngrowo", "Karangpacar", "Ledok Wetan", "Campurejo", "Banjarjo", "Ledok Kulon", "Mulyoagung", "Kalirejo"],
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