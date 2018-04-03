'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var barHeight = 150;
var barWidth = 40;
var leftIndent = 30;
var distance = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура Вы победили!', x + leftIndent, y + 30);
  ctx.fillText('Список результатов:', x + leftIndent, y + 50);
};

var renderBarChart = function (ctx, times, names, x, y) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], x + leftIndent + (barWidth + distance) * i, y + 250);
    ctx.fillText(Math.round(times[i]), x + leftIndent + (barWidth + distance) * i, (y + 220) - (barHeight * times[i]) / maxTime);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(x + leftIndent + (barWidth + distance) * i, y + 230 - (barHeight * times[i]) / maxTime, barWidth, (barHeight * times[i]) / maxTime);
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, CLOUD_X, CLOUD_Y, '#000');
  renderBarChart(ctx, times, names, CLOUD_X, CLOUD_Y);
};
