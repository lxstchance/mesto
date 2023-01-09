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
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close-btn');
const popupElement = document.querySelector('.popup__inner');
const nameInput = popupElement.querySelector('#input-name');
const careerInput = popupElement.querySelector('#input-career');
const profileName = document.querySelector('.profile__title');
const profileCareer = document.querySelector('.profile__subtitle');
const elementLike = document.querySelectorAll('.element__heart-button');

//Add like in element
elementLike.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('element__heart-button_active');
    })
});


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
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
