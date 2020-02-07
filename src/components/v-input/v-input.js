/**
 * v-input
 */

import Vue from 'vue/dist/vue.common';
import { mask } from 'vue-the-mask';
import { ValidationProvider } from 'vee-validate';

export default Vue.component('v-input', {
  props: ['visibleErrors', 'fieldName'],
  data() {
    return {
      value: '',
      focused: false,
      ready: false
    };
  },
  computed: {
    active() {
      return Boolean(this.value.length) || this.focused;
    }
  },
  directives: { mask },
  components: {
    ValidationProvider
  },
  methods: {
    handler(action) {
      this.focused = action === 'focus';
    }
  },
  mounted() {
    if (this.visibleErrors.length) {
      this.$refs.provider.applyResult({
        messages: this.visibleErrors,
        valid: false,
        failedRules: {}
      });
    }

    this.ready = true;
  }
});
