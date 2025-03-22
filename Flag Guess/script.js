let dragObjects;
let dragPoint;
const startBtn = document.getElementById("start");
const result = document.getElementById("result");
const control = document.querySelector(".controls");
const dragContainer = document.querySelector(".drag-obj");
const dropContainer = document.querySelector(".drop");

const countryData = [
    "türkiye",
    "brezilya",
    "almanya",
    "ingiltere",
    "galler",
    "iskoçya",
    "irlanda",
    "norveç",
    "finlandiya",
    "isveç",
    "rusya",
    "polonya",
    "danimarka",
    "belçika",
    "hollanda",
    "fransa",
    "ispanya",
    "portekiz",
    "italya",
    "sırbistan",
    "hırvatistan",
    "bulgaristan",
    "romanya",
    "çekya",
    "slovakya",
    "avusturya",
    "amerika",
    "meksika",
    "kanada",
    "kolombiya",
    "arjantin",
    "japonya",
    "çin",
    "hindistan",
    "avustralya"
];

let deviceType = "";
let initalX = 0, initalY = 0;
let currentElement = "";
let moveElement = false;

// Cihaz dokunmatikse tanımlama
const isTouch = () => {
    //Dokunmatik Olayı oluşturmaya çalışıyoruz (Masaüstünde hata verir)
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (err) {
        deviceType = "mouse";
        return false;
    }
};

let count = 0;

// Array için rastgele değer
const randomValueGen = () => {
    return countryData[Math.floor(Math.random() * countryData.length)];
};


// Oyunu Kazanma Ekranı
const stopGame = () => {
    control.classList.remove("hide");
    startBtn.classList.remove("hide");
};

// Sürükle bırak Fonksiyonları
function dragStart(e) {
    if (isTouch()) {
        initalX = e.touches[0].clientX;
        initalY = e.touches[0].clientY;
        // Dokunma Başlangıcı
        moveElement = true;
        currentElement = e.target;
    } else {
        // Dokunmatik olmayan cihazlar için 
        e.dataTransfer.setData("text", e.target.id);
    }
};

// Bırakma hedefi
function dragOver(e) {
    e.preventDefault();
};

// Dokunmatik Hareket 
const touchMove = (e) => {
    if (moveElement) {
        e.preventDefault();
        let newX = e.touches[0].clientX;
        let newY = e.touches[0].clientY;
        let currentSelectedElement = document.getElementById(e.target.id);
        currentSelectedElement.parentElement.style.top =
            currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
        currentSelectedElement.parentElement.style.left =
            currentSelectedElement.parentElement.offsetLeft -
            (initialX - newX) +
            "px";
        initialX = newX;
        initialY = newY;
    }
};

const drop = (e) => {
    e.preventDefault();
    // Dokunmatik Ekran için
    if (isTouch()) {
        moveElement = false;
        // Ülke adı bölümünü seçme
        const currenDrop = document.querySelector(`div[data-id='${e.target.id}']`);
        const currentDropBound = currenDrop.getBoundingClientRect();
        // Bayrağın konumun ayarlama
        if (initalX >= currentDropBound.left &&
            initalX <= currentDropBound.right &&
            initalY >= currentDropBound.top &&
            initalY <= currentDropBound.bottom
        ) {
            currenDrop.classList.add("dropped");
            // Resmi Gizleme
            currentElement.classList.add("hide");
            currenDrop.innerHTML = ``;
            // Yeni Fotoğraf ekleme
            currenDrop.insertAdjacentHTML(
                "afterbegin", `<img src="imgs/${currentElement.id}.png">`
            );            
            count += 1;
        }
    } else {
        //Veri Erişim
        const draggedElementData = e.dataTransfer.getData("text");
        const droppableElementData = e.target.getAttribute("data-id");
        if (draggedElementData === droppableElementData) {
            const draggedElement = document.getElementById(draggedElementData);
            //Bırakma
            e.target.classList.add("dropped");
            // Var olan resmi saklama
            draggedElement.classList.add("hide");
            // Sürükleme false ayarlandı
            draggedElement.setAttribute("draggable", "false");
            e.target.innerHTML = ``;
            // Yeni resim ekleme
            e.target.insertAdjacentHTML(
                "afterbegin",
                `<img src="imgs/${draggedElementData}.png">`
            );
            count += 1;
        }
    }

    // Kazanma
    if (count == 3) {
        result.innerText = `Kazandınnn :)`;
        stopGame();
    }
};

// Bayrakları ve Ülkeleri Oluşturma
const create = () => {
    dragContainer.innerHTML = "";
    dropContainer.innerHTML = "";
    let randomData = [];
    // Dizideki rastgele değerler için 
    for (let i = 1; i <= 3; i++) {
        let randomValue = randomValueGen();
        if (!randomData.includes(randomValue)) {
            randomData.push(randomValue);
        } else {
            // Değer zaten mevcutsa i'yi 1 azaltma
            i -= 1;
        }
    }
    for (let i of randomData) {
        const flagDiv = document.createElement("div");
        flagDiv.classList.add("draggable-image");
        flagDiv.setAttribute("draggable", true);
        if (isTouch()) {
            flagDiv.style.position = "absolute";
        }
        flagDiv.innerHTML = `<img src="imgs/${i}.png" id="${i}">`;

        dragContainer.appendChild(flagDiv);
    }
    // Diziyi rastgele sıralama
    randomData = randomData.sort(() => 0.5 - Math.random());
    for (let i of randomData) {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `<div class='countries' data-id='${i}'>
    ${i.charAt(0).toUpperCase() + i.slice(1).replace("-", " ")}
    </div>`;

        dropContainer.appendChild(countryDiv);
    }
};

// Oyuna Başlama

startBtn.addEventListener("click", (startGame = async () => {
    currentElement = "";
    control.classList.add("hide");
    startBtn.classList.add("hide");
    await create();
    count = 0;
    dropPoint = document.querySelectorAll(".countries");
    dragObjects = document.querySelectorAll(".draggable-image");

    // Events
    dragObjects.forEach((element) => {
        element.addEventListener("dragstart", dragStart);
        // Dokunmatik Ekran için
        element.addEventListener("touchstart", dragStart);
        element.addEventListener("touchend", drop);
        element.addEventListener("touchmove", touchMove);
    });

    dropPoint.forEach((element) => {
        element.addEventListener("dragover", dragOver);
        element.addEventListener("drop", drop);
    });
}));