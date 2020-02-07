/**
 * company-history
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

export default Vue.component('company-history', {
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
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        parallax: true,
        speed: 600,
        autoHeight: true,
        wrapperClass: this.$refs.sliderList.classList[0],
        slideClass: this.$refs.sliderItem.classList[0],
        navigation: {
          prevEl: this.$refs.prev,
          nextEl: this.$refs.next
        }
      },
      roll: {
        slidesPerView: 3,
        direction: 'vertical',
        spaceBetween: 16,
        mousewheel: true,
        speed: 600,
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
