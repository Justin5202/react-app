option = {
    title: {
        text: '数据图表'
    },
    tooltip: {},
    legend: {
        data:['数据图表']
    },
    grid:{
           x2:140,
              y2:150
        
    },
    xAxis: {
        data: ["建设用地","城市建筑","交通设施","市政设施","水利设施","公共设施","居住建筑","配套公建","工业建筑","工业用地"],
       axisLine:{  
                    lineStyle:{  
                        color:'#00BCD4'
                    }  
                },
        axisLabel:{
            rotate:-45,
            // inside: true,
            textStyle:{
                fontSize:30,
                color: '#00BCD4'
            }
        },
        z: 10
    },
    yAxis: {
        axisLine:{  
                    lineStyle:{  
                        color:'#00BCD4'
                    }  
                },
        axisLabel:{
                     textStyle:{
                         fontSize: 30
                     }
                 }
    },
    series: [{
        name: '访问次数',
        type: 'bar',
        data: [90, 80, 70, 60, 50, 40, 30, 20, 10, 5],
        color: ['#8BC34A']
    }]
};