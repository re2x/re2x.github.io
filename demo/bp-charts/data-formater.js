function formatLegendValue(name, color, value) {
    var tmp = formatValue(name, color, value);
    return '<span style="color:' + color + '">' +
        name + '</span> <b>' + tmp + '</b><br/>';
}

function formatValue(name, color, value) {
    var tmp = '<span style="color:' + color + '">' + value + '</span>';;
    var warnColor = "#F00000";
    if (name == "舒张压") {
        //TODO:实现完整算法
        if (value < 60) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        } else if (value > 90) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    }
    else if (name == "收缩压") {
        //TODO:实现完整算法
        if (value < 90) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        } else if (value > 140) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    } else if (name == "心率") {
        //TODO:实现完整算法
        if (value < 60) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        } else if (value > 100) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    }
    return tmp;
}

function formatDate(count, index, date) {
    if (index != 0 &&
        //index != count - 1 &&
        count > 7) {
        //大于7天,只显示7个
        var interval = parseInt(Math.ceil(count / 7));
        if (index % interval != 0) {
            return "";
        }
    }
    return date;
}