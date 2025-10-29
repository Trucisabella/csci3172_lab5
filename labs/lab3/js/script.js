users = {
    "Amanda": "AmandaW@2712",
    "Brian": "brIan$01011989",
    "Cindy": "#0812$PrettyCindy",
    "David": "DavidM@12345",
    "Eva": "evaLove@0518"
};

const isValidEmail = ({ email }) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,8}$/;
    return emailPattern.test(email);
}

const isValidUsername = ({ username }) => {
    const usernamePattern = /^[A-Za-z][A-Za-z0-9]*$/;
    return usernamePattern.test(username);
}

const isValidPassword = ({ password }) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{12,}$/;
    return passwordPattern.test(password);
}

const clearErrorMessages = () => {
    document.querySelectorAll("input").forEach(input => input.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(error => error.textContent = "");
}

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrorMessages();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmation").value;

    try {
        if (!isValidEmail({ email })) {
            document.getElementById("email").classList.add("error");
            document.getElementById("emailError").textContent = "Invalid email format!";
        }
        else if (!isValidUsername({ username })) {
            document.getElementById("username").classList.add("error");
            document.getElementById("usernameError").textContent = "Invalid username format!";
        }
        else if (!isValidPassword({ password })) {
            document.getElementById("password").classList.add("error");
            document.getElementById("passwordError").textContent = "Invalid password format!";
        }
        else if (confirmPassword !== password) {
            document.getElementById("confirmation").classList.add("error");
            document.getElementById("confirmationError").textContent = "Passwords do not match!";
        }
        else if (users.hasOwnProperty(username)) {
            document.getElementById("username").classList.add("error");
            document.getElementById("usernameError").textContent = "Username already exists!";
        }
        else {
            users[username] = password;
            console.log(`You’ve been successfully registered! Welcome, ${username}!`);
            alert(`You’ve been successfully registered! Welcome, ${username}!`);
        }
    } catch (error) {
        alert(error.message);
    }
});