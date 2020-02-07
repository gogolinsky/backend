/**
 * gallery
 */

import Component from "../../js/lib/component";
import GallerySlider from "../gallery-slider/gallery-slider";

const classList = {
  el: ".js-gallery",
  item: ".js-gallery-item",
  image: ".js-gallery-image"
};

export default class Gallery extends Component {
  events() {
    this.$image.on("click", e => {
      e.preventDefault();

      const $target = $(e.currentTarget);
      const index = this.getIndex($target);
      const images = this.$image
        .map((i, image) => $(image).attr("href"))
        .toArray();

      GallerySlider.open(images, index);
    });
  }
  getIndex($target) {
    return $target.closest(this.$item).index();
  }
}

Component.mount(Gallery, {
  name: "Gallery",
  classList,
  state: {}
});
