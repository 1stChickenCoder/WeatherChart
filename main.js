const labels = ['Jan','Feb','Mar','Apl','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const inputMax = document.getElementById("inputText1");
const inputMin = document.getElementById("inputText2");
function getRanNumbers(max,min){
    var a = [];
    for (var i = 0; i<12; i++){
        a[i] = Math.random() * (max - min) + min;  
    }
    return a;
}
const data = {
    labels: labels,
    datasets :[
        {
            label: 'Nhiệt độ',
            backgroundColor: "aqua",
            borderColor:"black",
            data:  getRanNumbers(50,0),
            tension: 0.2,
        },
        {
            label: 'Độ ẩm',
            backgroundColor: "brown",
            borderColor:"black",
            data:  getRanNumbers(50,0),
            tension: 0.2,
        },
        {
            label: 'Ánh sáng',
            backgroundColor: "yellow",
            borderColor:"black",
            data:  getRanNumbers(50,0),
            tension: 0.2,
        }
    ]
}
const config = {
    type: 'line',
    data: data,
}
const canvas = document.getElementById('canvas');
const chart = new Chart(canvas, config);

function addNum1(event){
    if (inputMin.value !== "" && inputMax.value !== "") {
        var arr1= getRanNumbers(Number(inputMax.value),Number(inputMin.value));
        chart.config.data.datasets[0].data = arr1;
        chart.update();
    }
}
function addNum2(event){
    if (inputMin.value !== "" && inputMax.value !== "") {
        var arr2= getRanNumbers(Number(inputMax.value),Number(inputMin.value));
        chart.config.data.datasets[0].data = arr2;
        chart.update();
    } 
}