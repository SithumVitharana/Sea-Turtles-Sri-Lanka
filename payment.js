const selectedDate = localStorage.getItem('booking-Date');
const timeSlotsB = localStorage.getItem('time-Slots');
const bookingDurationTxt = localStorage.getItem('booking-Duration');

const adultF = localStorage.getItem('no-Adult-F');
const childF = localStorage.getItem('no-Child-F');
const adultSL = localStorage.getItem('no-Adult-SL');
const childSL = localStorage.getItem('no-Child-SL');
const infant = localStorage.getItem('no-Infant');

const sumAdultF = localStorage.getItem('sum-Adult-F');
const sumChildF = localStorage.getItem('sum-Child-F');
const sumAdultSL = localStorage.getItem('sum-Adult-SL');
const sumChildSL = localStorage.getItem('sum-Child-SL');

const totalCharges = localStorage.getItem('total-Payable');

document.getElementById("bookingDate").innerHTML = selectedDate;
document.getElementById("bookingTimeSlots").innerHTML = timeSlotsB;
document.getElementById("bookingDuration").innerHTML = bookingDurationTxt;

document.getElementById("noAdultF-t").innerHTML = `${adultF} Foreigner Adults`;
document.getElementById("noChildF-t").innerHTML = `${childF} Foreigner Children`;
document.getElementById("noAdultSL-t").innerHTML = `${adultSL} Sri Lankan Adults`;
document.getElementById("noChildSL-t").innerHTML = `${childSL} Sri Lankan Children`;
document.getElementById("noInfants-t").innerHTML = `${infant} infants`

document.getElementById("pAdultF-t").innerHTML = `$${sumAdultF}`
document.getElementById("pChildF-t").innerHTML = `$${sumChildF}`
document.getElementById("pAdultSL-t").innerHTML = `$${sumAdultSL}`
document.getElementById("pChildSL-t").innerHTML = `$${sumChildSL}`
document.getElementById("pInfants-t").innerHTML = `Free`

document.getElementById("totalPrice").innerHTML =`$${totalCharges}`;



const cardInput = document.getElementById('cardNo');
cardInput.addEventListener('input', (eventCN) => {
    const sanitizedValue = eventCN.target.value.replace(/\D/g, '');
    eventCN.target.value = sanitizedValue;
});

const form = document.getElementById('form');
const expiryDate = document.getElementById('expiryDate');
const cvcNo = document.getElementById('cvc');
const nameOnCard = document.getElementById('nameOnCard');
const payAmt = document.getElementById('spanPayAmt');

const bookingCharges = localStorage.getItem('total-Payable');

payAmt.innerHTML = `$${bookingCharges}`

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isFormValidC = validateForm();
  if (isFormValidC) {
      
      window.location.href = 'confirmation.html'
  }
});


form.addEventListener('input', () => {
    const isFormValid = validateForm();
    let continueBtn = document.getElementById('continueBtn');
    continueBtn.disabled = !isFormValid;

});

function validateForm() {
  const cardNumber = cardInput.value.trim();
  const expiryDateB = expiryDate.value.trim();
  const cvc = cvcNo.value.trim();
  const nameOnCardB = nameOnCard.value.trim();

  let cardNoEM = document.getElementById('cardNoEM');
  let expiryDateEM = document.getElementById('expiryDateEM');
  let cvcEM = document.getElementById('cvcEM');
  let nameOnCardEM = document.getElementById('nameOnCardEM');

  // Validate Card Number
  const cardNumberFormat = /^\d{16}$/;
  const isValidCardNumber = cardNumberFormat.test(cardNumber);

  // Validate Expiry Date
  const expiryDateFormat = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const isValidExpiryDate = expiryDateFormat.test(expiryDateB);

  // Validate CVC/CVV
  const cvcFormat = /^\d{3}$/;
  const isValidCVC = cvcFormat.test(cvc);

  // Validate Name on Card
  const isValidNameOnCard = nameOnCardB.length > 0;


  if (!isValidCardNumber) {
    cardNoEM.innerHTML = "Please check your card number..."
  }else{
    cardNoEM.innerHTML = " "
  }

  if (!isValidExpiryDate) {
    expiryDateEM.innerHTML = "Please check your expiry date..."
  }else{
    expiryDateEM.innerHTML = " "
  }

  if (!isValidCVC) {
    cvcEM.innerHTML = "Please check ur cvc/cvv..."
  }else{
    cvcEM.innerHTML = " "
  }

  if (!isValidNameOnCard) {
    nameOnCardEM.innerHTML = "Please enter card holders name..."
  }else{
    nameOnCardEM.innerHTML = " "
  }

  // Return true if all fields are valid
  return isValidCardNumber && isValidExpiryDate && isValidCVC && isValidNameOnCard;

}



