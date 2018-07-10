'use strict';
 
var backend = (function () {

  var URL_SEND = 'https://js.dump.academy/code-and-magick';
  var URL_GET = 'https://js.dump.academy/code-and-magick/data';

  // var save = function (data, onLoad, onError) {
  //   console.log('lol');
  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = 'json';

  //   xhr.addEventListener('load', function () {
  //     if (xhr.status === 200) {
  //       onSuccess(xhr.response);
  //     } else {
  //       onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
  //     }
  //   });

  //   xhr.addEventListener('error', function () {
  //     onError('Произошла ошибка соединения');
  //   });

  //   xhr.open('POST', URL_SEND);
  //   xhr.send(data);
  // };

  var load = function (onLoad, onError) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      console.log(xhr.response);
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    
    xhr.open('GET', URL_GET);
    xhr.send();
  };

  return {

    load: load
  }
})();

backend.load();
