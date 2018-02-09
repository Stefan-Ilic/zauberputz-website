<!DOCTYPE html>
<html lang="de">

<head>
    <?php include("head.php"); ?>
    <title>Impressum</title>
</head>

<body id="impressum">
<div class="container">
    <?php include("navbar.php"); ?>

    <h1>Impressum</h1>
    <h3><?= $company_name ?></h3>
    <p>
        <?= $street ?> <br/>
        <?= $postcode ?> <?= $city ?><br/>
    </p>
    <p>
        Tel.: <?= $telephone_number ?> <br/>
        E-Mail: <a href="mailto:<?= $email ?>"><?= $email ?></a>
    </p>
    <p>
        FN: <?= $fn ?> <br/>
        UID-Nr: <?= $uid ?>
    </p>
</div>
<?php include("footer.php"); ?>
</body>
</html>
