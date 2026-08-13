
/*  WELCOME MESSAGE */

const welcomeMessage = document.getElementById("welcome-message");

if (welcomeMessage) {

    let userName = prompt(
        "Welcome to InkIt!\n\nWhat name has fate bestowed upon thee?"
    );

    if (userName === null || userName.trim() === "") {
        userName = "Guest";
    }

    welcomeMessage.textContent =
        `Welcome, ${userName}! May your words become timeless keepsakes.`;
}


/*CREATE LETTER*/

const letterForm = document.getElementById("letterForm");

if (letterForm) {

    /* -----------------------------------------
       WORD COUNTER
       ----------------------------------------- */

    const letterText = document.getElementById("letterText");
    const wordCount = document.getElementById("wordCount");

    if (letterText && wordCount) {

        letterText.addEventListener("input", function () {

            const text = letterText.value.trim();

            if (text === "") {

                wordCount.textContent = "Words: 0";

            } else {

                const words = text.split(/\s+/).length;

                wordCount.textContent = `Words: ${words}`;

            }

        });

    }


    /* FORM SUBMISSION  */

    letterForm.addEventListener("submit", function (event) {
      const sender =
            document.getElementById("sender").value.trim();

        const recipient =
            document.getElementById("recipient").value.trim();

        const date =
            document.getElementById("date").value;

        const theme =
            document.getElementById("theme").value;

        const colour =
            document.getElementById("colour").value;

        const font =
            document.getElementById("font").value;

        const letter =
            document.getElementById("letterText").value.trim();


        /*VALIDATION */

        if (sender === "") {

            alert("Please enter your name.");

            return;
        }


        if (recipient === "") {

            alert("Please enter the recipient's name.");

            return;
        }


        if (date === "") {

            alert("Please choose a date.");

            return;
        }


        if (theme === "") {

            alert("Please select a letter theme.");

            return;
        }


        if (letter === "") {

            alert("Please write something in your letter.");

            return;
        }


        /* CREATE LETTER OBJECT */

        const letterData = {

            sender: sender,

            recipient: recipient,

            date: date,

            theme: theme,

            colour: colour,

            font: font || "Lora",

            text: letter

        };

        /* GO TO PREVIEW */

        window.location.href = "display.html";

    });

}


/* DISPLAY LETTER */

const savedLetter = localStorage.getItem("inkItLetter");

if (savedLetter) {

    const letter = JSON.parse(savedLetter);


    const displaySender =
        document.getElementById("displaySender");

    const displayRecipient =
        document.getElementById("displayRecipient");

    const displayDate =
        document.getElementById("displayDate");

    const displayTheme =
        document.getElementById("displayTheme");

    const previewRecipient =
        document.getElementById("previewRecipient");

    const previewSender =
        document.getElementById("previewSender");

    const previewText =
        document.getElementById("previewText");

    const letterPreview =
        document.getElementById("letterPreview");


    if (displaySender) {

        displaySender.textContent =
            letter.sender;

    }


    if (displayRecipient) {

        displayRecipient.textContent =
            letter.recipient;

    }


    if (displayDate) {

        displayDate.textContent =
            letter.date;

    }


    if (displayTheme) {

        displayTheme.textContent =
            letter.theme;

    }


    if (previewRecipient) {

        previewRecipient.textContent =
            letter.recipient;

    }


    if (previewSender) {

        previewSender.textContent =
            letter.sender;

    }


    if (previewText) {

        previewText.textContent =
            letter.text;

    }


    /*APPLY LETTER COLOUR */

    if (letterPreview) {

        letterPreview.style.backgroundColor =
            letter.colour;


        /* APPLY LETTER FONT */

        letterPreview.style.fontFamily =
            letter.font;

    }

}


/* FINAL ADJUSTMENT BUTTONS*/

const previewText = document.getElementById("previewText");


/* BOLD */

const boldBtn = document.getElementById("boldBtn");

if (boldBtn && previewText) {

    boldBtn.addEventListener("click", function () {

        if (previewText.style.fontWeight === "bold") {

            previewText.style.fontWeight = "normal";

        } else {

            previewText.style.fontWeight = "bold";

        }

    });

}


/* ITALIC */

const italicBtn =
    document.getElementById("italicBtn");

if (italicBtn && previewText) {

    italicBtn.addEventListener("click", function () {

        if (previewText.style.fontStyle === "italic") {

            previewText.style.fontStyle = "normal";

        } else {

            previewText.style.fontStyle = "italic";

        }

    });

}


/*UNDERLINE */

const underlineBtn =
    document.getElementById("underlineBtn");

if (underlineBtn && previewText) {

    underlineBtn.addEventListener("click", function () {

        if (
            previewText.style.textDecoration === "underline"
        ) {

            previewText.style.textDecoration = "none";

        } else {

            previewText.style.textDecoration = "underline";

        }

    });

}


/*ALIGN LEFT */

const leftBtn =
    document.getElementById("leftBtn");

if (leftBtn && previewText) {

    leftBtn.addEventListener("click", function () {

        previewText.style.textAlign = "left";

    });

}


/* CENTRE */

const centerBtn =
    document.getElementById("centerBtn");

if (centerBtn && previewText) {

    centerBtn.addEventListener("click", function () {

        previewText.style.textAlign = "center";

    });

}


/* ALIGN RIGHT*/

const rightBtn =
    document.getElementById("rightBtn");

if (rightBtn && previewText) {

    rightBtn.addEventListener("click", function () {

        previewText.style.textAlign = "right";

    });

}


/*EDIT LETTER */

const editBtn =
    document.getElementById("editBtn");

if (editBtn) {

    editBtn.addEventListener("click", function () {

        window.location.href = "create.html";

    });

}


/* SAVE DRAFT*/

const saveButton =
    document.getElementById("saveBtn");

if (saveButton) {

    saveButton.addEventListener("click", function () {

        const letter =
            localStorage.getItem("inkItLetter");


        if (!letter) {

            alert(
                "There is no letter available to save."
            );

            return;

        }


        localStorage.setItem(
            "inkItDraft",
            letter
        );


        alert(
            "✓ Your letter has been saved as a draft!"
        );

    });

}


/*SEND LETTER*/

const sendButton =
    document.getElementById("sendBtn");

if (sendButton) {

    sendButton.addEventListener("click", function () {

        alert(
            "📤 Your letter is ready to be sent!\n\n" +
            "The sending feature can later be connected " +
            "to an email service."
        );

    });

}


/* PRINT LETTER */

const printButton =
    document.getElementById("printBtn");

if (printButton) {

    printButton.addEventListener("click", function () {

        window.print();

    });

}


/* DOWNLOAD LETTER */

const downloadButton =
    document.getElementById("downloadBtn");

if (downloadButton) {

    downloadButton.addEventListener("click", function () {

        const savedLetter =
            localStorage.getItem("inkItLetter");


        if (!savedLetter) {

            alert(
                "There is no letter available to download."
            );

            return;

        }


        const letter =
            JSON.parse(savedLetter);


        const content =

`INKIT
Where words become keepsakes.



From: ${letter.sender}

To: ${letter.recipient}

Date: ${letter.date}

Theme: ${letter.theme}



${letter.text}



With warm regards,

${letter.sender}
`;


        const blob =
            new Blob(
                [content],
                { type: "text/plain" }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "InkIt-Letter.txt";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    });

}
