import Card from '../scripts/Card1.js';

const profileButton = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupElements = document.querySelector('.popup_type_new-element');
const popupImage = document.querySelector('.popup_type_image');

const popupCloseEdit = popupEdit.querySelector('.popup__close-btn');
const popupCloseElements = popupElements.querySelector('.popup__close-btn');
const popupCloseImage = popupImage.querySelector('.popup__close-btn');

const formEditProfileForm = document.querySelector('.popup__inner');
const nameInput = formEditProfileForm.querySelector('#input-name');
const careerInput = formEditProfileForm.querySelector('#input-career');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');
const elementLike = document.querySelectorAll('.element__heart-button');

const elementsContainer = document.querySelector('.elements__list');
const elementTemplate = document
    .querySelector('.element-template')
    .content
    .querySelector('.element');

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

const config = {
    selectorCardList: '.elements__list',
    selectorTemplateCard: '.element-template',
};

const handleCardClick = (name, link) => {
    bigImage.src = link;
    bigImage.alt = `Фотография: ${name}`;
    bigText.textContent = name;

    openPopup(popupImage);
}

const cardsList = document.querySelector(config.selectorCardList);

//Отрисовка класса
for (const item of initialCards) {
    const card = new Card(config.selectorTemplateCard, item, handleCardClick);
    const element = card.getCard();
    cardsList.append(element);
}


// Открытие попапа
function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupESC);
    element.addEventListener('click', closePopupOverlay);
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



// Заполнение профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closePopup(popupEdit);
}

//Создание новой карточки
function submitElement(event) {
    event.preventDefault();
    // const newElement = createElement(formTitle.value, formSrc.value);
    addElement(newElement);
    closePopup(popupElements);
}


formAddCardForm.addEventListener('submit', submitElement);

buttonAddElement.addEventListener('click', () => {
    formAddCardForm.reset();
    openPopup(popupElements);
});
profileButton.addEventListener('click', () => {
    formEditProfileForm.reset();
    openPopup(popupEdit);
});

popupCloseEdit.addEventListener('click', () => {
    closePopup(popupEdit);
});
popupCloseElements.addEventListener('click', () => {
    closePopup(popupElements);
});
popupCloseImage.addEventListener('click', () => {
    closePopup(popupImage);
});

formEditProfileForm.addEventListener('submit', handleFormSubmitProfile);