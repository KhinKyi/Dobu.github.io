var users = localStorage.getItem("users");
$(function () {

});

// Registration - Collect it in an array 
// Store the array in local storage as json object 
function formValidation() {
    // Get the HTML elements
    var userId = GetUserID();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var emailfilter = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (!emailfilter.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var gender = document.getElementById("gender").value;
    var membership = document.getElementById("member").value;

    var userObj = {
        "id": userId,
        "name": name,
        "email": email,
        "gender": gender,
        "dateOfBirth": dateOfBirth,
        "member": member
       
    };

    addUserDataToLocalStorage(userObj);

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('dateOfBirth').value = "";
   
    return true;
}

function GetUserID() {
    const ID = Date.now();
    return ID;
}

function addUserDataToLocalStorage(userObj) {

    //already has data in localstorage then update it other create new one
    var users = JSON.parse(localStorage.getItem('userData'));
    if (users != null) {
        users.push(userObj);

        localStorage.setItem('userData', JSON.stringify(users));
    }
    else {
        var userData = new Array();
        userData.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userData));

    }
}