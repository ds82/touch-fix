(function(window, document) {

  var $body = document.getElementsByTagName('body')[0];
  var CLASS_NAME = 'input-has-focus';

  function hasTouch() {
    // ripped of https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
    return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
  }

  function fakeScroll() {
    setTimeout(function() {
      window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
    }, 0);
  }

  function isInput(element) {
    var tag = (element.tagName || element.nodeName || '').toLowerCase();
    return (tag === 'input' || tag === 'textarea');
  }

  function onFocus() {
    $body.classList.add(CLASS_NAME);
    fakeScroll();
  }

  function onBlur() {
    $body.classList.remove(CLASS_NAME);
    fakeScroll();
  }

  if (hasTouch()) {
    document.addEventListener('focus', onFocus, true);
    document.addEventListener('blur', onBlur, true);
  }

})(window, document);
