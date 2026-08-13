<?php

require_once "db.php";

if (!isset($_GET["id"])) {
    die("No letter was selected.");
}

$id = $_GET["id"];

$sql = "SELECT * FROM letters WHERE id = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("i", $id);

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die("Letter not found.");
}

$letter = $result->fetch_assoc();

?>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Letter Preview | InkIt</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

<header>

    <h1>✒️ InkIt</h1>

    <p class="tagline">
        <em>"Where words become keepsakes."</em>
    </p>

    <nav>

        <a href="index.html">Home</a>

        <a href="create.html">Create Letter</a>

        <a href="display.php?id=<?php echo $letter['id']; ?>">
            Preview Letter
        </a>

        <a href="gallery.html">Gallery</a>

    </nav>

</header>

<main>

<section class="hero">

    <h2>Your Letter is Ready</h2>

    <p>
        Your letter has been successfully saved to the InkIt database.
    </p>

</section>


<section>

<h2>Letter Information</h2>

<table>

<tr>
    <th>Sender</th>
    <td><?php echo htmlspecialchars($letter["sender"]); ?></td>
</tr>

<tr>
    <th>Recipient</th>
    <td><?php echo htmlspecialchars($letter["recipient"]); ?></td>
</tr>

<tr>
    <th>Date</th>
    <td><?php echo htmlspecialchars($letter["letter_date"]); ?></td>
</tr>

<tr>
    <th>Theme</th>
    <td><?php echo htmlspecialchars($letter["theme"]); ?></td>
</tr>

<tr>
    <th>Privacy</th>
    <td><?php echo htmlspecialchars($letter["privacy"]); ?></td>
</tr>

</table>

</section>


<section>

<h2>Letter Preview</h2>

<fieldset class="letter-preview">

<legend>Your Letter</legend>

<p>
    Dearest 
    <strong>
        <?php echo htmlspecialchars($letter["recipient"]); ?>
    </strong>,
</p>

<br>

<p
    style="
        background-color: <?php echo htmlspecialchars($letter["colour"]); ?>;
        font-family: <?php echo htmlspecialchars($letter["font"]); ?>;
        padding: 25px;
    "
>

<?php

echo nl2br(
    htmlspecialchars($letter["letter_text"])
);

?>

</p>

<br>

<p>With warm regards,</p>

<p>

<strong>
<?php echo htmlspecialchars($letter["sender"]); ?>
</strong>

</p>

</fieldset>

</section>


<section>

<h2>What would you like to do?</h2>

<button type="button" onclick="window.print()">
    🖨 Print Letter
</button>

<a class="button" href="create.html">
    ✍ Create Another Letter
</a>

<a class="button" href="index.html">
    🏠 Return Home
</a>

</section>

</main>

<footer>

<hr>

<p>
©️2026 InkIt
</p>

<p>
Every letter tells a story.
</p>

</footer>

</body>

</html>

<?php

$stmt->close();
$conn->close();

?>