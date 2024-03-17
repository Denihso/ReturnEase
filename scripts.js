document.addEventListener("DOMContentLoaded", function() {
    // Event listener for subscription buttons
    var subscriptionButtons = document.querySelectorAll(".subscription-btn");
    subscriptionButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var subscriptionType = button.dataset.subscriptionType;
            var price = button.dataset.price;
            alert("Thank you for subscribing to the " + subscriptionType + " plan for $" + price + "!");
        });
    });

    // Form validation for contact form
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            var nameInput = document.getElementById("name");
            var emailInput = document.getElementById("email");
            var messageInput = document.getElementById("message");
            var isValid = true;

            if (!nameInput.value.trim()) {
                isValid = false;
                alert("Please enter your name.");
            }

            if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
                isValid = false;
                alert("Please enter a valid email address.");
            }

            if (!messageInput.value.trim()) {
                isValid = false;
                alert("Please enter a message.");
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});

// Function to validate email address format
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
