const form = document.querySelector('.form');
const inputs = document.querySelectorAll('#e-mail, #last-name, #first-name');

const modalSuccess = document.querySelector('.modal--success');
const modalBtnSuccess = document.querySelector('.modal__btn--success');

if (modalSuccess) {
  modalBtnSuccess.addEventListener('click', function(e) {
    e.preventDefault();
    modalSuccess.classList.add('modal--close');
  })
}

const modalFailure = document.querySelector('.modal--failure');
const modalBtnFailure = document.querySelector('.modal__btn--failure');

if (modalFailure) {
  modalBtnFailure.addEventListener('click', function(e) {
    e.preventDefault();
    modalFailure.classList.add('modal--close');
  })
}

if (form) {
  form.noValidate = true;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    inputs.forEach((el) => {
      el.classList.remove('invalid-input');
      if (!el.validity.valid) {
        valid = false;
        el.classList.add('invalid-input');
      }
    });

    if (valid) {
      modalSuccess.classList.remove('modal--close');
    } else {
      modalFailure.classList.remove('modal--close');
    }
  })
}
