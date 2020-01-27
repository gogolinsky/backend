/**
 * v-textarea
 */

import Vue from "vue/dist/vue.common";
import { ValidationProvider } from "vee-validate";

export default Vue.component("v-textarea", {
  props: ["visibleErrors", "fieldName"],
  data() {
    return {
      value: "",
      focused: false,
      ready: false
    };
  },
  computed: {
    active() {
      return Boolean(this.value.length) || this.focused;
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
    handler(action) {
      this.focused = action === "focus";
    }
  },
  mounted() {
    if (this.visibleErrors.length) {
      this.$refs.provider.applyResult({
        errors: this.visibleErrors,
        valid: false,
        failedRules: {}
      });
    }

    this.ready = true;
  }
});
