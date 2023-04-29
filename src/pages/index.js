import '../pages/index.css';

import {
    initialCards,
    settings,
    profileButton,
    buttonAddElement,
    elementTemplate,
    config,
    formEditProfileForm,
    formAddCardForm
} from '../scripts/utils/constants.js';

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';

import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

const profileValidation = new FormValidator(settings, formEditProfileForm);
const cardValidation = new FormValidator(settings, formAddCardForm);

profileValidation.enableValidation();
cardValidation.enableValidation();

function createCard(item) {
    return new Card(item, elementTemplate, () =>
        popupOpenImage.open(item)
    ).getCard()
};

function setFormValues(value) {
    userInfo.setUserInfo(value.name, value.career)
    classEditPopup.close()
};

const userInfo = new UserInfo({
    titleSelector: ".profile__title",
    subtitleSelector: ".profile__subtitle",
});

function openEditProfile() {
    const data = userInfo.getUserInfo();
    classEditPopup.setInputValues(data);
    profileValidation.hideError();
    classEditPopup.open();
};

function popupAddCard() {
    cardValidation.hideError()
    classCardPopup.open()
};

const classEditPopup = new PopupWithForm(
    config.popupEdit,
    setFormValues
);
classEditPopup.setEventListeners();

const cardSection = new Section(
    {
        renderer: (item) => cardSection.addItem(createCard(item)),
    },
    ".elements__list"
);

const classCardPopup = new PopupWithForm(
    config.popupAddCard,
    (item) => {
        cardSection.addItem(createCard(item))
        classCardPopup.close()
    }
);

classCardPopup.setEventListeners();

const popupOpenImage = new PopupWithImage(config.popupImage);
popupOpenImage.setEventListeners();

profileButton.addEventListener('click', () => openEditProfile());
buttonAddElement.addEventListener('click', () => popupAddCard());

cardSection.rendererItems(initialCards);




