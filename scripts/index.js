const profileButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const popupClose = editPopup.querySelector('.popup__close-btn');
const popupElement = document.querySelector('.popup__inner');
const nameInput = popupElement.querySelector('#input-name');
const careerInput = popupElement.querySelector('#input-career');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');
const elementLike = document.querySelectorAll('.element__heart-button');


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



// Открытие попапа
function openPopup() {
    editPopup.classList.add('popup_opened');
}

function openElementPopup() {
    popupElements.classList.add('popup_opened');
}

function closeElements() {
    popupElements.classList.remove('popup_opened');
}

//Закрытие попапа
function closePopup() {
    editPopup.classList.remove('popup_opened');
}

// Заполнение профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closePopup();
}


const elementsContainer = document.querySelector('.elements__list');
const elementTemplate = document
    .querySelector('.element-template')
    .content
    .querySelector('.element');
const elementButton = document.querySelector('.profile__add-button');

const popupElements = document.querySelector('.popup_type_new-element');
const editElements = document.querySelector('.profile__add-button');
const elementsClose = popupElements.querySelector('.popup__close-btn');
const elementForm = popupElements.querySelector('.popup__inner');
const formTitle = popupElements.querySelector('.popup__name');
const formSrc = popupElements.querySelector('.popup__link');


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
    elementImage.setAttribute('alt', 'Фотография: ' + title);
    addElementEventListener(element);


    closeElements();
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
}



elementForm.addEventListener('submit', submitElement);
renderElement();

editElements.addEventListener('click', openElementPopup);
profileButton.addEventListener('click', openPopup);
elementsClose.addEventListener('click', closeElements);
popupClose.addEventListener('click', closePopup);
popupElement.addEventListener('submit', handleFormSubmit);
