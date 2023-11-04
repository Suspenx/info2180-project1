/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter .container form"); // Select the form by its class
    var messageDiv = document.querySelector(".newsletter .container .message"); // Select the message div by its class

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var emailInput = form.querySelector("input[name='email']");
        var userEmail = emailInput.value;

        messageDiv.textContent = userEmail
            ? "Thank you! Your email address " + userEmail + " has been added to our mailing list!"
            : "Please enter a valid email address.";

        emailInput.value = ""; // reset
    });
});