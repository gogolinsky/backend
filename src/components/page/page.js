export default {
  breakpoint: {
    lg: 1599,
    xl: 1439,
    l: 1179,
    md: 959,
    m: 767,
    s: 559,
    xs: 320
  },
  keys: {
    ESC: 27
  },
  subscribers: {
    onEscPress: [],
    onClickPastTarget: []
  },
  focusableTags: "a, button, input, textarea, select, textarea, [tabindex='0']",
  init() {
    this.focusableList = document.querySelectorAll(this.focusableTags);

    window.addEventListener("keydown", e => {
      if (e.keyCode === this.keys.ESC) {
        this.subscribers.onEscPress.forEach(fn => {
          fn(e);
        });
      }
    });
  },
  onEscPress(fn) {
    this.subscribers.onEscPress.push(fn);
  },
  bodyOverflowEnable() {
    document.body.style.paddingRight = `${this.getScrollbarWidth()}px`;
    document.body.classList.add("is-overflow");
  },
  bodyOverflowDisable() {
    document.body.removeAttribute("style");
    document.body.classList.remove("is-overflow");
  },
  hasOverflow() {
    return document.body.classList.contains("is-overflow");
  },
  getScrollbarWidth() {
    return window.innerWidth - document.body.clientWidth;
  },
  setFocus(target) {
    this.focusableList.forEach(element => {
      element.setAttribute("tabindex", "-1");
    });

    const elements = target.querySelectorAll(this.focusableTags);

    elements.forEach(element => {
      element.removeAttribute("tabindex");
    });

    if (elements[1]) {
      elements[1].focus();
    }
  },
  blurFocus() {
    this.focusableList.forEach(element => {
      element.setAttribute("tabindex", "0");
    });
  }
};
