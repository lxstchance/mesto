// const settings = {
//     formSelector: `.popup__inner`, //form
//     inputSelector: `.popup__input`, //input
//     submitButtonSelector: `.popup__submit-btn`, //кнопка
//     inactiveButtonClass: `popup__submit-btn_inactive`, // неактивная кнопка
//     inputErrorClass: `popup__input_type_error`, //input-error
//     errorClass: `popup__input-error_active`, //span-error
// };


//Добавление ошибки
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
};

//Удаление ошибки
const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
};

//Проверка валидности
const isValid = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }
};

const haveInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    });
};

//Блокировка кнопки
const changeButton = (inputList, buttonElement, settings) => {
    if (haveInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    };
};

const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    changeButton(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, settings);
            changeButton(inputList, buttonElement, settings);
        });
    });
};

const disableButton = (formElement, settings) => {
    const offButton = formElement.querySelector(settings.submitButtonSelector);
    offButton.classList.add(settings.inactiveButtonClass);
    offButton.setAttribute('disable', 'disable');
};

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (event) {
            event.preventDefault();
            disableButton(formElement, settings);
        })
        setEventListeners(formElement, settings);
    });
};

enableValidation(settings);