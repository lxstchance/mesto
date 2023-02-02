const settings = {
    formSelector: `.popup__inner`, //form
    inputSelector: `.popup__input`, //input
    submitButtonSelector: `.popup__submit-btn`,
    inactiveButtonClass: `popup__submit-btn_inactive`,
    inputErrorClass: `popup__input_type_error`, //input
    errorClass: `popup__input-error_active`, //span
};

const formElement = document.querySelector('.popup__inner');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`); //найти спан

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement)
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__inner'));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};

enableValidation();

// formInput.addEventListener('input', isValid);