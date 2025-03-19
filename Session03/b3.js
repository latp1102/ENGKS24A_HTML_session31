let body = document.body;
let items = document.querySelectorAll(".item"); 

items.forEach((el) => {
  el.onclick = function () {
    let bgColor = window.getComputedStyle(el).backgroundColor;
    body.style.backgroundColor = bgColor;
  };
});
