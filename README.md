<html>
<head>
    <title>Ticket Information</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <h1 id="text-div">Действует: <span id="countdown">15</span> сек.</h1>
        <div class="tabs">
            <button class="button" id="ticket-button">
                <h2><i class='bx bx-file'></i> 864 801 202</h2>
            </button>
            <button class="button" id="control-button">
                <h2><i class='bx bx-user-circle'></i> Контроль</h2>
            </button>
        </div>
        <div class="divider"></div>
        <div class="info">
            <div class="info-item"><i class="fas fa-user"></i> Перевозчик</div>
            <div class="info-item"> <?php echo $admin ?> </div>
            <div class="line"></div>
            <div class="info-item"><i class="fas fa-bus"></i> <?php echo $marshrut ?></div>
            <div class="info-item"><?php echo $number ?></div>
            <div class="line"></div>
            <div class="info-item"><i class='bx bx-ruble'></i> Стоимость</div>
            <div class="info-item">1 шт., Полный, 44.00</div>
            <div class="line"></div>
            <div class="info-item"><i class="fas fa-calendar-alt"></i> Дата покупки</div>
            <div class="info-item"><?php echo date('d') . ' ' . 'октября ' . date('Y'); ?> г.</div>
            <div class="line"></div>
            <div class="info-item"><i class="fas fa-clock"></i> Время покупки</div>
            <div class="info-item"><?php echo $min_and_hour ?></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
