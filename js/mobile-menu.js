(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-button-open]'),
    closeModalBtn: document.querySelector('[data-header-button-close]'),
    mobile: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobile.classList.toggle('is-open');
  }
})();
