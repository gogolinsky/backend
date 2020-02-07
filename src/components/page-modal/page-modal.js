/**
 * page-modal
 */

import Vue from 'vue/dist/vue.common';
import Page from '../page/page';
import VanillaModal from 'vanilla-modal';

export default Vue.component('page-modal', {
  methods: {
    open(name) {
      this.modal.open(`#modal-${name}`);
    },
    close() {
      this.modal.close();
    }
  },
  mounted() {
    this.modal = new VanillaModal({
      modal: `.${this.$refs.template.classList[0]}`,
      modalInner: `.${this.$refs.inner.classList[0]}`,
      modalContent: `.${this.$refs.content.classList[0]}`,
      loadClass: 'modal-init',
      onBeforeOpen: () => {
        Page.bodyOverflowEnable();
      },
      onClose: () => {
        if (Page.hasOverflow()) {
          Page.bodyOverflowDisable();
          Page.blurFocus();
        }
      },
      onOpen: () => {
        Page.setFocus(this.$refs.template);
      }
    });

    document.addEventListener('click', e => {
      if ('modal' in e.target.dataset) {
        e.preventDefault();
        this.open(e.target.dataset.modal);
      }
    });
  }
});
