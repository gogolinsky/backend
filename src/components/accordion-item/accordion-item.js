/**
 * accordion-item
 */

import Vue from "vue/dist/vue.common";

export default Vue.component("accordion-item", {
  data() {
    return {
      opened: 1
    };
  },
  methods: {
    toggle(id) {
      this.opened = id;

      if (document.querySelector(".js-press-img")) {
        document
          .querySelector(".js-press-img")
          .setAttribute("src", "/img/press-6.gif");
        document
          .querySelector(".js-accordion-header")
          .classList.add("disabled");

        setTimeout(() => {
          document
            .querySelector(".js-press-img")
            .setAttribute("src", "/img/press-5.gif");
          document
            .querySelector(".js-accordion-header")
            .classList.remove("disabled");
        }, 3800);
      }
    }
  }
});
