//Obtaining values from Local Storage

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


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value;
    localStorage.setItem('full-name',fullName);

    const contactNum = document.getElementById("contactNo").value;
    localStorage.setItem('contact-num', contactNum);

    const gender = document.getElementById("gender").value;
    localStorage.setItem('gender', gender);
 
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;

    if (email === confirmEmail) {
      const verifiedEmail = email;
      localStorage.setItem('user-email', verifiedEmail);
      window.location.href = 'payment.html';
    } else {
      document.getElementById('emailError').innerHTML = "Please ensure that you have entered the email correctly..."
    }
  });

  


