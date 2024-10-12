<html>
<head>
    <title>Ticket Information</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php
	// подключаемся к базе данных
	$connection = new SQLite3('reports.db');
	// получаем дату в нужном формате
      $date = date('Y-m-d');
// выгружаем остальные отчёты из базы
$results = $connection->query("SELECT * FROM 'reports' WHERE 'date' != $date");
// пока есть записи в результатах поиска — выводим их
while($row=$results->fetchArray(SQLITE3_ASSOC)){
	$date = $row['date'];
	$min_and_hour = $row['min_and_hour'];
	$number = $row['text'];
	$all_marshrut = ["Студгородок - А/В Восточный", 'ОАО "КРАСФАРМА" - Ветлужанка с-к "РАДУГА"', 'мкр. Северный - Пос. Водники', 'Молодёжная - 3-я Дальневосточная', 'Ж/д Больница - пос. Овинный', 'Спортзал - Парк "Прищепка"', 'мкр. Солнечный - ЛДК', 'Плодово-ягодная станция - Ж/д Больница', 'Полигон - мкрн. Преображенский', 'Спортзал - мкрн. Тихие зори', 'Восточный - Сельхозкомплекс', 'Каридиоцентр - Спорткомплекс "Радуга"', 'мкрн. Солнечный - Стела "Роев Ручей"', 'Спортзал - Парашютная', 'Агротерминал- ДК "Кировский"', 'Восточный-Сельхозкомплекс', 'КРАЗ - Ж/д Больница', 'Ул. Глинки - Стела', 'п. Таймыр Северо-западный - мкрн. Тихие зори. Красфарма', 'Академгородок "Дом ученых" - Профилакторий з-да "КраМЗ"', 'Ветлужанка - В. Черемушки', 'Академия биатлона - Спортзал', 'Верхняя базаиха - Академия биатлона', 'ЛДК - ТЭЦ-3', 'ЛДК - ОАО "РУСАЛ"', 'Восточный - мкрн. Северный'];
	$marshrut = [];
	$all_admin = ['ИП Ялтонский Михаил Александрович', 'ИП Долгушина Галина Ивановна', 'МП КПАТП 5', 'ИП Читашвили Нора Семеновна', 'ИП Глухих Владимир Дмитриевич', 'ООО Вавулин-К', 'ИП Алексеев Юрий Андревич', 'ИП Бронников Алексей Иванович', 'ИП Долгушин Дмитрий Геннадьевич', 'КПАТП', 'ООО "СКАД"', 'ИП Тагачаков Вадим Геннадьевич', 'ИП Гнетов Ю.Н.'];
	$admin = [];
	$bus3 = ['А627ОМ', 'Т055НР', 'А541ОМ', 'С078НР', 'Т051НР', 'У188НР', 'А756СМ', 'С056НР', 'Х638МК', 'С273НР', 'У180НР', 'Н206РА', 'С287НР', 'М740О'];
    $bus5 = ['Т279ЕУ', 'О049НС', 'К863РА', 'Т755ЕУ', 'Т795ЕУ', 'Т762ЕУ', 'С861КМ', 'ЕЕ111'];
    $bus8 = ['О951ОТ', 'С902ОР', 'О938ОТ', 'Н941НО', 'Т808НР'];
    $bus11 = ['Н883РУ', 'В671ТВ', 'С573ЕР', 'С551ЕР', 'Н904РУ'];
    $bus14 = ['Т523ОВ', 'Т731ТЕ'];
    $bus21 = ['Х464МВ', 'Е314ОА'];
    $bus23 = ['М465ОХ', 'Т588ОК', 'Р661СА', 'Х580ОЕ', 'Р604ОК', 'С771ОВ', 'С772ОВ', 'К196НУ', 'Х302ОЕ', 'М714ОТ', 'Т542ОК', 'В498ОН', 'Х391ТМ', 'Т587ОК'];
    $bus26 = ['А341ОЕ'];
    $bus27 = ['АЕ991', 'О796СР'];
    $bus30 = ['В657ТВ', 'Е512РС', 'Р874ТМ', 'О992ОУ', 'Н877РУ', 'У724РВ', 'Н912РУ', 'Н881РУ', 'В661ТВ', 'У744РВ', 'В436РР'];
    $bus43 = ['Т834СН', 'В401СС', 'О783ОТ', 'С896СК', 'К224СТ', 'Р602СЕ', 'Р831СК', 'А562СС', 'К129ОР'];
    $bus49 = ['Р884ТМ', 'Н875РУ', 'В659ТВ', 'С428ЕР', 'В632ТВ', 'Р879ТМ', 'С421ЕР'];
    $bus50 = ['В398СК', 'С560ТВ', 'В429СК', 'Х605ТМ', 'Р642НТ', 'Х509ОТ', 'В564ОК', 'Т733РВ', 'У580ХЕ', 'В561ОХ'];
    $bus58 = ['Х699ОА', 'А813СУ', 'С486СЕ', 'Р155ОВ', 'К992НН', 'Х514НХ', 'Х984ОХ'];
    $bus65 = ['К504НС', 'У941РТ', 'В353ОН', 'Н550НС', 'Т419ОМ', 'М489СВ', 'К883НС', 'А866ТХ', 'У112СУ', 'К493НС'];
    $bus71 = ['О969НС', 'С753ОА', 'О982НС', 'С763ОА', 'С139ОХ', 'Р080НТ', 'У373ОА', 'У469ОА', 'А201ОХ','ВВ838'];
    $bus77 = ['Н280ХА', 'Р679ХА', 'Р879РК', 'Т987РР', 'К869ТЕ', 'Т970СО', 'Р318ТК', 'У191РН', 'Е955РР', 'Т581РР'];
    $bus78 = ['Т570НА', 'К626НН'];
    $bus80 = ['Х831ОО', 'Н381ОТ', 'Т249РВ', 'Т737ОТ', 'Х322ОР', 'А785ОХ', 'Т265ЕУ', 'Т737ТО', 'К859РА', 'О772ОР', 'О050МС', 'Н074НВ', 'У203РВ', 'Х017НВ', 'О050НС'];
    $bus83 = ['А884НХ', 'Н022ОК', 'Е454РО', 'Т576ХЕ', 'О977РМ', 'Р750ОА', 'Р163ТК'];
    $bus85 = ['К086ЕТ', 'О422СМ', 'Т262СЕ', 'Н824РН', 'О423СМ', 'У895ТА'];
    $bus88 = ['К361ХЕ'];
    $bus90 = ['Н582ОН', 'А468ОЕ', 'А155ОК', 'Х933ОХ', 'Т566ОН', 'С043НК', 'Н221РА', 'А474ОЕ', 'Х971ОХ', 'С260ОМ', 'С054НР', 'Р656ОК', 'С271НР', 'С062НР'];
    $bus94 = ['М642ВО', 'Х677СА', 'Т983ОО', 'Н205РВ'];
    $bus98 = ['Х139ОА', 'Х806НХ', 'К137ОР', 'Т705ОО', 'А651СА', 'В225НР', 'У142НН', 'Х845НХ'];
    $bus99 = ['Х569МВ', 'Е290МН', 'Х041МР', 'К492СТ', 'М418ТА', 'М712НМ', 'У108НР', 'А603КТ', 'Р492СТ', 'В583СК', 'У198НР'];
	if (in_array($number, $bus3)){
		$marshrut = $all_marshrut[0];
		$admin = $all_admin[0];
	}
	if (in_array($number, $bus5)){
        $marshrut = $all_marshrut[1];
		$admin = $all_admin[1];
    }
	if (in_array($number, $bus8)){
        $marshrut = $all_marshrut[2];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus11)){
        $marshrut = $all_marshrut[3];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus14)){
        $marshrut = $all_marshrut[4];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus21)){
        $marshrut = $all_marshrut[5];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus23)){
        $marshrut = $all_marshrut[6];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus26)){
        $marshrut = $all_marshrut[7];
		$admin = $all_admin[2];
    }
	if (in_array($number, $bus27)){
        $marshrut = $all_marshrut[8];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus30)){
        $marshrut = $all_marshrut[9];
		$admin = $all_admin[2];
    }
	if (in_array($number, $bus43)){
        $marshrut = $all_marshrut[10];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus49)){
        $marshrut = $all_marshrut[11];
		$admin = $all_admin[2];
    }
	if (in_array($number, $bus50)){
        $marshrut = $all_marshrut[12];
		$admin = $all_admin[3];
    }
	if (in_array($number, $bus58)){
        $marshrut = $all_marshrut[13];
		$admin = $all_admin[4];
    }
	if (in_array($number, $bus65)){
        $marshrut = $all_marshrut[14];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus71)){
        $marshrut = $all_marshrut[15];
		$admin = $all_admin[5];
    }
	if (in_array($number, $bus77)){
        $marshrut = $all_marhrut[16];
		$admin = $all_admin[6];
    }
	if (in_array($number, $bus78)){
        $marshrut = $all_marshrut[17];
		$admin = $all_admin[7];
    }
	if (in_array($number, $bus80)){
        $marshrut = $all_marshrut[18];
		$admin = $all_admin[8];
    }
	if (in_array($number, $bus83)){
        $marshrut = $all_marshrut[19];
		$admin = $all_admin[9];
    }
	if (in_array($number, $bus85)){
        $marshrut = $all_marshrut[20];
		$admin = $all_admin[10];
    }
	if (in_array($number, $bus88)){
        $marshrut = $all_marshrut[21];
		$admin = $all_admin[11];
    }
	if (in_array($number, $bus90)){
        $marshrut = $all_marshrut[22];
		$admin = $all_admin[0];
    }
	if (in_array($number, $bus94)){
        $marshrut = $all_marshrut[23];
		$admin = $all_admin[6];
    }
	if (in_array($number, $bus98)){
        $marshrut = $all_marshrut[24];
		$admin = $all_admin[12];
    }
	if (in_array($number, $bus99)){
        $marshrut = $all_marshrut[25];
		$admin = $all_admin[0];
    }
}
    ?>
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
