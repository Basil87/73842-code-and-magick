'use strict';
(function () {
  var temp = document.querySelector('#similar-wizard-template');

  var createPerson = function (person) {

    var elem = temp.content.cloneNode(true);

    elem.querySelector('.setup-similar-label').textContent = person.name;
    elem.querySelector('.wizard-coat').style.fill = person.colorCoat;
    elem.querySelector('.wizard-eyes').style.fill = person.colorEyes;

    return elem;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(createPerson(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();
