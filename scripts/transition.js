'use strict';

const submitShipping = document.getElementById('submitShipping');
const paymentButton = document.getElementById('paymentButton');

function setUrl(order) {
  const link1 = './payment.html';
  const link2 = './confirmation.html';
  const newUrl = order === 1 ? link1 : order === 2 ? link2 : './';

  history.pushState({}, null, newUrl);
  location.reload();
}

submitShipping.addEventListener('submit', (event) => {
  event.preventDefault();
  setUrl(1);
});

function submitPayment() {
  setUrl(2);
}

function paymentChosen() {
  paymentButton.classList.remove('disabled');
}
