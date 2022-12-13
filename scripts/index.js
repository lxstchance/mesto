const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.edit-form__close-btn');
const editForm = document.querySelector('.edit-form');

function openForm() {
    editForm.classList.remove('edit-form_disabled')
}

function closeForm() {
    editForm.classList.add('edit-form_disabled');
}

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);

editForm.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeForm();
    }
})