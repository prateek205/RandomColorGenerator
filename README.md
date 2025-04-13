# 🎨 Random Color Generator

This is simple web project which generate random color by clicking and by setting some interval as it's build by using HTML, CSS and JavaScript.

## 🚀 Features

- Generate the Random Color
- Display it by RGB Color
- Change the background on click and set by interval
 
## 📸 Screenshot

![Demo Screenshot](https://github.com/prateek205/RandomColorGenerator/blob/a7eeed8d0a6626561c7913695cd8b1af85b1a33c/asset/screenShot/randomColorGenerator.png)

![Demo Screenshot](https://github.com/prateek205/RandomColorGenerator/blob/6d3ddb4838fef79311017d954d641d3763f08e0e/asset/screenShot/randomColorGenerator_03.png)

## 📽️ Live Demo
[https://github.com/user-attachments/assets/fc33e134-8129-4508-a10a-164aaef5b865](https://random-color-generator-dusky.vercel.app/)

## 💻 Technology used
- HTML
- CSS
- JavaScript

## 🛠️ How it Works
### By using Set Interval Method
#### Index.html
``` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project | Random Color Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="asset/favicon.ico" type="image/png" />
  </head>

  <body>
    <div class="container">
      <div class="heading"><h1>Generating Random Color...</h1></div>
      <div class="loading" id="loading"></div>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```
#### Index.js
```
let loading = document.getElementById("loading");

function getRandomColor() {
  let R = Math.ceil(Math.random() * 255);
  let G = Math.ceil(Math.random() * 255);
  let B = Math.ceil(Math.random() * 255);

  document.body.style.backgroundColor = `RGB(${R}, ${G}, ${B})`;
  loading.innerHTML = `R:${R}, G:${G}, B:${B}`;
}

setInterval(() => {
  getRandomColor();
}, 2000);
```
### By using onClick Method
#### Index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project | Random Color Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="asset/favicon.ico" type="image/png" />
  </head>

  <body>
    <div class="container">
      <button class="btn" id="color">Generate Random Color</button>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```
#### Index.js
```
let button = document.getElementById("color");

function getRandomColor() {
  let R = Math.ceil(Math.random() * 255);
  let G = Math.ceil(Math.random() * 255);
  let B = Math.ceil(Math.random() * 255);

  document.body.style.backgroundColor = `RGB(${R}, ${G}, ${B})`;
  color.innerHTML = `RGB(${R}, ${G}, ${B})`;
}

button.addEventListener("click", () => {
    getRandomColor();
});
```
## 📂 Project Structure
.
├── Random Color Generator
├── assets/
│   ├── logo
│   └── screenshot
├── index.html
├── index.js
└── style.css
