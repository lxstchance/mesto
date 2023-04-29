export default class Card {
    constructor({ name, link }, template, handelCardClick) {
        this._name = name;
        this._link = link;
        this.template = template;
        this.handelCardClick = handelCardClick;

    }

    _likeCard = () => {
        this._like.classList.toggle('element__heart-button_active');
    }

    _deleteCard = () => {
        this.elementCard.remove();
    }

    getCard() {
        this.elementCard = this.template.cloneNode(true);
        this._elementImage = this.elementCard.querySelector('.element__image');
        this._elementText = this.elementCard.querySelector('.element__title');
        this._like = this.elementCard.querySelector('.element__heart-button');
        this._button = this.elementCard.querySelector('.element__trash-button');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementText.textContent = this._name;
        this._addEventListeners();

        return this.elementCard;
    }

    _addEventListeners = () => {
        this._button.addEventListener('click', () => this._deleteCard());
        this._like.addEventListener('click', () => this._likeCard());
        this._elementImage.addEventListener('click', () => {
            this.handelCardClick(this._elementImage, this._elementText);
        })
    }
}