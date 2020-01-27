/**
 * password-field
 */

import Component from "../../js/lib/component";

const classList = {
  el: ".js-password-field",
  input: ".js-password-field-input",
  toggle: ".js-password-field-toggle"
};

export default class PasswordField extends Component {
  init() {
    this.set({
      hidden: this.$input.attr("type") === "password"
    });
  }
  events() {
    this.$toggle.on("click", () => this.toggle());
  }
  toggle() {
    this.hidden = !this.hidden;
  }
  get hidden() {
    return this.get("hidden");
  }
  set hidden(state) {
    this.set({ hidden: state });
    this.$el[state ? "removeClass" : "addClass"]("is-visible");
    this.$input.attr("type", state ? "password" : "text");
  }
}

Component.mount(PasswordField, {
  name: "PasswordField",
  classList,
  state: {}
});
