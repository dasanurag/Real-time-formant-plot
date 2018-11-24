//csv_path = "http://192.168.0.22:8000/formant.csv";
csv_path = "formant.csv"

function refresh() {
    d3.csv(csv_path, function(data) {
        plot(data);
        setTimeout(refresh, 200);
    });
}

plot([]);
refresh();

function plot(data) {
    var data = data.map(function(x) {
        return [parseFloat(x.F1), parseFloat(x.F2)];
    });
    var margin = {top: 30, right: 50, bottom: 50, left: 75}
      , width = 1000 - margin.left - margin.right
      , height = 630 - margin.top - margin.bottom;

    var x = d3.scale.linear()
              .domain([0, 1600])
              .range([ 0, width ]);

    var y = d3.scale.log()
              .domain([400, 4000])
              .range([ height, 0 ]);

    document.querySelector("#chart").innerHTML = "";
    var chart = d3.select('#chart')
        .append('svg:svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'chart')

    chart.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "lightgray");    
    
    var main = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'main')   
            
    // draw the x axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

    main.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .attr('class', 'main axis date')
        .call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');
        

    main.append('g')
        .attr('transform', 'translate(0,0)')
        .attr('class', 'main axis date')
        .call(yAxis);


    var poly = [{"x":186.03351955307255, "y":2880.405531153565},
{"x":177.65363128491606, "y":2786.3449943234127},
{"x":166.48044692737426, "y":2684.1739248200174},
{"x":158.10055865921777, "y":2596.521392014002},
{"x":146.92737430167585, "y":2501.3108677784935},
{"x":141.3407821229049, "y":2429.70981844236},
{"x":135.75418994413405, "y":2340.670233247692},
{"x":135.75418994413405, "y":2254.945833568237},
{"x":135.75418994413405, "y":2172.360993061204},
{"x":135.75418994413405, "y":2101.4948762713852},
{"x":152.51396648044692, "y":2041.5278450743863},
{"x":169.27374301675968, "y":1991.511128896921},
{"x":191.6201117318435, "y":1967.0780789746404},
{"x":208.37988826815626, "y":1950.971201585724},
{"x":230.7262569832402, "y":1967.3970126599938},
{"x":253.07262569832403, "y":2000.4793446447395},
{"x":267.03910614525137, "y":2042.4973674115674},
{"x":283.7988826815641, "y":2094.085579371532},
{"x":294.97206703910615, "y":2138.0449462662905},
{"x":306.14525139664795, "y":2191.995675441454},
{"x":317.31843575418986, "y":2266.018600172047},
{"x":325.69832402234636, "y":2332.822852033168},
{"x":339.6648044692737, "y":2411.6293880535623},
{"x":348.0446927374302, "y":2503.397263976491},
{"x":359.217877094972, "y":2598.6872053201773},
{"x":367.5977653631285, "y":2697.5730483115026},
{"x":378.7709497206703, "y":2800.2541454121665},
{"x":387.15083798882677, "y":2918.8858560943327},
{"x":395.53072625698326, "y":3017.420664644427},
{"x":403.9106145251395, "y":3119.2817795232636},
{"x":409.4972067039106, "y":3264.8986179104368},
{"x":420.6703910614525, "y":3361.189667660318},
{"x":423.46368715083804, "y":3460.200400106295},
{"x":423.46368715083804, "y":3576.8844655488815},
{"x":415.08379888268155, "y":3682.078369896792},
{"x":401.1173184357541, "y":3758.981338184155},
{"x":378.7709497206703, "y":3821.4815414612917},
{"x":348.0446927374302, "y":3820.994784307525},
{"x":325.69832402234636, "y":3757.806219874292},
{"x":303.35195530726253, "y":3665.147034092177},
{"x":281.0055865921787, "y":3559.9833370072874},
{"x":267.03910614525137, "y":3457.9572206407033},
{"x":247.48603351955308, "y":3344.8816130923287},
{"x":233.51955307262563, "y":3235.5785275386793},
{"x":219.5530726256983, "y":3116.89864728035},
{"x":202.79329608938542, "y":2990.1152611206435}];



    // lines_plotted = 0
    // for (var i = data.length - 1; i > 0; i--) {
    //     main.append("line")
    //         .attr('transform', 'translate(0,0)')
    //         .style("stroke", "black")
    //         .attr("x1", x(data[i][0]))
    //         .attr("y1", y(data[i][1]))
    //         .attr("x2", x(data[i-1][0]))
    //         .attr("y2", y(data[i-1][1]));

    //     lines_plotted += 1;
    //     if (lines_plotted >= 5) {
    //         break;
    //     }
    // }

    var g_polygons = main.append("svg:g"); 

    var g = main.append("svg:g"); 

    
    // d3.json("polygons.json", function(data) {
    //     g.selectAll("polygon")
    //     .data(data.Polygons)
    //     .enter().append("polygon")
    //     .attr("points",function(d) { 
    //           return d.points.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
    //       .attr("stroke","black")
    //       .attr("stroke-width",2); 
    // });

    // g.selectAll("polygon")
    //     .data([poly])
    //     .enter().append("polygon")
    //     .style("stroke", "crimson")
    //     .text("u")
    //     .attr("fill","IndianRed")
    //     .style("stroke-opacity", "0.5")
    //     .style("fill-opacity", "0.5")
    //     .attr("points",function(d) { 
    //         return d.map(function(d) {
    //             return [x(d.x),y(d.y)].join(",");
    //         }).join(" ");
    //     });    



    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
      .attr("cx", function (d,i) { return x(d[0]); } )
      .attr("cy", function (d) { return y(d[1]); } )
      .attr("fill","#00aaff") 
      .attr("r", 4);


    main.append("text")
        .attr("class","axis__label")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom) + ")")
        .style("text-anchor", "middle")
        .text("F1");


    main.append("text")
        .attr("class","axis__label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("F2");    


    //colors = ["#aaaaff44","palegreen","lightsalmon","lemonchiffon","burlywood","aqua","greenyellow","crimson","crimson","crimson"];
    colors = ["LightCoral","#11aa2244","#22dd8899","#aaaaff44","#b3775223","#2245bc2a","#11bbcc22","#ddbb3422","#33abaa72","#AA235691"];
    //labels = ['u','ε','æ','∧','α','ə','U','i','I','כ'];
    labels = ['u','כ','U','α','∧','ə','æ','ε','I','i'];
    label_positions = [
        [286.7916999201916, 803.5427499306924],
        [570.7796939519067, 782.7896801962197],
        [488.90662410215475, 1147.8386515965512],
        [983.0806065442935, 1241.9380898531538],
        [836.6912957289599, 1475.1226121421876],
        [481.3469894475481, 1529.649342131227],
        [905.5691340782122, 2027.4791561886764],
        [663.4763360387898, 2511.331466132273],
        [434.1899441340782, 2633.5617818303813],
        [278.2730143308234, 2775.5342281363237]
    ]

    for(var i = 0; i < window.polygons.length; i++) {
        var polygon = window.polygons[i];
        var points = polygon.points.map(function(p) {
            return x(p.x) + "," + y(p.y)
        }).join(' ');
        g_polygons.append("polygon")
           .attr("points", points)
           .style("fill", colors[i])
           .style("stroke", "#696969");

        g_polygons.append("text")
            .attr("x", x(label_positions[i][0]))
            .attr("y", y(label_positions[i][1]))
            .attr("font-size", "18px")
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .html(labels[i]);  
    }

    lines_plotted = 0
    for (var i = data.length - 1; i > 0; i--) {
        main.append("line")
            .attr('transform', 'translate(0,0)')
            .style("stroke", "black")
            .attr("stroke-width", 2)
            .attr("x1", x(data[i][0]))
            .attr("y1", y(data[i][1]))
            .attr("x2", x(data[i-1][0]))
            .attr("y2", y(data[i-1][1]));

        lines_plotted += 1;
        if (lines_plotted >= 5) {
            break;
        }
    }


}

