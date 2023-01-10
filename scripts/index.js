// TODO // 1. Шесть карточек «из коробки»
// При загрузке на странице должно быть 6 карточек, которые добавит JavaScript.
// Их названия и фотографии выберите сами или возьмите готовый массив
// TODO 2. Форма добавления карточки
// Добавьте в проект форму добавления новой карточки.Макет найдёте в «Фигме».
// Сделайте так, чтобы форма открывалась нажатием на кнопку «+» и закрывалась кликом на крестик
// TODO 3.Добавление карточки
// Дайте пользователю возможность добавлять карточки
// TODO 5. Удаление карточки
// Добавьте карточкам иконку удаления.Должно выглядеть как в макете
// TODO 6. Открытие попапа с картинкой
// Настройте просмотр фотографий.Пусть открываются нажатием на картинку и закрываются кликом на крестик
// TODO 7. Плавное открытие и закрытие попапов
// Сделайте так, чтобы все попапы плавно открывались.Пусть проявляются из прозрачности и уходят в неё при закрытии

const profileButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('#edit-popup');
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

const initialCards1 = ['1', '2', '3', '4', '5', '6'];

const elementsContainer = document.querySelector('.elements__list');


function createElement(text) {
    const element =
        ` <li class="element">
            <button class="element__trash-button"></button>
            <img src="" alt="" class="element__image">
            <div class="element__inner">
                <h2 class="element__title">${text}</h2>
                <button class="element__heart-button"></button>
            </div>
        </li>
    `;

    return element;
};

function renderElement() {
    initialCards.forEach(item => {
        const elementHTML = createElement(item.name);
        elementsContainer.innerHTML += elementHTML;
    });
};

renderElement();





//Add like in element
elementLike.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('element__heart-button_active');
    })
});


function openPopup() {
    editPopup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
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


profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupElement.addEventListener('submit', handleFormSubmit);
