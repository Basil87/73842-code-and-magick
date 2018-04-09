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
}

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
      element.textContent = text;
  }
  return element;
};

for (var i = 0; i < 4; i++) {
  personsArr[i] = {
    name: findRandomElem(firstName) + ' ' + findRandomElem(secondName),
    coatColor: findRandomElem(coatColor),
    eyesColor: findRandomElem(eyesColor)
  }
}

// var person = {
//   name: findRandomElem(firstName) + ' ' + findRandomElem(secondName),
//   coatColor: findRandomElem(coatColor),
//   eyesColor: findRandomElem(eyesColor)
// }

var createSvg = function (person) {

  var svg = document.createElement('svg');
  svg.classList.add('setup-similar-wizard');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 0 62 86');

  var g = document.createElement('g');
  g.classList.add('wizard');
  svg.appendChild(g);

  var useNames = ['wizard-coat', 'wizard-head', 'wizard-eyes', 'wizard-hands'];

  for (var i = 0; i < useNames.length; i++) {
    var use = document.createElement('use');
    // use.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    use.setAttribute('xlink:href', '#' + useNames[i]);
    use.classList.add(useNames[i]);
    useNames[i] === 'wizard-coat' ? use.style.fill = person.coatColor : useNames[i] === 'wizard-eyes' ? use.style.fill = person.eyesColor : '' ;
    g.appendChild(use);
  }

  return svg;
}

var createPerson = function (person) {
  var listItem = makeElement('div', 'setup-similar-item');

  var content = makeElement('div', 'setup-similar-content');
  listItem.appendChild(content);

  var label = makeElement('label', 'setup-similar-label', person.name);
  listItem.appendChild(label);

  var svgImage = createSvg(person);

  content.appendChild(svgImage);

  return listItem;
};

var similarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

for (var i = 0; i < personsArr.length; i++) {
  fragment.appendChild(createPerson(personsArr[i]));
}

similarList.appendChild(fragment);
var setup = document.querySelector('.setup-similar');
setup.classList.remove('hidden');
