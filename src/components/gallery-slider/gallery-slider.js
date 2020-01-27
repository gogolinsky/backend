/**
 * gallery-slider
 */

import Component from "../../js/lib/component";
import Swiper from "swiper";
import Page from "../page/page";

const classList = {
  el: ".js-gallery-slider",
  backdrop: ".js-gallery-slider-backdrop",
  roll: ".js-gallery-slider-roll",
  list: ".js-gallery-slider-list",
  item: ".js-gallery-slider-item",
  prev: ".js-gallery-slider-prev",
  next: ".js-gallery-slider-next",
  close: ".js-gallery-slider-close",
  download: ".js-gallery-slider-download"
};

const slideTemplate = image =>
  `<li class='gallery-slider__item js-gallery-slider-item'>
    <img src='${image}' class='gallery-slider__image' alt>
  </li>`;

class GallerySlider extends Component {
  init() {
    this.swiper = new Swiper(this.$roll[0], {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      speed: 1000,
      wrapperClass: classList.list.substr(1),
      slideClass: classList.item.substr(1),
      navigation: {
        prevEl: this.$prev[0],
        nextEl: this.$next[0]
      }
    });
  }
  events() {
    this.$backdrop.on("click", () => this.hide());
    this.$close.on("click", () => this.hide());
    Page.onEscPress(() => this.hide());
    this.swiper.on("slideChange", () => {
      const index = this.swiper.activeIndex;
      const image = this.images[index];
      this.setDownloadLink(image);
    });
  }
  show() {
    Page.bodyOverflowEnable();
    this.$el.show();
  }
  hide() {
    Page.bodyOverflowDisable();
    this.$el.hide();
    this.removeSlides();
    this.removeDownloadLink();
  }
  addSlides(slides) {
    this.swiper.appendSlide(slides);
  }
  removeSlides() {
    this.swiper.removeAllSlides();
  }
  open(images, current = 0) {
    const slides = images.map(image => slideTemplate(image));

    this.images = images;

    this.addSlides(slides);
    this.show();
    this.setDownloadLink(images[current]);

    this.swiper.slideTo(current, 0);
    this.swiper.update();
  }
  setDownloadLink(url) {
    this.$download.attr("href", url);
  }
  removeDownloadLink() {
    this.$download.attr("href", "");
  }
}

export default Component.mount(GallerySlider, {
  name: "GallerySlider",
  classList,
  singleton: true,
  state: {}
});
