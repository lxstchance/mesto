import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, callbackSubmitForm) {
        super(selector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._form = this._popup.querySelector('.popup__inner');
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._submit = this._form.querySelector('.popup__submit-btn');
    }

    _getInputValues() {
        this._values = {};
        this._inputs.forEach((input) => {
            this._values[input.name] = input.value
        })
        // console.log(this._values);
        return this._values;
    }

    setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name]
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this._getInputValues());
        })
    }
}