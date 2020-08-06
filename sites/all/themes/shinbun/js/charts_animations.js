/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    // customize the overlay property according to the different requested page.
    Drupal.behaviors.charts_animations = {
        attach: function (context) {

            //PIE CHART

            var data = [
                {
                    value: 30,
                    color:"#F38630"
                },
                {
                    value : 50,
                    color : "#E0E4CC"
                },
                {
                    value : 100,
                    color : "#69D2E7"
                }
            ]

            if(document.getElementById("myChart") != null){
                //Get the context of the canvas element we want to select
                var ctx = document.getElementById("myChart").getContext("2d");
                var myNewChart = new Chart(ctx).Pie(data);
            }


            //POLAR CHART

            var data = [
                {
                    value : 30,
                    color: "#D97041"
                },
                {
                    value : 90,
                    color: "#C7604C"
                },
                {
                    value : 24,
                    color: "#21323D"
                },
                {
                    value : 58,
                    color: "#9D9B7F"
                },
                {
                    value : 82,
                    color: "#7D4F6D"
                },
                {
                    value : 8,
                    color: "#584A5E"
                }
            ]

            if(document.getElementById("polarChart") != null){
                //Get the context of the canvas element we want to select
                var ctx = document.getElementById("polarChart").getContext("2d");
                var myPolarChart = new Chart(ctx).PolarArea(data);
            }


            //DOUGHNUT CHART

            var data = [
                {
                    value: 30,
                    color:"#F7464A"
                },
                {
                    value : 50,
                    color : "#E2EAE9"
                },
                {
                    value : 100,
                    color : "#D4CCC5"
                },
                {
                    value : 40,
                    color : "#949FB1"
                },
                {
                    value : 120,
                    color : "#4D5360"
                }

            ]

            if(document.getElementById("doughnutChart") != null){
                //Get the context of the canvas element we want to select
                var ctx = document.getElementById("doughnutChart").getContext("2d");
                var myDoughnutChart = new Chart(ctx).Doughnut(data);
            }



            //RADAR CHART

            var data = {
                labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        data : [28,48,40,19,96,27,100]
                    }
                ]
            }

            if(document.getElementById("radarChart") != null){
                //Get the context of the canvas element we want to select
                var ctx = document.getElementById("radarChart").getContext("2d");
                var myRadarChart = new Chart(ctx).Radar(data);
            }


            //LINE CHART

            var data = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        data : [28,48,40,19,96,27,100]
                    }
                ]
            }

            if(document.getElementById("lineChart") != null){
                //Get the context of the canvas element we want to select
                var ctx = document.getElementById("lineChart").getContext("2d");
                var myLineChart = new Chart(ctx).Line(data);
            }



            //BAR CHART

            var data = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        data : [28,48,40,19,96,27,100]
                    }
                ]
            }

            if(document.getElementById("barChart") != null){
                //Get the context of the canvas element we want to select
                var ctx = document.getElementById("barChart").getContext("2d");
                var myBarChart = new Chart(ctx).Bar(data);
            }


        }
    };
})(jQuery);



