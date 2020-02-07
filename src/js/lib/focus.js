export default {
  init() {
    let isClicked = false;

    document.addEventListener("mousedown", e => {
      isClicked = true;
      document.addEventListener("mouseup", function mouseupHandler(e) {
        isClicked = false;
        document.removeEventListener("mouseup", mouseupHandler);
      });
    });

    document.addEventListener("click", e => {
      e.target.classList.remove("is-focused");
    });

    document.addEventListener("focusin", e => {
      if (!isClicked) {
        e.target.classList.add("is-focused");
      }
    });

    document.addEventListener("focusout", e => {
      e.target.classList.remove("is-focused");
    });
  }
};
