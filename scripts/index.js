let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-btn');

function openPopup() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popup.classList.remove('popup_opened');
    }
})

let popupElement = document.querySelector('.popup__container');
let nameInput = popupElement.querySelector('.popup__name');
let careerInput = popupElement.querySelector('.popup__career');
let profileName = document.querySelector('.profile__title');
let profileCareer = document.querySelector('.profile__subtitle');
let popupSaveButton = popupElement.querySelector('.popup__submit-btn');


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
}

popupElement.addEventListener('submit', handleFormSubmit);
popupSaveButton.addEventListener('click', closePopup);