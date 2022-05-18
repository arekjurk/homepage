console.log("Siemka!");

let photo = document.querySelector(".js-photo");
let button = document.querySelector(".js-photoButton");
let backgroundButton = document.querySelector(".js-backgroundButton");
let body = document.querySelector(".js-body");

button.addEventListener("click", () => {
  photo.classList.toggle("delete--photo");

  button.innerText = photo.classList.contains("delete--photo")
    ? "Pokaż zdjęcie"
    : "Ukryj zdjęcie";
});


backgroundButton.addEventListener("click", () => {
  body.classList.toggle("dark--body");

  backgroundButton.innerText = body.classList.contains("dark--body")
    ? "Włącz tryb jasny"
    : "Włącz tryb ciemny";
});
