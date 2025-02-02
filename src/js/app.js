const button = document.querySelector(".btn1");
const popover = document.querySelector(".popover");

button.addEventListener("click", (e) => {
  e.preventDefault();
  popover.classList.toggle("_hidden");

  const { right, top, bottom, left } = button.getBoundingClientRect();

  popover.style.left =
    right - button.offsetWidth / 2 - popover.offsetWidth / 2 + "px";
  popover.style.top = top - popover.offsetHeight - 5 + "px";
});
