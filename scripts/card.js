export default class Card {
    constructor(template, card, openImage) {
        this._template = template;
        this._name = card.name;
        this._link = card.link;
        this._openImage = openImage;
    }

    _getCardFromTemplate() {
        return document
            .querySelector(this._template)
            .content
            .children[0]
            .cloneNode(true);
    }

    _addEventListeners() {
        this._element.querySelector('.element__trash-button').addEventListener('click', this._deleteCard.bind(this));
        this._element.querySelector('.element__heart-button').addEventListener('click', this._likeCard.bind(this));
        this._element.querySelector('.element__image').addEventListener('click', () => this._openImage(this._name, this._link));
    }

    _likeCard() {
        this._element.querySelector('.element__heart-button').classList.toggle('element__heart-button_active')
    }

    _deleteCard() {
        this._element.remove();
    }

    getCard() {
        this._element = this._getCardFromTemplate();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').setAttribute('src', this._link);
        this._element.querySelector('.element__image').setAttribute('alt', `Фотография: ${this._name}`);

        this._addEventListeners();

        return this._element;
    }
}