document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuButton.addEventListener("click", function () {
        menuDropdown.classList.toggle("hidden");
    });

    // Menü dışında bir yere tıklanınca menüyü kapat
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.add("hidden");
        }
    });
});

function detaylar(ad, resim, aciklama){
    document.getElementById("detayBaslik").textContent = ad;
    document.getElementById("detayResim").src = resim;
    document.getElementById("detayResim").classList.remove("hidden");
    document.getElementById("detayAciklama").textContent = aciklama;
    document.getElementById("detayBolumu").classList.remove("hidden");
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById("kapatDetay").addEventListener("click", function(){
    document.getElementById("detayBolumu").classList.add("hidden")
});