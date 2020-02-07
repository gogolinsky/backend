/**
 * example-showcase
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

export default Vue.component('example-showcase', {
  data() {
    return {
      ready: false,
      slider: null,
      roll: null
    };
  },
  methods: {},
  mounted() {
    const options = {
      leftSlider: {
        parallax: true,
        mousewheel: true,
        allowTouchMove: false,
        speed: 700,
        slideActiveClass: 'is-active',
        wrapperClass: this.$refs.leftSliderList.classList[0],
        slideClass: this.$refs.leftSliderItem.classList[0],
        navigation: {
          prevEl: this.$refs.prev,
          nextEl: this.$refs.next
        }
      },
      rightSlider: {
        parallax: true,
        allowTouchMove: false,
        speed: 700,
        slideActiveClass: 'is-active',
        wrapperClass: this.$refs.rightSliderList.classList[0],
        slideClass: this.$refs.rightSliderItem.classList[0]
      }
    };

    Promise.all([
      getSwiper(this.$refs.leftSlider, options.leftSlider),
      getSwiper(this.$refs.rightSlider, options.rightSlider)
    ]).then(([leftSlider, rightSlider]) => {
      this.leftSlider = leftSlider;
      this.rightSlider = rightSlider;
      this.ready = true;

      this.leftSlider.on('slideChange', () => {
        this.rightSlider.slideTo(this.leftSlider.activeIndex);
      });

      this.rightSlider.on('slideChange', () => {
        this.leftSlider.slideTo(this.rightSlider.activeIndex);
      });
    });
  }
});
