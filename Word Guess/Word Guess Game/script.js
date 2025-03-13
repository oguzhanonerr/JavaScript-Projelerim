var words = [
    "TOPKAPI SARAYI",
    "ANITKABİR",
    "SELİMİYE CAMİ",
    "BALIKLI GÖL",
    "SULTAN AHMET",
    "AYASOFYA CAMİ",
    "İSTANBUL BOĞAZI",
    "HALİÇ",
    "KIZ KULESİ",
    "ADALAR",
    "HAYDAR PAŞA",
    "TBMM",
    "KALEİÇİ",
    "PORSUK ÇAYI",
    "PALANDÖKEN",
    "SÜLEYMANİYE CAMİ",
    "KAPALI ÇARŞI",
    "ÇANKAYA KÖŞKÜ",
    "AYA İRİNİ KİLİSESİ",
    "YEREBATAN SARNICI",
    "YEDİKULE ZİNDANLARI",
    "NOEL BABA KİLİSESİ",
    "EFES ANTİK KENTİ",
    "GÖBEKLİTEPE",
    "ÇATALHÖYÜK",
    "GALATA KULESİ",
    "ANTUAN KİLİSESİ",
    "PİERRE LOTİ",
    "VALİDEBAĞ KORUSU",
    "ATATÜRK ORMAN ÇİFTLİĞİ",
    "YEDİGÖLLER",
    "ERCİYES DAĞI",
    "KARTALKAYA",
    "PETRA ANTİK KENTİ",
    "KUŞ ADASI",
    "MENDERES NEHİRLERİ",
    "KONYAALTI PLAJI",
    "ASPENDOS ANTİK KENTİ",
    "SİDE ANTİK KENTİ",
    "KIZ KALESİ",
    "PHASELİS ANTİK KENTİ",
    "OLYMPOS",
    "EĞİRDİR GÖLÜ",
    "NEMRUT",
    "ULUDAĞ",
    "SÜMELA MANASTIRI",
    "TOROS DAĞLARI",
    "YILDIZ DAĞLARI",
    "ÇİFTE MİNARELİ MEDRESE",
    "ANİ HARABELERİ",
    "AĞRI DAĞI",
    "CENNET CEHENNEM MAĞARALARI",
    "SALDA GÖLÜ",
    "VAN GÖLÜ",
    "KIZILIRMAK",
    "FIRAT NEHRİ",
    "DİCLE NEHRİ",
    "ARAS NEHRİ",
    "SAKARYA NEHRİ",
    "DÜDEN ŞELALESİ",
    "MARDİN TAŞ EVLERİ",
    "BEYŞEHİR GÖLÜ",
    "KAPADOKYA",
    "YAZILIKAYA",
    "KURŞUNLU CAMİ",
    "YANARTAŞ",
    "TUZ GÖLÜ",
    "PAMUKKALE TRAVERTENLERİ",
    "KASIMİYE MEDRESESİ",
    "SAPANCA GÖLÜ",
];

var wordsHint = {
    "TOPKAPI SARAYI": ["Osmanlı padişahlarının yaşadığı yer"],
    "ANITKABİR": ["Atatürk'ün mozolesinin bulunduğu yer"],
    "SELİMİYE CAMİ": ["Edirne'de bulunur"],
    "BALIKLI GÖL": ["Şanlıurfa'dadır"],
    "SULTAN AHMET": ["İstanbul'un en görkemli Camisidir",],
    "AYASOFYA CAMİ": ["Eskiden Kilisedir Osmanlı zamanında cami olmuştur"],
    "İSTANBUL BOĞAZI": ["İki kıtayı ayırır"],
    "HALİÇ": ["Gemilerin karadan yürüyüp indiği yer"],
    "KIZ KULESİ": ["Eskiden boğazı gözlemek için yapıldı"],
    "ADALAR": ["İstanbulun vapurla gidilen harika güzellikleri"],
    "HAYDAR PAŞA": ["Kadıköyde tarihi bir bina"],
    "TBMM": ["Ülkemizin yönetildiği yer"],
    "KALEİÇİ": ["Akdenizin en güzel ilçesinde tarihi yer"],
    "PORSUK ÇAYI": ["Eskişehir'in sembolü"],
    "PALANDÖKEN": ["Kayak için ideal Doğu Anadolu"],
    "SÜLEYMANİYE CAMİ": ["Kanuni'nin mezarı bulunur"],
    "KAPALI ÇARŞI": ["Türkiye'nin en büyük pazarıdır"],
    "ÇANKAYA KÖŞKÜ": ["Ağaç kesilmesin diye hareket ettirilmişdir"],
    "AYA İRİNİ KİLİSESİ": ["En eksi Bizans Kilisesidir"],
    "YEREBATAN SARNICI": ["Bizans döneminde İstanbul'un su ihtiyacını karşılar"],
    "YEDİKULE ZİNDANLARI": ["Padişah Genç Osman'ın öldürüldüğü yer"],
    "NOEL BABA KİLİSESİ": ["Antalya'da bulunur Aziz Nikolas diye geçer"],
    "EFES ANTİK KENTİ": ["İzmir'in Selçuk ilçesindedir"],
    "GÖBEKLİTEPE": ["İnsanlık tarihinin en eski yerleşim yeridir"],
    "ÇATALHÖYÜK": ["Konya'nın Çumra ilçesindedir"],
    "GALATA KULESİ": ["Cenevizliler tarafından gözetleme kulesi olarak inşa edildi"],
    "ANTUAN KİLİSESİ": ["İstanbul İstiklal Caddesinde bulunan Kilise"],
    "PİERRE LOTİ": ["Haliçe Bakan tepedir"],
    "VALİDEBAĞ KORUSU": ["İstanbul'un Anadolu yakasının ikinci en büyük yeşil alanıdır"],
    "ATATÜRK ORMAN ÇİFTLİĞİ": ["Atatürk tarafından kurulan çiftlik"],
    "YEDİGÖLLER": ["Bolu'da bulunan eşsiz güzellik"],
    "ERCİYES DAĞI": ["Kayak Merkezidir Kayseri"],
    "KARTALKAYA": ["Kayak Merkezidir Bolu"],
    "MENDERES NEHİRLERİ": ["İç Andaoludan Ege Denizine akan nehirler"],
    "KONYAALTI PLAJI": ["Antalya'da bulunan görkemli plaj"],
    "ASPENDOS ANTİK KENTİ": ["Antalya'da bulunan antik tiyatro"],
    "SİDE ANTİK KENTİ": ["Antalya'nın Manavgat ilçesinde bulunan antik tiyatro"],
    "KIZ KALESİ": ["Mersin'de bulunan denizin üstünde yapı"],
    "PHASELİS ANTİK KENTİ": ["Antalya'nın Kemer ilçesinde bulunan antik kent"],
    "OLYMPOS": ["Antalya'nın Kumluca ilçesinde bulunan antik kent"],
    "EĞİRDİR GÖLÜ": ["Isparta'da bulunan göl"],
    "NEMRUT": ["Adıyaman'da bulunan kalıntılar"],
    "ULUDAĞ": ["Kayak merkezidir Bursa"],
    "SÜMELA MANASTIRI": ["Manastırdır Karadeniz"],
    "TOROS DAĞLARI": ["Akdeniz Bölgesini çevreleyen büyük dağlar"],
    "YILDIZ DAĞLARI": ["Trakya'nın Karadeniz kıyılarına paralel olarak giden dağ"],
    "ÇİFTE MİNARELİ MEDRESE": ["Erzurumdadır Hatuniye"],
    "ANİ HARABELERİ": ["Kars'ta bulunan harabeler"],
    "AĞRI DAĞI": ["Türkiye'nin en büyük dağı"],
    "CENNET CEHENNEM MAĞARALARI": ["Mersin'de bulunan obruklar"],
    "SALDA GÖLÜ": ["Burdur'da bulunan Türkiye'nin Maldivleri"],
    "VAN GÖLÜ": ["Türkiye'nin en büyük gölü"],
    "KIZILIRMAK": ["Kızıldağ eteklerinden doğan ve Samsun'un Bafra ilçesinde Karadeniz'e dökülen bir nehir"],
    "FIRAT NEHRİ": ["Türkiye'den doğar Suriye'den geçip Basra Körfezinde dökülür"],
    "DİCLE NEHRİ": ["Türkiye'den doğar Iraktan geçip Basra Körfezinde dökülür"],
    "ARAS NEHRİ": [" Türkiye'nin Doğu Anadolu Bölgesi'nde doğup, Kura Nehri ile birleşerek Hazar Denizi'ne dökülen bir nehirdir"],
    "SAKARYA NEHRİ": ["Türkiye'nin üçüncü en uzun, Kuzeybatı Anadolu'nun ise en büyük akarsuyudur"],
    "DÜDEN ŞELALESİ": ["Antalya'da bir şelaledir"],
    "MARDİN TAŞ EVLERİ": ["Güney Doğu Anadolu'da bulunan tarihi evler"],
    "BEYŞEHİR GÖLÜ": ["Konya'da bulunan bir göldür"],
    "KAPADOKYA": ["Ürgüp, Göreme"],
    "YAZILIKAYA": ["Midas Anıtı Eskişehir"],
    "KURŞUNLU CAMİ": ["Eskişehir'de Cami Külliye"],
    "YANARTAŞ": ["Kemer'de bulunan taşın altından çıkan gaz"],
    "TUZ GÖLÜ": ["Türkiye'nin Tuz ihtiyacını karşılar"],
    "PAMUKKALE TRAVERTENLERİ": ["Karbonat mineralleri vardır yararlıdır beyazdır"],
    "KASIMİYE MEDRESESİ": ["Artuklular döneminde yapımına başlanan medrese"],
    "SAPANCA GÖLÜ": ["Sakaray'da bulunan göl"]
}

var guessedLetters = [];
var guessingWord = [];
var usedGuessing = [];
var wordMatch;
var numGuess;
var wins = 0;
var pause = false;




// Oyuna Başlama
function startGame() {

    //rastgele yeni kelime 
    wordMatch = words[Math.floor(Math.random() * words.length)].toUpperCase();
    // Kelime Uzunluğuna Göre Tahmin Sayısı
    if (wordMatch.length <= 4) {
        numGuess = 4
    } else if (wordMatch.length > 4 && wordMatch.length <= 7) {
        numGuess = Math.floor(wordMatch.length * .67)
    } else if (wordMatch.length > 7 && wordMatch.length <= 10) {
        numGuess = Math.floor(wordMatch.length * .5)
    } else if (wordMatch.length > 10 && wordMatch.length <= 14) {
        numGuess = Math.floor(wordMatch.length * .52)
    } else if (wordMatch.length > 14) {
        numGuess = 7;
    }

    // Kelimenin Altına Çizgi
    for (var i = 0; i < wordMatch.length; i++) {
        if (wordMatch[i] === " ") {
            guessingWord.push(" ");
        } else {
            guessingWord.push("_");
        }
    }
    updateDisplay();
};


// Yeniden Başlama
function resetGame() {
    if (usedGuessing.length === words.length) {
        usedGuessing = []
        wins = 0
        setTimeout(resetGame, 6000)
    }
    else {
        pause = false;
        // Girişteki Yanıp Sönen Mesajı Yeniler
        document.getElementById('welcome').className = 'blink';

        // Yeni Kelime 
        wordMatch = words[Math.floor(Math.random() * words.length)].toUpperCase();
        console.log(wordMatch);
        // Yeni Kelime Daha Önce Kullanılmışsa
        if (guessingWord.includes(wordMatch) === true) {
            resetGame();
        }

        //Kelime Uzunluğuna Göre Tahmin Sayısı
        if (wordMatch.length <= 4) {
            numGuess = 4
        } else if (wordMatch.length > 4 && wordMatch.length <= 7) {
            numGuess = Math.floor(wordMatch.length * .67)
        } else if (wordMatch.length > 7 && wordMatch.length <= 10) {
            numGuess = Math.floor(wordMatch.length * .5)
        } else if (wordMatch.length > 10 && wordMatch.length <= 14) {
            numGuess = Math.floor(wordMatch.length * .52)
        } else if (wordMatch.length > 14) {
            numGuess = 7;
        }

        // Kelime Dizisini Sıfırlama
        guessedLetters = [];
        guessingWord = [];

        //Tahmin Edilen Kelimeyi Sıfırlama
        for (var i = 0; i < wordMatch.length; i++) {
            if (wordMatch[i] === " ") {
                guessingWord.push(" ")
            }
            else {
                guessingWord.push("_");
            }
        }
        updateDisplay();
    }
}

//Ekranı Güncelleme
function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("word").innerText = guessingWord.join("");
    document.getElementById("remaining").innerText = numGuess;
    document.getElementById("guessedLetters").innerText = guessedLetters.join(" ");
};

// Tuşa Basılamsı
document.onkeydown = function (event) {
    if (isLetter(event.key) && pause === false) {
        checkForLetter(event.key.toUpperCase());
    }
    // Tuşa Basıldığında Yanıp Sönmeyi Kapama
    document.getElementById('welcome').className = 'noBlink';
};

// İpucu Gösterme
document.getElementById('hint').addEventListener('click', function () {
    var hintText = wordsHint[wordMatch];
    var hintContent = document.getElementById('hintContent');

    if (hintContent.style.display === "none") {
        hintContent.style.display = "block";
        hintContent.innerHTML = hintText.join("<br>");
    } else {
        hintContent.style.display = "none";
    }
});


// Basılan Tuşun A-Z a-z Arasında olup olamdığını kontrol etme
var isLetter = function (ch) {
    return typeof ch === "string" && ch.length === 1
        && (ch === "İ" || ch === "ı" || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") 
        || ch === "ç" || ch === "ğ" || ch === "ü" || ch === "ş" || ch === "ö" 
        || ch === "Ç" || ch === "Ğ" || ch === "Ü" || ch === "Ş" || ch === "Ö");
};



// Harf Kelimede Olup Olmadığı Kontrolü

function checkForLetter(letter) {
    var foundLetter = false;

    for (var i = 0; i < wordMatch.length; i++) {
        if (letter === wordMatch[i]) {
            guessingWord[i] = letter
            foundLetter = true;
            if (guessingWord.join("") === wordMatch) {
                wins++
                usedGuessing.push(wordMatch)
                console.log(usedGuessing);
                pause = true;
                updateDisplay();
                // Kelime tamamlandığında ipucu gizlenir
                document.getElementById('hintContent').style.display = "none";

                setTimeout(resetGame, 4000);
            }
        }
    }
    if (foundLetter === false) {
        if (guessedLetters.includes(letter) === false) {
            guessedLetters.push(letter)
            numGuess--
        }
        if (numGuess === 0) {
            usedGuessing.push(wordMatch);
            console.log(usedGuessing);
            guessingWord = wordMatch.split("");
            pause = true;
            setTimeout(resetGame, 4000);
        }
    }
    updateDisplay();
};

startGame();