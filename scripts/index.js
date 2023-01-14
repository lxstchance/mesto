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




function openPopup() {
    editPopup.classList.add('popup_opened');
}

function closePopup() {
    editPopup.classList.remove('popup_opened');
}

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


function createElement(title, link) {
    const element = elementTemplate.cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    elementTitle.textContent = title;
    elementImage.setAttribute('src', link);
    elementImage.setAttribute('alt', 'Фотография: ' + title);
    return element;
};


function renderElement() {
    initialCards.forEach(item => {
        const elementHTML = createElement(item.name, item.link);
        elementsContainer.append(elementHTML);
    });
};

renderElement();


profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupElement.addEventListener('submit', handleFormSubmit);
