function delegate(element, eventType, selector, fn) {
  element.addEventListener(eventType, (e) => {
    let el = e.target;
    while (!el.matches(selector)) {
      if (el === element) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el)
  })
  return element;
}