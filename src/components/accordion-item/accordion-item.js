/**
 * accordion-item
 */

import Vue from "vue/dist/vue.common";

export default Vue.component("accordion-item", {
  props: {
    initial: {
      default: false
    }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;

      document
        .querySelector(".js-press-img")
        .setAttribute("src", "/img/press2.gif");
      setTimeout(() => {
        document
          .querySelector(".js-press-img")
          .setAttribute("src", "/img/press1.gif");
      }, 2540);
    }
  },
  mounted() {
    this.opened = this.initial;
  }
});
