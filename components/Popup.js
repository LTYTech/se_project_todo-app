class Popup {
  constructor({ popupSelector }) {
    this._popupEl = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupEl.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupEl.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupEl.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => this.close());

    this._popupEl.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_visible")) {
        this.close();
      }
    });
  }
}

export default Popup;
