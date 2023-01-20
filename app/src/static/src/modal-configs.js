import $ from 'jquery';

$.modal.defaults = {
  closeExisting: true,
  escapeClose: true,
  clickClose: true,
  closeText: 'Close',
  closeClass: '',
  modalClass: "modal",
  blockerClass: "jquery-modal",
  spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
  showSpinner: true,
  showClose: true,
  fadeDuration: 150,   // Number of milliseconds the fade animation takes.
  fadeDelay: 1.0        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
};
