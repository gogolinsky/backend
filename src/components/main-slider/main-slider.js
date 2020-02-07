/**
 * main-slider
 */

import Vue from 'vue/dist/vue.common';
import Swiper from 'swiper';

export default Vue.component('main-slider', {
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      parallax: true,
      effect: 'fade',
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      wrapperClass: this.$refs.list.classList[0],
      slideClass: this.$refs.item.classList[0],
      navigation: {
        prevEl: this.$refs.prev,
        nextEl: this.$refs.next
      },
      on: {
        init: () => {
          this.ready = true;
        }
      }
    });
  }
});
