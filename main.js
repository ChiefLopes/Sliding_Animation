const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
  if (index % 2 === 1) {
    box.style.backgroundColor = "red";
  }
});

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  triggerBotttom = window.innerHeight / 5 * 4;


  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBotttom) {
        box.classList.add("show")
    } else {
    box.classList.remove("show")}
  }) 
}


