document.getElementById("filter").addEventListener("click", function(){
    const filters = document.querySelector(".filter-buttons");
    filters.classList.toggle("hidden");
});

function filterfilms(genre) {
    const films = document.querySelectorAll('.film');
    films.forEach(film => {
      film.style.display = genre === '' || film.dataset.genre === genre ? 'block' : 'none';
    });
  }