'use strict';
(function () {

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Events variables

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var nameInput = setup.querySelector('.setup-user-name');
var fireball = document.querySelector('.setup-fireball-wrap');
var form = setup.querySelector('.setup-wizard-form');

var coatColor;
var eyesColor;
var wizards = [];

var getRank = function (wizard) {
  var rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }

  return rank;
};

var namesComparator = function (left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
}

var updateWizards = function () {
  window.render(wizards.sort(function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  }));
}

window.wizard.onEyesChange = window.debounce(function (color) {
  eyesColor = color;
  updateWizards();
});

window.wizard.onCoatChange = window.debounce(function (color) {
  coatColor = color;
  updateWizards();
});

var findRandomElem = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

var successHandler = function (data) {
  wizards = data;
  updateWizards();
};

var errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

// Events actions

var onPopupEscPress = function (e) {
  if (e.keyCode === ESC_KEYCODE && nameInput !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.style.top = '80px';
  setup.style.left = '50%';
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  backend.load(successHandler, errorHandler);
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

fireball.addEventListener('click', function () {
  var newColor = findRandomElem(FIREBALL_COLORS);
  var fireballInput = document.querySelector('input[name="fireball-color"]');
  this.style.background = newColor;
  fireballInput.value = newColor;
  updateWizards();
});

form.addEventListener('submit', function (e) {
  backend.save(new FormData(form), function (response) {
    closePopup();
  }, function (notResponse) {
    errorHandler(notResponse);
  });
  e.preventDefault();
});

})();
