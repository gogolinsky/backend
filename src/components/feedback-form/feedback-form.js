/**
 * feedback-form
 */

import Vue from "vue/dist/vue.common";
import vInput from "../v-input/v-input";
import vTextarea from "../v-textarea/v-textarea";
import { ValidationObserver } from "vee-validate";

export default Vue.component("feedback-form", {
  components: {
    vInput,
    vTextarea,
    ValidationObserver
  },
  methods: {
    onsubmit(e) {
      this.$refs.observer.validate().then(valid => {
        if (!valid) e.preventDefault();
      });
    }
  }
});
