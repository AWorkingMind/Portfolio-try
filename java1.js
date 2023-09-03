const word = document.querySelectorAll(".word");

function toggleOpen() {
    this.classList.toggle("open")
}

word.forEach(word => word.addEventListener("click", toggleOpen));