<!DOCTYPE html>
<html lang="de">

<head>
    <?php include("head.php"); ?>
    <title>Kontakt</title>
</head>

<body id="kontakt">
<div class="container">
    <?php include("navbar.php"); ?>

    <h1>Kontakt</h1>
    <h3><?= $company_name ?></h3>
    <p>
        <?= $street ?> <br/>
        <?= $postcode ?> <?= $city ?>
    </p>
    <p>
        Tel.: <?= $telephone_number ?> <br/>
        E-Mail: <a href="mailto:<?= $email ?>"><?= $email ?></a>
    </p>
</div>
<?php include("footer.php"); ?>
</body>
</html>
