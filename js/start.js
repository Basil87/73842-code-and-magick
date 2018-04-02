var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var barHeight = 150;
var barWidth = 40;
var leftIndent = 30;
var distance = 50;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = "#000";
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура Вы победили!', CLOUD_X + leftIndent, CLOUD_Y + 30);
    ctx.fillText('Список результатов:', CLOUD_X + leftIndent, CLOUD_Y + 50);

    var maxTime = getMaxElement(times);
    for (var i = 0; i < names.length; i++) {
        var specialBlueColor = 'rgba(0, 0, 255, ' + Math.random() + ')';

        ctx.fillStyle = '#000';
        ctx.fillText(names[i], CLOUD_X + leftIndent + (barWidth + distance) * i, CLOUD_Y + 250);
        ctx.fillText(Math.round(times[i]), CLOUD_X + leftIndent + (barWidth + distance) * i, (CLOUD_Y + 220) - (barHeight * times[i]) / maxTime);
        ctx.beginPath();
        ctx.moveTo(CLOUD_X + leftIndent + (barWidth + distance) * i, CLOUD_Y + 230);
        ctx.lineTo(CLOUD_X + leftIndent + barWidth + (barWidth + distance) * i, CLOUD_Y + 230);
        ctx.lineTo(CLOUD_X + leftIndent + barWidth + (barWidth + distance) * i, (CLOUD_Y + 230) - (barHeight * times[i]) / maxTime);
        ctx.lineTo(CLOUD_X + leftIndent + (barWidth + distance) * i, (CLOUD_Y + 230) - (barHeight * times[i]) / maxTime);
        ctx.closePath();

        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = specialBlueColor;
        }

        ctx.fill();
    }
};