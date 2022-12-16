const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-btn');
const editForm = document.querySelector('.popup');

function openForm() {
    editForm.classList.remove('popup_disabled')
}

function closeForm() {
    editForm.classList.add('popup_disabled');
}

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);

editForm.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeForm();
    }
})

const submitButton = editForm.querySelector('.popup__submit-btn');
let formName = editForm.querySelector('.popup__name');
let formCareer = editForm.querySelector('.popup__career');
let profileName = document.querySelector('.profile__title');
let profileCareer = document.querySelector('.profile__subtitle');

function changeName() {
    profileName.textContent = formName.value;
    profileCareer.textContent = formCareer.value;
}

submitButton.addEventListener('click', changeName);
submitButton.addEventListener('click', closeForm);