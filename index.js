let button = document.getElementById("color");
let loading = document.getElementById("loading")

function getRandomColor() {
  let R = Math.ceil(Math.random() * 255);
  let G = Math.ceil(Math.random() * 255);
  let B = Math.ceil(Math.random() * 255);

  document.body.style.backgroundColor = `RGB(${R}, ${G}, ${B})`;
//   color.innerHTML = `RGB(${R}, ${G}, ${B})`;
  loading.innerHTML = `R:${R}, G:${G}, B:${B}`;
}

// button.addEventListener("click", () => {
//   getRandomColor();
// });

setInterval(() => {
    getRandomColor()
}, 2000);
