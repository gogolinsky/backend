/**
 * page-tabs
 */

import Vue from 'vue/dist/vue.common';
import Swiper from 'swiper';

export default Vue.component('page-tabs', {
  data() {
    return {
      ready: false
    };
  },
  methods: {
    goto(e) {
      const target = e.target;
      const index = Number(target.dataset.tabIndex);

      this.swiper.slideTo(index);
      this.setActiveToggle(index);
    },
    setActiveToggle(activeIndex) {
      const toggles = this.$refs.toggles.children;

      Array.prototype.forEach.call(toggles, (toggle, index) => {
        const action = index === activeIndex ? 'add' : 'remove';
        toggle.classList[action]('is-active');
      });
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      parallax: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoHeight: true,
      allowTouchMove: false,
      speed: 600,
      wrapperClass: this.$refs.list.classList[0],
      slideClass: this.$refs.item.classList[0],
      on: {
        init: () => {
          this.ready = true;
        }
      }
    });
  }
});
