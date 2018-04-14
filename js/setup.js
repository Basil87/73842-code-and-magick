'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var numberOfWizards = 4;
var wizardsSpecials = [];

// Events variables

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameInput = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('.setup-wizard');
var wizardEye = wizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var findRandomElem = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

var createWizardsSpecials = function (wizardCount) {

  for (var i = 0; i < wizardCount; i++) {
    wizardsSpecials[i] = {
      name: findRandomElem(FIRST_NAMES) + ' ' + findRandomElem(SECOND_NAMES),
      coatColor: findRandomElem(COAT_COLORS),
      eyesColor: findRandomElem(EYES_COLORS)
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
};

var initSetup = function () {
  createWizardsSpecials(numberOfWizards);
  addFragment();
  openSetupSimilar();
};

initSetup();

// Events actions

var onPopupEscPress = function (e) {
  if (e.keyCode === ESC_KEYCODE && nameInput !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardEye.addEventListener('click', function () {
  var colorEye = findRandomElem(EYES_COLORS);
  var eyeInput = document.querySelector('input[name="eyes-color"]');
  wizardEye.style.fill = colorEye;
  eyeInput.value = colorEye;
});

fireball.addEventListener('click', function () {
  var colorFire = findRandomElem(FIREBALL_COLORS);
  var fireballInput = document.querySelector('input[name="fireball-color"]');
  fireball.style.background = colorFire;
  fireballInput.value = colorFire;
});
