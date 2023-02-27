import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profileButton = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');
const buttonCloseList = document.querySelectorAll('.popup__close-btn');

const popupEdit = document.querySelector('.popup_type_edit');
const popupElements = document.querySelector('.popup_type_new-element');
const popupImage = document.querySelector('.popup_type_image');

const formEditProfileForm = document.querySelector('.popup__inner');
const nameInput = formEditProfileForm.querySelector('#input-name');
const careerInput = formEditProfileForm.querySelector('#input-career');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');

const elementsContainer = document.querySelector('.elements__list');

const formAddCardForm = popupElements.querySelector('.popup__inner');
const formTitle = popupElements.querySelector('.popup__name');
const formSrc = popupElements.querySelector('.popup__link');
const bigImage = popupImage.querySelector('.popup__image');
const bigText = popupImage.querySelector('.popup__text');


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

const config = {
    selectorCardList: '.elements__list',
    selectorTemplateCard: '.element-template',
};

const cardsList = document.querySelector(config.selectorCardList);

const profileValidation = new FormValidator(settings, formEditProfileForm);
const cardValidation = new FormValidator(settings, formAddCardForm);


profileValidation.enableValidation();
cardValidation.enableValidation();



// Открытие попапа
function openPopup(element) {
    profileValidation.hideError();
    cardValidation.hideError();
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupESC);
    element.addEventListener('click', closePopupOverlay);
}

// Zoom карточки
const openImage = (name, link) => {
    bigImage.src = link;
    bigImage.alt = `Фотография: ${name}`;
    bigText.textContent = name;
    openPopup(popupImage);
}

//Закрытие попапа
function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupESC);
    element.removeEventListener('click', closePopupOverlay);
}

//Закрытие через Esc 
function closePopupESC(evt) {
    if (evt.key === `Escape`) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

//Закрытие через оверлей
function closePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}

profileButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
    // profileValidation.hideError();
    openPopup(popupEdit);
});

// Заполнение профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    formEditProfileForm.reset();
    closePopup(popupEdit);
}

//Отрисовка класса
function addAllCard() {
    initialCards.forEach((item) => {
        const newCard = createCard(item);
        cardsList.prepend(newCard);
    });
}

function createCard(item) {
    const newCardElement = new Card(config.selectorTemplateCard, item, openImage);
    const cardElement = newCardElement.getCard();
    return cardElement;
}

//Создание новой карточки
function submitElement(event) {
    event.preventDefault();
    const newCard = {
        name: formTitle.value,
        link: formSrc.value,
    };
    const cardElement = createCard(newCard);
    elementsContainer.prepend(cardElement);
    closePopup(popupElements);
}

formAddCardForm.addEventListener('submit', submitElement);

buttonAddElement.addEventListener('click', () => {
    formAddCardForm.reset();
    openPopup(popupElements);
});

buttonCloseList.forEach(button => {
    const inner = button.closest('.popup');
    button.addEventListener('click', () => closePopup(inner));
})


formEditProfileForm.addEventListener('submit', handleFormSubmitProfile);

addAllCard();