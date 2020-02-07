// import $ from "jquery";

export const subscribers = {};

export const $window = $(window);
export const $document = $(document);
export const $body = $(document.body);

export function throttle(fn, delay) {
  let timeout = null;
  let callNow = true;

  return function(...args) {
    const next = () => {
      fn.apply(this, args);
      timeout = null;
    };

    if (callNow) {
      callNow = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, delay);
    }
  };
}

export function debounce(fn, delay) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

export function subscribe(name, fn) {
  if (!subscribers[name]) {
    subscribers[name] = [];
  }

  subscribers[name].push(fn);
}

export function publish(name, data = {}) {
  if (subscribers[name]) {
    subscribers[name].forEach(subscriber => {
      subscriber(data);
    });
  }
}

export function wait(time = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function nextTick(time = 0) {
  return wait(time);
}

function traversal(direction, name) {
  const directions = {
    up: "parents",
    down: "find"
  };

  const _components = Array.from(
    this.$el[directions[direction]]('[class*="js-"]')
  )
    .filter(node => Boolean(node.component))
    .map(item => item.component);

  return name
    ? _components.filter(component => (name ? component.name === name : true))
    : _components;
}

export default class Component {
  constructor(element, options) {
    this.set(options.state);

    this.name = options.name;
    this.classList = options.classList;

    this.$window = $window;
    this.$document = $document;
    this.$body = $body;
    this.$el = $(element);

    for (let element in this.classList) {
      if (element !== "el") {
        this[`$${element}`] = this.$el.find(this.classList[element]);
      }
    }

    $document.ready(() => {
      this.init();
      this.events();

      nextTick().then(() => {
        this.mounted();
      });
    });
  }
  init() {}
  events() {}
  mounted() {}
  parents(name) {
    return traversal.call(this, "up", name);
  }
  childs(name) {
    return traversal.call(this, "down", name);
  }
  set(state) {
    this.state = Object.assign({}, this.state, state);
  }
  get(prop) {
    return prop ? this.state[prop] : this.state;
  }
  set loading(state) {
    this.set({ loading: state });
    this.$el[state ? "addClass" : "removeClass"]("is-loading");
  }
  set ready(state) {
    this.set({ ready: state });
    this.$el[state ? "addClass" : "removeClass"]("is-ready");
  }
  static mount(Constructor, options) {
    const $elements = $(options.classList.el);

    if ($elements.length) {
      const init = element => {
        try {
          return new Constructor(element, options);
        } catch (error) {
          return console.error(error), {};
        }
      };

      if (options.singleton) {
        const element = $elements.get(0);
        const component = init(element);

        element.component = component;

        return component;
      } else {
        return $elements.map((i, element) => {
          element.component = init(element);
        });
      }
    } else {
      return false;
    }
  }
}
