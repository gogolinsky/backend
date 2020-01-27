/**
 * totop
 */

import Component from "../../js/lib/component";

const classList = {
  el: ".js-totop"
};

export default class ToTop extends Component {
  init() {
    this.handle();
  }
  events() {
    this.$window.on("scroll", () => this.handle());
  }
  handle() {
    const element = this.$el.get(0);
    const metrics = element.getBoundingClientRect();
    const top = metrics.top;

    if (!this.visible && top < 100) this.visible = true;
    if (this.visible && top > -100) this.visible = false;
  }
  get visible() {
    return this.get("visible");
  }
  set visible(state) {
    this.$el[state ? "addClass" : "removeClass"]("is-visible");
    this.set({ visible: state });
  }
}

Component.mount(ToTop, {
  name: "ToTop",
  classList,
  state: {
    visible: false
  }
});
