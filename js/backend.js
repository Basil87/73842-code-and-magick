'use strict';

(function () {

  var URL_SEND = 'https://js.dump.academy/code-and-magick1';
  var URL_GET = 'https://js.dump.academy/code-and-magick/data';

  var backend = {

    load: function (onLoad, onError) {

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {

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
    },

    save: function (data, onLoad, onError) {

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
          console.log(xhr.status + ' ' + xhr.statusText);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
          console.log(xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.open('POST', URL_SEND);
      xhr.send(data);
    }
  };

  window.backend = backend;
})();
