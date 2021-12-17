
const ctx_1 = document.getElementById('myChart_1').getContext('2d');
    const myChart_1 = new Chart(ctx_1, {
        type: 'bar',
        data: {
            labels: ['Everett', 'Seattle', 'Lynwood', 'Bothell', 'Mukilteo', 'Edmonds'],
            datasets: [{
                lable : '',
                data: [100000, 87000, 49000, 47000, 44000, 36000],
                backgroundColor: '#41BF99',
                borderColor: '#41BF99',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid : {
                        display : false,
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                x : {
                    title : {
                        display : true,
                        text : '$',
                        color : "#000000",
                        font : {
                            weight : 'bold'
                        },
                        align : 'end'
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                
            },
            animation : {
                easing : 'linear'
            },
            categoryPercentage : .8,
            barPercentage : .5,
            indexAxis : 'y',
            plugins: {
                title: {
                    position : "bottom",
                    text : 'Revenue for November 2019',
                    display  : true,
                    color : '#000000'
                },
                legend : {
                    display : false,
                }
            }
        }
    });


    const ctx_2 = document.getElementById('myChart_2').getContext('2d');
    const myChart_2 = new Chart(ctx_2, {
        type: 'bar',
        data: {
            labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance','Material Sale'],
            datasets: [{
                lable : '',
                data: [200000, 130000, 87000, 85000, 48000, 45000,4000],
                backgroundColor: '#41BF99',
                borderColor: '#41BF99',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid : {
                        display : false,
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                x : {
                    title : {
                        display : true,
                        text : '$',
                        color : "#000000",
                        font : {
                            weight : 'bold'
                        },
                        align : 'end'
                    },
                    ticks : {
                        color : '#000000',
                    }
                },
                
            },
            animation : {
                easing : 'linear'
            },
            categoryPercentage : 1,
            barPercentage : .5,
            indexAxis : 'y',
            plugins: {
                title: {
                    position : "bottom",
                    text : 'Revenue for November 2019',
                    display  : true,
                    color : '#000000'
                },
                legend : {
                    display : false,
                }
            }
        }
    });
