"use strict";

var submit = document.querySelector(".card__button");
var inputNumber = document.querySelectorAll(".card__input");
var cardSubmitted = document.querySelector(".card__state--submitted");
var cardNormal = document.querySelector(".card__state");
var selectedText = document.querySelector(".submitted__illustration--text");
var clicked = false;
var rating = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var value = _step.value;
    value.addEventListener("click", function () {
      cleanValues();
      value.classList.toggle("card__input--selected");
      rating = value.textContent;
    });
  };

  for (var _iterator = inputNumber[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function cleanValues() {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = inputNumber[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;
      value.classList.remove("card__input--selected");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

submit.addEventListener("click", function () {
  if (rating == 0) {
    alert("Please input a valid rating");
  } else {
    cardSubmitted.classList.toggle("card__state--hidden");
    cardNormal.classList.toggle("card__state--hidden");
    selectedText.textContent = "You selected " + rating + " out of 5";
  }
});