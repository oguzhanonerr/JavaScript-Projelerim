const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.getElementById("audio");
const searchButton = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchButton.addEventListener("click", () => {
    let inpWord = document.getElementById("input-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playsound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic || "Bilgi Yok"}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;

            
            let audioSrc = data[0].phonetics.find(p => p.audio)?.audio || "";
            if (audioSrc) {
                sound.setAttribute("src", `https:${audioSrc}`);
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Kelime Bulunamadı...</h3>`;
        });
});

function playsound() {
    if (sound.src) {
        sound.play().catch(error => {
            console.error("Ses çalınırken hata oluştu:", error);
        });
    } else {
        console.warn("Ses dosyası yüklenmedi.");
    }
}
