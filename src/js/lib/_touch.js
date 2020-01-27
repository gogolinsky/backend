import Component, { debounce } from "./component";
import ScrollBooster from "scrollbooster";
import $ from "jquery";

const classList = {
  el: "body",
  targets: ".js-touch"
};

class Touch extends Component {
  init() {
    this.instances = [];
    this.$targets.each((i, element) => {
      this.touch(element.parentNode, element);
    });
    this.instances.forEach(sb => {
      sb.setPosition({ x: 0 });
    });
  }
  events() {
    this.$targets.on("mousedown", () => {
      this.move = 0;
      this.$targets.on("mousemove", () => {
        this.move++;
      });
      this.$targets.one("mouseup", () => {
        this.$targets.off("mousemove");
      });
    });

    this.$targets.on("click", e => {
      if (this.move > 10) {
        e.preventDefault();
      }
    });

    this.$window.on(
      "resize",
      debounce(() => {
        this.instances.forEach(sb => {
          sb.updateMetrics();
          sb.setPosition({ x: 0 });
        });
      }, 200).bind(this)
    );
  }
  touch(viewport, content) {
    viewport.edge = "none";
    this.instances.push(
      new ScrollBooster({
        viewport,
        content,
        mode: "x",
        onUpdate: data => {
          this.setEdge({ content, viewport, data });
          this.setPosition({ content, viewport, data });
        }
      })
    );
  }
  setEdge({ content, viewport, data }) {
    const x = data.position.x;
    const viewportWidth = data.viewport.width;
    const contentWidth = data.content.width;
    const edge = viewport.edge;

    if (viewportWidth + x >= contentWidth) {
      if (edge !== "right") {
        viewport.edge = "right";
        viewport.classList.add("is-right-edge");
      }

      return;
    }

    if (x <= 1) {
      if (edge !== "left") {
        viewport.edge = "left";
        viewport.classList.add("is-left-edge");
      }

      return;
    }

    if (edge !== "none") {
      viewport.classList.remove("is-left-edge");
      viewport.classList.remove("is-right-edge");
    }

    viewport.edge = "none";
  }
  setPosition({ content, viewport, data }) {
    if (data.content.width > data.viewport.width) {
      content.style.transform = `translate(
        ${-data.position.x}px
      )`;

      if (!content.classList.contains("is-touchable")) {
        content.classList.add("is-touchable");
      }
    } else {
      content.style.transform = "translate(0px)";

      if (content.classList.contains("is-touchable")) {
        content.classList.remove("is-touchable");
      }
    }
  }
}

export default Component.mount(Touch, {
  name: "Touch",
  singleton: true,
  state: {},
  classList
});
