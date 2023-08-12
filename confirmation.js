const bookingFullName = localStorage.getItem('full-name');
const selectedDate = localStorage.getItem('booking-Date');
const timeSlots = localStorage.getItem('time-Slots');
const bookingDurationTxt = localStorage.getItem('booking-Duration');
const bookingContactNum = localStorage.getItem('contact-num');
const bookingEmail = localStorage.getItem('user-email');
const bookingGender = localStorage.getItem('gender');

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

document.getElementById("bookingName").innerHTML = bookingFullName;
document.getElementById("bookingDate").innerHTML = selectedDate;
document.getElementById("bookingTimeSlots").innerHTML = timeSlots;
document.getElementById("bookingDuration").innerHTML = bookingDurationTxt;
document.getElementById("bookingContactNo").innerHTML = bookingContactNum;
document.getElementById("bookingEmail").innerHTML = bookingEmail;
document.getElementById("bookingGender").innerHTML = bookingGender;

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

document.getElementById("bookingTotalPayable").innerHTML =`$${totalCharges}`;
