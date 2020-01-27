/**
 * scroll
 */

import Component from "./component";
import anime from "animejs";
import $ from "jquery";

class Scroll extends Component {
  init() {
    this.animating = false;
  }
  events() {
    this.$anchors.on("click", e => this.handler(e));
  }
  handler(e) {
    e.preventDefault();

    if (this.animating) return false;

    const $current = $(e.currentTarget);
    const $target = $($current.attr("href"));

    this.to($target);
  }
  to($target, options = {}) {
    if (!$target.length) return;

    this.animating = true;

    const offset = $target.offset().top;
    const targets = $("html, body").get();
    const duration = options.duration || 800;

    anime({
      targets,
      scrollTop: offset,
      duration,
      easing: "easeInOutCubic",
      complete: () => {
        if (options.complete) options.complete();
        this.animating = false;
      }
    });
  }
}

export default Component.mount(Scroll, {
  name: "Scroll",
  singleton: true,
  classList: {
    el: ".js-page",
    anchors: "[data-scroll-to]"
  }
});
