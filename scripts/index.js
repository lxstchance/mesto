const profileButton = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupElements = document.querySelector('.popup_type_new-element');
const popupImage = document.querySelector('.popup_type_image');

const popupCloseEdit = popupEdit.querySelector('.popup__close-btn');
const popupCloseElements = popupElements.querySelector('.popup__close-btn');
const popupCloseImage = popupImage.querySelector('.popup__close-btn');

const popupElement = document.querySelector('.popup__inner');
const nameInput = popupElement.querySelector('#input-name');
const careerInput = popupElement.querySelector('#input-career');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');
const elementLike = document.querySelectorAll('.element__heart-button');

const elementsContainer = document.querySelector('.elements__list');
const elementTemplate = document
    .querySelector('.element-template')
    .content
    .querySelector('.element');

const elementForm = popupElements.querySelector('.popup__inner');
const formTitle = popupElements.querySelector('.popup__name');
const formSrc = popupElements.querySelector('.popup__link');
const bigImage = popupImage.querySelector('.popup__image');
const bigText = popupImage.querySelector('.popup__text');

// Открытие попапа
function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupESC);
}

//Закрытие попапа
function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupESC);
}


//Закрытие через Esc 
function closePopupESC(evt) {
    if (evt.key === `Escape`) {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

// Заполнение профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closePopup(popupEdit);
}


function addElementEventListener(element) {
    const likeButton = element.querySelector('.element__heart-button');
    const deleteButton = element.querySelector('.element__trash-button');
    // Удаление карточки
    const deleteElement = () => {
        element.remove();
    };
    //Добавление лайка
    const addLike = () => {
        likeButton.classList.toggle('element__heart-button_active');
    }
    likeButton.addEventListener('click', addLike);
    deleteButton.addEventListener('click', deleteElement);
}

// Копирование карточки и подставка значений
function createElement(title, link) {
    const element = elementTemplate.cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    elementTitle.textContent = title;
    elementImage.setAttribute('src', link);
    elementImage.setAttribute('alt', `Фотография: ${title}`);

    const openImage = () => {
        bigImage.setAttribute('src', link);
        bigImage.setAttribute('alt', `Фотография: ${title}`);
        bigText.textContent = title;
        openPopup(popupImage);
    };

    elementImage.addEventListener('click', openImage);
    addElementEventListener(element);
    return element;
};

//Порядок добавления карточек
function addElement(element) {
    elementsContainer.prepend(element);
};

// Отрисовка карточек 
function renderElement() {
    initialCards.reverse().forEach(item => {
        const elementHTML = createElement(item.name, item.link);
        addElement(elementHTML);
    });
};

//Создание новой карточки
function submitElement(event) {
    event.preventDefault();
    const newElement = createElement(formTitle.value, formSrc.value);
    addElement(newElement);
    closePopup(popupElements);
}



elementForm.addEventListener('submit', submitElement);
renderElement();

buttonAddElement.addEventListener('click', () => {
    openPopup(popupElements);
});
profileButton.addEventListener('click', () => {
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

popupElement.addEventListener('submit', handleFormSubmitProfile);
