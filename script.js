function openLetter(){
  document.getElementById("start").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");

  // play music
  document.getElementById("music").play();
}

// bunga jatuh
function createFlower(){
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.fontSize = Math.random() * 20 + 20 + "px";
  flower.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(flower);

  setTimeout(()=>{
    flower.remove();
  },7000);
}

setInterval(createFlower,300);
