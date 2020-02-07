/**
 * header-nav
 */

import Vue from "vue/dist/vue.common";
import dropMenu from "../drop-menu/drop-menu";

export default Vue.component("header-nav", {
  components: { dropMenu },
  methods: {
    openDropmenu(e) {
      const target = e.target;
      const index = target.dataset.index;
      const dropmenu = this.$refs[`dropmenu${index}`];

      if (dropmenu) {
        dropmenu.open();
      }
    }
  }
});
