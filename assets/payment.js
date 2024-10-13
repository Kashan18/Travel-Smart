function paymentForm(event) {
    event.preventDefault(); // Prevent form submission
    let fullName = document.getElementById('fname').value;
    let emailAddr = document.getElementById('email').value;
    let address = document.getElementById('adr').value;
    let cardName = document.getElementById('cname').value;
    let creditNumber = document.getElementById('ccnum').value;
    let cvv = document.getElementById('cvv').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let expMonth = document.getElementById('expmonth').value;
    let expYear = document.getElementById('expyear').value;



    const stateRegex = /^[A-Za-z\s]{5,50}$/;
    const cityRegex = /^[A-Za-z\s]{2,50}$/;
    const expMonthRegex = /^(0[1-9]|1[0-2])$/; 
    const expYearRegex = /^\d{4}$/; 

    let isValid = true;

    // VALIDATION RULES
    const fullNameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /^.{10,100}$/; // Adjusted to allow any characters
    const cardNameRegex = /^[A-Za-z\s]{2,50}$/;
    const creditNumberRegex = /^\d{13,16}$/; // Adjust this based on the expected format
    const cvvRegex = /^\d{3}$/;

    // Reset all error messages
    document.querySelectorAll('.error-message').forEach(any => {
        any.style.display = 'none';
    });

    // Name Validation
    if (!fullName) {
        document.getElementById('fnameError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your name";
        document.getElementById('fnameError').style.display = 'block';
        isValid = false;
    } else if (!fullNameRegex.test(fullName)) {
        document.getElementById('fnameError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid name";
        document.getElementById('fnameError').style.display = 'block';
        isValid = false;
    }

    // Email Validation
    if (!emailAddr) {
        document.getElementById('emailError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your email";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(emailAddr)) {
        document.getElementById('emailError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid email";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Address Validation
    if (!address) {
        document.getElementById('addressError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your address";
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    } else if (!addressRegex.test(address)) {
        document.getElementById('addressError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid address";
        document.getElementById('addressError').style.display = 'block';
        isValid = false;
    }

    // Card Name Validation
    if (!cardName) {
        document.getElementById('cnameError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter the name on the card";
        document.getElementById('cnameError').style.display = 'block';
        isValid = false;
    } else if (!cardNameRegex.test(cardName)) {
        document.getElementById('cnameError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid name on card";
        document.getElementById('cnameError').style.display = 'block';
        isValid = false;
    }

    // Credit Card Number Validation
    if (!creditNumber) {
        document.getElementById('ccnumError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your credit card number";
        document.getElementById('ccnumError').style.display = 'block';
        isValid = false;
    } else if (!creditNumberRegex.test(creditNumber)) {
        document.getElementById('ccnumError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid credit card number";
        document.getElementById('ccnumError').style.display = 'block';
        isValid = false;
    }

    // CVV Validation
    if (!cvv) {
        document.getElementById('cvvError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your CVV";
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    } else if (!cvvRegex.test(cvv)) {
        document.getElementById('cvvError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid CVV";
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    }

    // state
    if (!state) {
        document.getElementById('stateError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your state";
        document.getElementById('stateError').style.display = 'block';
        isValid = false;
    } else if (!stateRegex.test(state)) {
        document.getElementById('stateError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid state";
        document.getElementById('stateError').style.display = 'block';
        isValid = false;
    }


// city
    if (!city) {
        document.getElementById('cityError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter your city";
        document.getElementById('cityError').style.display = 'block';
        isValid = false;
    } else if (!cityRegex.test(city)) {
        document.getElementById('cityError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid city";
        document.getElementById('cityError').style.display = 'block';
        isValid = false;
    }
    else{

    }

    // exp month
    if (!expMonth) {
        document.getElementById('expmonthError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter expiration month";
        document.getElementById('expmonthError').style.display = 'block';
        isValid = false;
    } else if (!expMonthRegex.test(expMonth)) {
        document.getElementById('expmonthError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid expiration month";
        document.getElementById('expmonthError').style.display = 'block';
        isValid = false;
    }

    // exp year
    if (!expYear) {
        document.getElementById('expyearError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Please enter expiration year";
        document.getElementById('expyearError').style.display = 'block';
        isValid = false;
    } else if (!expYearRegex.test(expYear)) {
        document.getElementById('expyearError').innerHTML = "<i style='font-size: 12px;' class='fas fa-exclamation-triangle'></i> Invalid expiration year";
        document.getElementById('expyearError').style.display = 'block';
        isValid = false;
    }


    if (isValid) {
        window.location.href = "welcome.html"; 
    }


    return isValid;
   
   
}
