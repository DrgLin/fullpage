$(document).ready(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'my skill tree'
        },
        xAxis: {
            categories: ['html', 'css', 'JS<br />jquery', 'Git', 'ASP.NET<br />Dreamweaver'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: 'skill Ability  (point)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 2017',
            data: [6, 5, 3, 0, 7]
        }, {
            name: 'Year 2018',
            data: [8, 8, 6, 6, 7]

        }]
    });    });
    