var logged = new Boolean(false);
var usr = "none";
var data = "";



var logoutC = function() {
    alert("We hope you come back " + usr + "!");
    logged = false;
}

var validateText = function() {
    var valid = false;
    var fname = $("#FirstName").val();
    var lname = $("#LastName").val();
    var user = $("#UserName").val();
    var email = $("#Email").val();
    var password = $("#Password").val();

    if (fname == "") {
        alert("The field first name is required");
        $("#FirstName").focus();

    } else if (lname == "") {
        alert("The field last name is required");
        $("#LastName").focus();

    } else if (email == "") {
        alert("The field Email is required");
        $("#Email").focus();

    } else if (user == "") {
        alert("The field user is required");
        $("#UserName").focus();

    } else if (password == "") {
        alert("The field password is required");
        $("#Password").focus();

    } else {
        valid = true;
    }

    return valid;

}

var registerCookie = function() {

    var fname = $("#FirstName").val();
    var lname = $("#LastName").val();
    var user = $("#UserName").val();
    var email = $("#Email").val();
    var password = $("#Password").val();
    var myDate = new Date();
    myDate.setFullYear(myDate.getFullYear() + 1);

    document.cookie = "FirstName=" + fname + "; expires=" + myDate.toUTCString();
    document.cookie = "LastName=" + lname + "; expires=" + myDate.toUTCString();
    document.cookie = "UserName=" + user + "; expires=" + myDate.toUTCString();
    document.cookie = "Email=" + email + "; expires=" + myDate.toUTCString();
    document.cookie = "Password=" + password + "; expires=" + myDate.toUTCString();


    alert("Thank you for registering!");

}

var register = function() {
    if (validateText() == true) {

        if (uniqueUser() == true) {

            registerCookie();
            document.location.href = "./Login.html";
        } else {
            alert("User Already Exists ");
        }


    }

}

var uniqueUser = function() {

    var valid = true;
    var savedData = document.cookie;
    var storedUser = "";
    var user = $("#UserName").val();


    var dataArray = savedData.split("; ");

    for (var i = 0; i < dataArray.length; ++i) {
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "UserName") {
            storedUser = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
            if (storedUser == user) {
                valid = false;
            }
        }

    }

    return valid;

}

var checkUser = function() {

    if (usr == "none") {
        var savedData = document.cookie;
        var storedUser, storedPassword;
        var userName = $("#LoginUserName").val();
        var userPassword = $("#LoginPassword").val();
        var dataArray = savedData.split("; ");

        for (var i = 0; i < dataArray.length; ++i) {
            if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "UserName") {
                storedUser = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
            }
            if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "Password") {
                storedPassword = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
            }
        }


        if (userName != "" && userPassword != "") {
            if (userName == storedUser && userPassword == storedPassword) {
                document.cookie = "login=" + encodeURIComponent("successful");

                logged = true;
                usr = userName;
                data = dataArray;
                alert("Welcome Back to our comunity" + usr + "!!");
                document.location.href = "./MyChecklist.html";

            } else {
                window.alert("Incorrect login or password. Please try again.");

            }
        } else {
            alert("Please enter UserName and Password.");
        }

    } else {
        alert("You are already logged in as " + usr);
    }

}

var save = function() {

}