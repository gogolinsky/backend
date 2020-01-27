import Component from "./component";
import "minibarjs";

export default class Scrollbar extends Component {
  init() {
    this.instance = Scrollbar.init(this.$el.get(0));
  }
  reInit() {
    this.destroy();
    this.init();
  }
  update() {
    this.instance.update();
  }
  destroy() {
    Scrollbar.destroy(this.instance);
  }
  static init(element) {
    // @ts-ignore
    return new MiniBar(element, {
      alwaysShowBars: true
    });
  }
  static destroy(instance) {
    instance.destroy();
  }
}

Component.mount(Scrollbar, {
  name: "Scrollbar",
  classList: {
    el: ".js-scrollbar"
  }
});
