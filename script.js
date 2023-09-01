// get elements
const btn = document.querySelector("#join");
const xBtn = document.querySelector("i");
const offer = document.querySelector(".offer");
const welcome = document.querySelector(".welcome");
// variables

// functions

function handleClick() {
  offer.classList.remove("hidden");
  offer.classList.add("downPosition");
  welcome.classList.add("filters");
}

function handleXBtn() {
  offer.classList.remove("downPosition");
  offer.classList.add("upPosition");
  offer.classList.add("hidden");
  welcome.classList.remove("filters");
}
// eventListeners
btn.addEventListener("click", handleClick);
xBtn.addEventListener("click", handleXBtn);
