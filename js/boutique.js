const cards = document.querySelectorAll(".cart-item");

cards.forEach(card => {
  card.addEventListener("click", function (e) {
    if (!e.target.closest(".close-btn")) {
      card.classList.toggle("expanded");
    }
  });
});