/**
 * drop-menu
 */

import Vue from "vue/dist/vue.common";
import { directive as onClickaway } from "vue-clickaway";

export default Vue.component("drop-menu", {
  data() {
    return {
      opened: false
    };
  },
  directives: {
    onClickaway
  },
  methods: {
    close() {
      if (this.opened) {
        this.opened = false;
      }
    },
    open() {
      if (!this.opened) {
        setTimeout(() => {
          this.opened = true;
        }, 1);
      }
    }
  }
});
