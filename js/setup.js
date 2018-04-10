'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var MAGIC_NUMBER = 4;
var wizardsSpecials = [];

var openSetup = function () {
  document.querySelector('.setup').classList.remove('hidden');
};

var findRandomElem = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

var createWizardsSpecials = function (wizardCount) {

  for (var i = 0; i < wizardCount; i++) {
    wizardsSpecials[i] = {
      name: findRandomElem(FIRST_NAME) + ' ' + findRandomElem(SECOND_NAME),
      coatColor: findRandomElem(COAT_COLOR),
      eyesColor: findRandomElem(EYES_COLOR)
    };
  }
};

var createPerson = function (person) {

  var temp = document.querySelector('#similar-wizard-template');
  var elem = temp.content.cloneNode(true);

  elem.querySelector('.setup-similar-label').textContent = person.name;
  elem.querySelector('.wizard-coat').style.fill = person.coatColor;
  elem.querySelector('.wizard-eyes').style.fill = person.eyesColor;

  return elem;
};

var addFragment = function () {
  var fragment = document.createDocumentFragment();
  var similarList = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizardsSpecials.length; i++) {
    fragment.appendChild(createPerson(wizardsSpecials[i]));
  }

  similarList.appendChild(fragment);
};

var openSetupSimilar = function () {

  document.querySelector('.setup-similar').classList.remove('hidden');
}

var initSetup = function () {
  openSetup();
  createWizardsSpecials(MAGIC_NUMBER);
  addFragment();
  openSetupSimilar();
};

initSetup();
