export const profileButton = document.querySelector('.profile__edit-button');
export const buttonAddElement = document.querySelector('.profile__add-button');
export const buttonCloseList = document.querySelectorAll('.popup__close-btn');

export const popupEdit = document.querySelector('.popup_type_edit');
export const popupElements = document.querySelector('.popup_type_new-element');
export const popupImage = document.querySelector('.popup_type_image');

export const formEditProfileForm = document.querySelector('.popup__inner');
export const nameInput = formEditProfileForm.querySelector('#input-name');
export const careerInput = formEditProfileForm.querySelector('#input-career');
export const profileName = document.querySelector('.profile__title');
export const profileCareer = document.querySelector('.profile__subtitle');

export const elementsContainer = document.querySelector('.elements__list');

export const formAddCardForm = popupElements.querySelector('.popup__inner');
export const formTitle = popupElements.querySelector('.popup__name');
export const formSrc = popupElements.querySelector('.popup__link');
export const bigImage = popupImage.querySelector('.popup__image');
export const bigText = popupImage.querySelector('.popup__text');


export const initialCards = [
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

export const settings = {
    formSelector: `.popup__inner`, //form
    inputSelector: `.popup__input`, //input
    submitButtonSelector: `.popup__submit-btn`, //кнопка
    inactiveButtonClass: `popup__submit-btn_inactive`, // неактивная кнопка
    inputErrorClass: `popup__input_type_error`, //input-error
    errorClass: `popup__input-error_active`, //span-error
};

export const config = {
    selectorCardList: '.elements__list',
    selectorTemplateCard: '.element-template',
};