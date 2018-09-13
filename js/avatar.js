'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var dragged = 0;
  
  var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');
  
  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();
    
    var matches = FILE_TYPES.some(function (it) {
     return fileName.endsWith(it);
    });
    
    if (matches) {
      var reader = new FileReader();
      
      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });
      
      reader.readAsDataURL(file);
    }
  });

  fileChooser.addEventListener('mousedown', function () {
    dragged = 0;
  });

  fileChooser.addEventListener('mousemove', function () {
    dragged++;
  });

  fileChooser.addEventListener('click', function (e) {
    if (dragged > 5) {
      e.preventDefault();
      dragged = 0;
    }
  });
})();