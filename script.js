function openLetter(){

  // Hilangin tombol awal
  document.getElementById("start").style.display = "none";

  // Tampilkan isi
  document
    .getElementById("content")
    .classList.remove("hidden");

  // Play musik
  document
    .getElementById("music")
    .play();

}

/* Bunga jatuh */
function createFlower(){

  const flower = document.createElement("div");

  flower.classList.add("flower");

  flower.innerHTML = "🌸";

  flower.style.left =
    Math.random() * window.innerWidth + "px";

  flower.style.fontSize =
    Math.random() * 20 + 20 + "px";

  flower.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  document.body.appendChild(flower);

  setTimeout(() => {

    flower.remove();

  },7000);

}

setInterval(createFlower,300);

/* Auto scroll */
setInterval(() => {

  window.scrollBy({
    top:1,
    behavior:"smooth"
  });

},40);
