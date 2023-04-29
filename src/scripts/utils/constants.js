const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const settings = {
    formSelector: `.popup__inner`, //form
    inputSelector: `.popup__input`, //input
    submitButtonSelector: `.popup__submit-btn`, //кнопка
    inactiveButtonClass: `popup__submit-btn_inactive`, // неактивная кнопка
    inputErrorClass: `popup__input_type_error`, //input-error
    errorClass: `popup__input-error_active`, //span-error
};

const profileButton = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');

const popupElements = document.querySelector('.popup_type_new-element');
const formEditProfileForm = document.querySelector('.popup__inner');
const formAddCardForm = popupElements.querySelector('.popup__inner');

const elementTemplate = document.querySelector('.element-template').content.querySelector('.element');

const config = {
    popupEdit: '.popup',
    popupAddCard: '.popup_type_new-element',
    popupImage: '.popup_type_image',
};

export {
    initialCards,
    settings,
    profileButton,
    buttonAddElement,
    elementTemplate,
    config,
    formEditProfileForm,
    formAddCardForm
}