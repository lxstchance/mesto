import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._zoomImage = this._popup.querySelector('.popup__image');
        this._zoomText = this._popup.querySelector('.popup__text');
    }

    open = (item) => {
        this._zoomText.textContent = item.name;
        this._zoomImage.src = item.link;
        this._zoomImage.alt = `Фотография: ${item.name}`;

        super.open();
    }
}