/**
 * image-gallery
 */

import Vue from 'vue/dist/vue.common';
import Swiper from 'swiper';

const getSwiper = (target, options) => {
  return new Promise(resolve => {
    const swiper = new Swiper(
      target,
      Object.assign(options, {
        on: {
          init: () => {
            setTimeout(() => {
              resolve(swiper);
            }, 0);
          }
        }
      })
    );
  });
};

export default Vue.component('image-gallery', {
  data() {
    return {
      ready: false,
      slider: null,
      roll: null
    };
  },
  methods: {
    clickHandler(e) {
      const target = e.target;
      const items = this.$refs.rollList.children;
      const index = Array.prototype.indexOf.call(items, target);

      this.slider.slideTo(index);
    },
    setCurrentItem(activeIndex) {
      const items = Array.from(this.$refs.rollList.children);

      items.forEach((item, index) => {
        item.classList[activeIndex === index ? 'add' : 'remove']('is-active');
      });
    }
  },
  mounted() {
    const options = {
      slider: {
        parallax: true,
        speed: 1000,
        wrapperClass: this.$refs.sliderList.classList[0],
        slideClass: this.$refs.sliderItem.classList[0],
        navigation: {
          prevEl: this.$refs.prev,
          nextEl: this.$refs.next
        }
      },
      roll: {
        slidesPerView: 6,
        spaceBetween: 20,
        speed: 1000,
        slideActiveClass: 'is-active',
        wrapperClass: this.$refs.rollList.classList[0],
        slideClass: this.$refs.rollItem.classList[0]
      }
    };

    Promise.all([
      getSwiper(this.$refs.slider, options.slider),
      getSwiper(this.$refs.roll, options.roll)
    ]).then(([slider, roll]) => {
      this.slider = slider;
      this.roll = roll;
      this.ready = true;

      this.roll.on('slideChange', () => {
        this.slider.slideTo(this.roll.activeIndex);
      });

      this.slider.on('slideChange', () => {
        this.roll.slideTo(this.slider.activeIndex);
        this.setCurrentItem(this.slider.activeIndex);
      });
    });
  }
});
