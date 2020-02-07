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
    }
  },
  mounted() {
    this.opened = this.initial;
  }
});
