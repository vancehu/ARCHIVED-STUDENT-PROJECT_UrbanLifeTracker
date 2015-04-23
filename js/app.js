var data = [4, 8, 15, 16, 23, 62];
var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 420]);
var y = d3.scale.ordinal().domain(data).rangeBands([0, 120]);
//var chart = d3.select("body").append("svg").attr("class", "chart").attr("width", 420).attr("height", 20 * data.length);
//chart.selectAll("rect").data(data).enter().append("rect").attr("y", y).attr("width", x).attr("height", 20);
//chart.selectAll("text").data(data).enter().append("text").attr("x", x).attr("y", function(d){return y(d) + y.rangeBand() / 2;}).attr("dx", -3).attr("dy", ".35em").attr("text-anchor", "end").text(String);
//var chart = d3.select("body").append("svg").attr("class", "chart").attr("width",440).attr("height", 140).append("g").attr("transform", "translate(10,15)");
//chart.selectAll("line").data(x.ticks(5)).enter().append("line").attr("x1", x).attr("x2", x).attr("y1",0).attr("y2",120).style("stroke", "#ccc");
var data = [4, 8, 15, 16, 23, 42, 8, 15, 16, 23, 42, 8, 15, 16, 23, 42, 8, 15, 16, 23, 42];

var w = 20;
var h = 80;
var x = d3.scale.linear().domain([0, 1]).range([0, w]);
var y = d3.scale.linear().domain([0, 100]).range([0, h]);

var chart = d3.select("body").append("svg").attr("class", "chart").attr("width", w * data.length - 1).attr("height", h);

chart.selectAll("rect").data(data).enter().append("rect").attr("x", function (d, i) {
    return x(i) - .5;
}).attr("y", function (d, i) {
    return h - y(d) -.5;
}).attr("width", w).attr("height", function (d) {
    return y(d);
});

function redraw1() {
    chart.selectAll("rect")
        .data(data)
        .transition()
        .duration(1000)
        .attr("y", function(d) { return h - y(d) - .5; })
        .attr("height", function(d) { return y(d); });
}
setInterval(function(){
    data.push(data.shift());
    redraw1();
},1000)