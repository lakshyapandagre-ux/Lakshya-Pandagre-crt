function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("errorMsg");

    error.classList.add("d-none");

    if (!email || !password) {
        showError(error, "Please fill in all fields!");
        return;
    }
    if (!email.includes("@")) {
        showError(error, "Please enter a valid email!");
        return;
    }
    alert("Login successful!");
}

function register() {
    var fullname = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("repeatPassword").value;
    var error = document.getElementById("errorMsg");

    error.classList.add("d-none");

    if (!fullname || !username || !email || !gender || !password || !confirm) {
        showError(error, "Please fill in all fields!");
        return;
    }
    if (!email.includes("@")) {
        showError(error, "Please enter a valid email!");
        return;
    }
    if (password.length < 6) {
        showError(error, "Password must be at least 6 characters!");
        return;
    }
    if (password !== confirm) {
        showError(error, "Passwords do not match!");
        return;
    }
    alert("Registration successful! Welcome, " + fullname);
}

function resetPass() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("errorMsg");
    var success = document.getElementById("successMsg");

    error.classList.add("d-none");
    success.classList.add("d-none");

    if (!email) {
        showError(error, "Please enter your email!");
        return;
    }
    if (!email.includes("@")) {
        showError(error, "Please enter a valid email!");
        return;
    }
    success.classList.remove("d-none");
    success.innerText = "Reset link sent to your email!";
    document.getElementById("email").value = "";
}

function showError(element, message) {
    element.classList.remove("d-none");
    element.innerText = message;
}
