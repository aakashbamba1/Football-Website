var firstName_marked = false;
var phoneNumber_marked = false;
var email_marked = false;
var ageGroup_marked = true;
var desiredTeam_marked = false;
var desired_position_marked = false;
var country_marked = true;
var state_marked = true;
var city_marked = true;



// document.getElementById("submitbtn").disabled=true;

// Validation for FirstName
var InvalidFName = "Invalid First Name";
// let countTyposFname = 0;

function firstNameValidation(event) {
    var firstName = document.getElementById("firstName").value;
    console.log(firstName);
    let countTyposFname = 0;

    for (var i = 0; i < firstName.length; i++) {
        if (firstName.length == 0) {
            document.getElementById("fname-feedback").innerHTML = ``;
        }
        else if ((firstName[i] >= 'a' && firstName[i] <= 'z') || (firstName[i] >= 'A' && firstName[i] <= 'Z')) {
            document.getElementById("fname-feedback").innerHTML = ``;
            firstName_marked = true;
        }
        else {

            document.getElementById("fname-feedback").innerHTML = InvalidFName;
            countTyposFname += 1;
            firstName_marked = false;
        }
    }
    if (countTyposFname > 0) {
        document.getElementById("fname-feedback").innerHTML = InvalidFName;
        firstName_marked = false;
    }
    console.log(firstName_marked);
}

// Validation for LastName
var InvalidLName = "Invalid Last Name";

function lastNameValidation(event) {
    var lastName = document.getElementById("lastName").value;
    console.log(lastName);
    let countTyposLName = 0;

    for (var i = 0; i < lastName.length; i++) {
        if (lastName.length == 0) {
            document.getElementById("lname-feedback").innerHTML = ``;
        }
        else if ((lastName[i] >= 'a' && lastName[i] <= 'z') || (lastName[i] >= 'A' && lastName[i] <= 'Z') || lastName[i] == ' ') {
            document.getElementById("lname-feedback").innerHTML = ``;
        }
        else {

            document.getElementById("lname-feedback").innerHTML = InvalidLName;
            countTyposLName += 1;
        }
    }
    if (countTyposLName > 0) {
        document.getElementById("lname-feedback").innerHTML = InvalidLName;
    }
}

// Email validation

function toggleEmailControl(event) {
    var isSwitched = document.getElementById("flexSwitchForEmail").checked;
    if (isSwitched == true) {
        document.getElementById("email").disabled = false;
    }
    else {
        document.getElementById("email").disabled = true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.includes("@")) {
        email_marked = true;
        document.getElementById("email-feedback").innerHTML = ``;
    }
    else {
        document.getElementById("email-feedback").innerHTML = "Enter valid email";
        email_marked = false;
    }
    console.log(email_marked);
}

//Validate Phone
function validatePhone() {
    var phoneNum = document.getElementById("phno").value;
    if (phoneNum.length > 6 && phoneNum.length < 11) {
        document.getElementById("phonenumber").innerHTML = ``;
        phoneNumber_marked = true;
    }
    else {
        document.getElementById("phonenumber").innerHTML = "Enter valid phone number";
        phoneNumber_marked = false;
    }
    console.log("phno: " + phoneNumber_marked);
}

//Desired Position CHeck
function validate_dpCheck() {
    var x = document.getElementsByName("dpchecks");
    var newvar = 0;
    for (var count = 0; count < x.length; count++) {
        if (x[count].checked == true) {
            newvar += 1;
            desired_position_marked = true;
            document.getElementById("dpchk_notvalid").innerHTML = "";
        }
    }
    if (newvar >= 2) {
        desired_position_marked = true;

        document.getElementById("dpchk_notvalid").innerHTML = "You can select only one option";
        desired_position_marked = true;
    }
    console.log("DP: "+desired_position_marked);
}

function validateDesiredTeam() {
    var CHELSEA = document.getElementById("CHELSEA").checked;
    var MANCHESTER_UNITED = document.getElementById("MANCHESTER UNITED").checked;
    var LIVERPOOL = document.getElementById("LIVERPOOL").checked;
    var BARCELONA = document.getElementById("BARCELONA").checked;
    if (CHELSEA || BARCELONA || MANCHESTER_UNITED || LIVERPOOL) {
        desiredTeam_marked = true;
    }
    console.log("DTMarked: " + desiredTeam_marked);
    // document.getElementById("submitbtn").disabled = false;

}

function locations() {

    var india = document.getElementById("India").value;
    console.log(india);
    if(india == "India")
    {
        country_marked=true;

        document.getElementById("i2").disabled=false;
        document.getElementById("i3").disabled=false;
        // document.getElementById("submitbtn").disabled = false;

    state_marked=true;
    city_marked = true;

    }
    // else{
    //     document.getElementById("submitbtn").disabled = true;

    // }
    console.log(country_marked + " " + state_marked + " " + city_marked);
    canSubmit();

}



function canSubmit() {

    console.log("FNAME " + firstName_marked);
    console.log("PHNO " + phoneNumber_marked);
    console.log("EMAIL " + email_marked);
    console.log("AGP " + ageGroup_marked);
    console.log("DTEAM " + desiredTeam_marked);
    console.log("DPOS " + desired_position_marked);
    console.log("COUNTRY " + country_marked);
    console.log("STATE " + state_marked);
    console.log("CITY " + city_marked);


    if (firstName_marked ==true && phoneNumber_marked ==true && email_marked==true && ageGroup_marked==true && desiredTeam_marked==true && desired_position_marked==true && country_marked==true && state_marked==true && city_marked==true) {
        console.log("User can submit");
        document.getElementById("submitbtn").disabled = false;

    }
}

