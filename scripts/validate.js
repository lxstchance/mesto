export default class FormValidator {
    constructor(settings, formElement) {
        this._setitings = settings;
        this._formElement = formElement;
    }

    _showInputError = (inputElement) => {
        this._errorElement.classList.add(this._setitings.errorClass);
        this._errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._setitings.inputErrorClass);
    };

    _hideInputError = (inputElement) => {
        this._errorElement.classList.remove(this._setitings.errorClass);
        this._errorElement.textContent = '';
        inputElement.classList.remove(this._setitings.inputErrorClass);
    };

    _changeButton() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._setitings.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._setitings.inactiveButtonClass);
            this._buttonElement.disabled = false;
        };
    };

    hideError() {
        this._inputList = Array.from(this._formElementment.querySelectorAll(this._setitings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._setitings.submitButtonSelector);
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
        this._inputList = Array.from(this._formElement.querySelectorAll(this._setitings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._setitings.submitButtonSelector);
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