'use strict';

(function () {
  
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.setup-user-pic');
  dialogHandle.style.zIndex = 1;

  dialogHandle.addEventListener('mousedown', function (e) {
    e.preventDefault();

    var startCoords = {
      x: e.clientX,
      y: e.clientY
    };

    var onMouseMove = function (moveE) {
      moveE.preventDefault();

      var shift = {
        x: startCoords.x - moveE.clientX,
        y: startCoords.y - moveE.clientY
      };

      startCoords = {
        x: moveE.clientX,
        y: moveE.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upE) {
      upE.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();