<?php

require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $sender = $_POST["sender"];
    $recipient = $_POST["recipient"];
    $letter_date = $_POST["letter_date"];
    $theme = $_POST["theme"];
    $colour = $_POST["colour"];
    $font = $_POST["font"];
    $letter_text = $_POST["letter_text"];
    $privacy = $_POST["privacy"];

    $sql = "INSERT INTO letters 
            (sender, recipient, letter_date, theme, colour, font, letter_text, privacy)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param(
        "ssssssss",
        $sender,
        $recipient,
        $letter_date,
        $theme,
        $colour,
        $font,
        $letter_text,
        $privacy
    );

    if ($stmt->execute()) {

        $id = $stmt->insert_id;

        header("Location: display.php?id=" . $id);
        exit();

    } else {

        echo "Error saving letter: " . $stmt->error;

    }

    $stmt->close();

} else {

    echo "Invalid request.";

}

$conn->close();

?>