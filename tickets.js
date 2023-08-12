const checkboxes = document.querySelectorAll(".ts-cb");

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", function() {
        const label = this.previousElementSibling;
        if (this.checked) {
          label.style.backgroundColor = "rgba(111, 94, 83, 0.4)";
        } else {
          label.style.backgroundColor = "";
        }
      });
    });


document.getElementById("submitButton").addEventListener('click',function(){

  let adultSL = document.getElementById("slAdult").value;
  let childSL = document.getElementById("slChild").value;
  let adultF = document.getElementById("fAdult").value;
  let childF = document.getElementById("fChild").value;
  let infant = document.getElementById("infant").value;
  
  adultSL = Number(adultSL);
  childSL = Number(childSL);
  adultF = Number(adultF);
  childF = Number(childF);
  infant = Number(infant);


  //Guest Fee Calculation
    //Prices
    const normalAdultSL = 4;
    const peakAdultSL = 6;
    const normalAdultF = 10;
    const peakAdultF = 13;
    const normalChildSL = 2;
    const peakChildSL = 3;
    const normalChildF = 5;
    const peakChildF = 8;


    let totalAdultSL = 0;
    let totatAdultF = 0;
    let totalChildSL = 0;
    let totalChildF = 0;

    let totalCharges = 0;

    let sumAdultSL = 0;
    let sumAdultF = 0;
    let sumChildSL = 0;
    let sumChildF = 0;
    
    let timeSlotsB = "";
    let noNormalHrs = 0;
    let noPeakHrs = 0;
    let noDurationHrs = 0;


    if (document.getElementById("7am-8am").checked){
      totalAdultSL = normalAdultSL * adultSL;
      totatAdultF = normalAdultF * adultF;
      totalChildSL = normalChildSL * childSL;
      totalChildF = normalChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noNormalHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "7:00AM - 8:00AM" + "<br />";
    }

    if (document.getElementById("8am-9am").checked){
      totalAdultSL = normalAdultSL * adultSL;
      totatAdultF = normalAdultF * adultF;
      totalChildSL = normalChildSL * childSL;
      totalChildF = normalChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noNormalHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "8:00AM - 9:00AM" + "<br />";
    }

    if (document.getElementById("9am-10am").checked){
      totalAdultSL = normalAdultSL * adultSL;
      totatAdultF = normalAdultF * adultF;
      totalChildSL = normalChildSL * childSL;
      totalChildF = normalChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noNormalHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "9:00AM - 10:00AM" + "<br />";
    }

    if (document.getElementById("10am-11am").checked){
      totalAdultSL = peakAdultSL * adultSL;
      totatAdultF = peakAdultF * adultF;
      totalChildSL = peakChildSL * childSL;
      totalChildF = peakChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noPeakHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "10:00AM - 11:00AM" + "<br />";
    }

    if (document.getElementById("11am-12pm").checked){
      totalAdultSL = peakAdultSL * adultSL;
      totatAdultF = peakAdultF * adultF;
      totalChildSL = peakChildSL * childSL;
      totalChildF = peakChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noPeakHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "11:00AM - 12:00PM" + "<br />";
    }

    if (document.getElementById("12pm-1pm").checked){
      totalAdultSL = peakAdultSL * adultSL;
      totatAdultF = peakAdultF * adultF;
      totalChildSL = peakChildSL * childSL;
      totalChildF = peakChildF * childF;
      
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noPeakHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "12:00PM - 1:00PM" + "<br />";
    }

    if (document.getElementById("1pm-2pm").checked){
      totalAdultSL = normalAdultSL * adultSL;
      totatAdultF = normalAdultF * adultF;
      totalChildSL = normalChildSL * childSL;
      totalChildF = normalChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noNormalHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "1:00PM - 2:00PM" + "<br />";
    }

    if (document.getElementById("2pm-3pm").checked){
      totalAdultSL = normalAdultSL * adultSL;
      totatAdultF = normalAdultF * adultF;
      totalChildSL = normalChildSL * childSL;
      totalChildF = normalChildF * childF;
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noNormalHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "2:00PM - 3:00PM" + "<br />";
    }

    if (document.getElementById("3pm-4pm").checked){
      totalAdultSL = peakAdultSL * adultSL;
      totatAdultF = peakAdultF * adultF;
      totalChildSL = peakChildSL * childSL;
      totalChildF = peakChildF * childF;
      
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noPeakHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "3:00PM - 4:00PM" + "<br />";
    }

    if (document.getElementById("4pm-5pm").checked){
      totalAdultSL = peakAdultSL * adultSL;
      totatAdultF = peakAdultF * adultF;
      totalChildSL = peakChildSL * childSL;
      totalChildF = peakChildF * childF;
      
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noPeakHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "4:00PM - 5:00PM" + "<br />";
    }

    if (document.getElementById("5pm-6pm").checked){
      totalAdultSL = peakAdultSL * adultSL;
      totatAdultF = peakAdultF * adultF;
      totalChildSL = peakChildSL * childSL;
      totalChildF = peakChildF * childF;
      
      
      sumAdultSL = sumAdultSL + totalAdultSL;
      sumAdultF = sumAdultF + totatAdultF;
      sumChildSL = sumChildSL + totalChildSL;
      sumChildF = sumChildF + totalChildF;

      noPeakHrs += 1;
      noDurationHrs += 1;
      timeSlotsB = timeSlotsB + "5:00PM - 6:00PM" + "<br />";
    }

    totalCharges = (sumAdultSL + sumChildSL + sumAdultF + sumChildF);

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
    
    document.getElementById("bookingTimeSlots").innerHTML = timeSlotsB;

    bookingDurationTxt = `${noDurationHrs}Hrs (0${noNormalHrs} Normal : 0${noPeakHrs} Peak)`;
    document.getElementById("bookingDuration").innerHTML = bookingDurationTxt;
    
    const dateInput = document.getElementById("dateInput");
    const selectedDate = dateInput.value;
    document.getElementById("bookingDate").innerHTML = selectedDate;

    
    //Storing values in the local storage

    localStorage.setItem('booking-Date', selectedDate);
    localStorage.setItem('time-Slots', timeSlotsB);
    localStorage.setItem('booking-Duration', bookingDurationTxt);

    localStorage.setItem('no-Adult-F', adultF);
    localStorage.setItem('no-Child-F', childF);
    localStorage.setItem('no-Adult-SL', adultSL);
    localStorage.setItem('no-Child-SL', childSL);
    localStorage.setItem('no-Infant', infant);

    localStorage.setItem('sum-Adult-F', sumAdultF);
    localStorage.setItem('sum-Child-F', sumChildF);
    localStorage.setItem('sum-Adult-SL', sumAdultSL);
    localStorage.setItem('sum-Child-SL', sumChildSL);

    localStorage.setItem('total-Payable', totalCharges);
    
  
  
})

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', function(){

  window.location.href = 'details.html';

});








