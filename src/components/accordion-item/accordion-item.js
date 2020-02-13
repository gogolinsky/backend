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
          .setAttribute("src", "/img/press4.gif");
        setTimeout(() => {
          document
            .querySelector(".js-press-img")
            .setAttribute("src", "/img/press1.gif");
        }, 3000);
      }
    }
  }
});
