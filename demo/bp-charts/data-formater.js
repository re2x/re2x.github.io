function formatLegendValue(name, color, value) {
    var tmp = value;
    var warnColor = "#F00000";
    if (name == "舒张压") {
        //TODO:实现完整算法
        if (value < 60) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        }else if(value > 90){
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    }
    else if (name == "收缩压") {
        //TODO:实现完整算法
        if (value < 90) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        }else if(value > 140){
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    } else if (name == "心率") {
        //TODO:实现完整算法
        if (value < 60) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        }else if(value > 100){
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    }
    return '<span style="color:' + color + '">' +
        name + '</span> <b>' + tmp + '</b><br/>';
}
