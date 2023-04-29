export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;

        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    }

    _showInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.add(this._settings.errorClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    };

    _changeButton() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._settings.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
            this._buttonElement.disabled = false;
        };
    };

    hideError() {
        this._changeButton();
        this._inputList.forEach((inputElement) => {
            this._error = this._formElement.querySelector(`.${inputElement.id}-error`);
            this._hideInputError(inputElement);
        });
    };

    _checkInputValidity = (inputElement) => {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners = () => {
        this._changeButton();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._changeButton();
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
}