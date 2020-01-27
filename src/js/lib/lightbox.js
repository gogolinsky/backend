import Tobi from "@rqrauhvmra/tobi";

export default {
  init() {
    const item = document.querySelector(".lightbox");

    if (item) {
      new Tobi({
        counter: false,
        zoom: false
      });
    }
  }
};
