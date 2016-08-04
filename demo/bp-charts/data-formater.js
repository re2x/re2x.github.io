function formatLegendValue(name, color, value, ext) {
    var tmp = formatValue(name, color, value, ext);
    return '<span style="color:' + color + '">' +
        name + '</span> <b>' + tmp + '</b><br/>';
}

function formatValue(name, color, value, ext) {
    var tmp = '<span style="color:' + color + '">' + value + '</span>';
    ;
    var warnColor = "#F00000";
    if (name == "舒张压") {
        //TODO:实现完整算法
        if (value < 60) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        } else if (value > 90) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    } else if (name == "收缩压") {
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
    } else if (name == "尿酸") {
        // 男性0.149—0.416mmol/L
        // 女性0.089—0.357mmol/L
        if (ext == "男性") {
            if (value < 0.149) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 0.416) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "男性") {
            if (value < 0.089) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 0.357) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        }
    } else if (name == "总胆固醇") {
        // 0.29-5.2
        if (value < 0.29) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        } else if (value > 5.2) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    } else if (name == "血氧饱和度") {
        // 95%—98%
        if (value < 0.95) {
            tmp = '<span style="color:' + warnColor + '">' + formatBo(value) + '↓</span>';
        } else if (value > 0.98) {
            tmp = '<span style="color:' + warnColor + '">' + formatBo(value) + '↑</span>';
        }
        tmp += '  脉搏' + ext;
    } else if (name == "BMI值") {
        // 18.5-24.99
        if (value < 18.5) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
        } else if (value > 24.99) {
            tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
        }
    } else if (name == "体温") {
        // 0-2岁 36.4-38.0℃
        // 3-10岁 36.1-37.8℃
        // 11-65岁 35.9-37.6℃
        // 65岁以上 35.8-37.5℃
        if (ext == "0-2岁") {
            if (value < 36.4) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 38.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "3-10岁") {
            if (value < 36.1) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 37.8) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "11-65岁") {
            if (value < 35.9) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 37.6) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "65岁以上") {
            if (value < 35.8) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 37.5) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        }
    } else if (name == "血红蛋白") {
        // 男性年龄≥18 12.0-16.0g/dL
        // 女性年龄≥18 11.0-15.0g/dL
        // 新生儿年龄0-1 17.0-20.0g/dL
        // 青少年年龄1＜18 11.0-16.0g/dL
        if (ext == "男性年龄≥18") {
            if (value < 12.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 16.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "女性年龄≥18") {
            if (value < 11.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 15.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "新生儿年龄0-1") {
            if (value < 17.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 20.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
        } else if (ext == "青少年年龄1＜18") {
            if (value < 11.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↓</span>';
            } else if (value > 16.0) {
                tmp = '<span style="color:' + warnColor + '">' + value + '↑</span>';
            }
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

function formatBo(value) {
    return Math.floor(value * 100) + "%";
}