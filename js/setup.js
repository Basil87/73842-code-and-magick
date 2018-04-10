'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var personsArr = [];

var findRandomElem = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

for (var i = 0; i < 4; i++) {
  personsArr[i] = {
    name: findRandomElem(firstName) + ' ' + findRandomElem(secondName),
    coatColor: findRandomElem(coatColor),
    eyesColor: findRandomElem(eyesColor)
  }
}

var createPerson = function (person) {

  var temp = document.querySelector('#similar-wizard-template');
  var elem = temp.content.cloneNode(true);

  elem.querySelector('.setup-similar-label').textContent = person.name;
  elem.querySelector('.wizard-coat').style.fill = person.coatColor;
  elem.querySelector('.wizard-eyes').style.fill = person.eyesColor;

  return elem;
};

var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup-similar');

for (i = 0; i < personsArr.length; i++) {
  fragment.appendChild(createPerson(personsArr[i]));
}

setup.appendChild(fragment);
setup.classList.remove('hidden');
