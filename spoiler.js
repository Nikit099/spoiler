const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  const title = e.target.closest(".title");
  const card = e.target.closest(".card");

  if (card) {
    if (title) {
      title.classList.toggle("active");
      if (card.children[1].style.display === "block") {
        card.children[1].style.display = "none";
      } else {
        card.children[1].style.display = "block";
      }
    }
  }
});
