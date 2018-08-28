'use strict';

(function() {

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var wizardElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (e) {
    if (e.target.tagName.toLowerCase() === 'img') {
      draggedItem = e.target.cloneNode(true);
      e.dataTransfer.setData('text/plain', e.target.alt);
      wizardElement.style.outline = '2px solid red';
    }
  });

  wizardElement.addEventListener('dragover', function (e) {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'img' || e.target.firstChild) {
      e.dataTransfer.dropEffect = 'none';
    }
  });

  wizardElement.addEventListener('drop', function (e) {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() !== 'img' || !e.target.firstChild) {
      e.target.style.backgroundColor = '';
      e.target.appendChild(draggedItem);
      wizardElement.style.outline = '';
    }
  });

  wizardElement.addEventListener('dragenter', function (e) {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'img' || e.target.firstChild) {
      e.target.style.backgroundColor = '';
    } else {
      e.target.style.backgroundColor = 'yellow';
    }
  });

  wizardElement.addEventListener('dragleave', function (e) {
    e.preventDefault();
    e.target.style.backgroundColor = '';
  });

  wizardElement.addEventListener('dragstart', function (e) {
    if (e.target.tagName.toLowerCase() === 'img') {
      draggedItem = e.target;
      e.dataTransfer.setData('text/plain', e.target.alt);
      wizardElement.style.outline = '2px solid red';
    }
  });

})();
