
/*Welcome message prompt for the user to enter their name and display it on the page */

/*Check if the welcome message element exists*/
const welcomeMessage = document.getElementById("welcome-message");

if (welcomeMessage) {

    let userName = prompt("Welcome to InkIt!\n\n What name has fate bestowed upon thee? :");

    /* If the user leaves it blank or presses Cancel */
    if (userName === null || userName.trim() === "") {
        userName = "Guest";
    }

    welcomeMessage.textContent = `Welcome, ${userName}! May your words become timeless keepsakes.`;
}

/*Form validation for the letter creation form */

const letterForm = document.getElementById("letterForm");

if (letterForm) {

    letterForm.addEventListener("submit", function(event) {

        const sender = document.getElementById("sender").value.trim();
        const recipient = document.getElementById("recipient").value.trim();
        const date = document.getElementById("date").value;
        const theme = document.getElementById("theme").value;

        /*Check each required field*/
        if (sender === "") {
            alert("Please enter your name.");
            event.preventDefault();
            return;
        }

        if (recipient === "") {
            alert("Please enter the recipient's name.");
            event.preventDefault();
            return;
        }

        if (date === "") {
            alert("Please choose a date.");
            event.preventDefault();
            return;
        }

        if (theme === "") {
            alert("Please select a letter theme.");
            event.preventDefault();
            return;
        }

        // If everything is filled
        alert("Form submitted successfully!");

    });

}


/*Letter preview */

const letterText = document.getElementById("letterText");
const previewText = document.getElementById("previewText");

if (letterText && previewText) {

    letterText.addEventListener("input", function() {

        if (letterText.value.trim() === "") {

            previewText.textContent =
            "Your beautifully written letter will appear here...";

        } else {

            previewText.textContent = letterText.value;

        }

    });

}

/* Save confirmation message when the "Save draft" button is clicked */

const saveButton = document.getElementById("saveBtn");

if (saveButton) {

    saveButton.addEventListener("click", function() {

        alert("✓ Your letter has been saved successfully!");

    });

}