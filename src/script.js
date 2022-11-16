'use strict';

const buttonSubmit = document.getElementById('submit__button');
const form = document.getElementById('enter__data');

form.onclick = (event) => {
    let target = event.target;

    if(target.tagName !== 'INPUT'){
        return;
    }

    eventMove(target);
}

const eventMove = (input) => {
    input.value = '';
}

buttonSubmit.addEventListener('click', () => {
    const amplitude = Number(document.getElementById('amplitude').value);
    const period = Number(document.getElementById('period').value);
    const phase = Number(document.getElementById('phase').value);
    const width = Number(document.getElementById('width').value);
    const height = Number(document.getElementById('height').value);

    function periodFunction() {
        const chart = document.getElementById('grafica');
        chart.style.width = width + 'px';
        chart.style.height = height + 'px';
        const myChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'f(x)',
                        data: [],
                        borderColor: 'blue',
                        borderWidth: 2,
                        fill: false,
                        pointHitRadius: 10,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        pointHoverBorderColor: 'blue',
                        pointHoverBackgroundColor: 'transparent'
                    }
                ]
            },
            options: {
                responsive: false,
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                }
            }
        });

        for(let x = 0.0; x <= 100; x+=0.1){
            myChart.data.labels.push('' + x.toFixed(2));
            myChart.data.datasets[0].data.push(f(x, amplitude, period, phase).toFixed(2));
        }

        myChart.update();

        function f(x, A, T, F){
            return A * Math.sin(x/T + F);
        }
    }

    periodFunction();
});












