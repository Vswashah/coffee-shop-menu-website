const cards = document.querySelectorAll(".carousel-card");
  let currentIndex = 0;

  setInterval(() => {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add("active");
  }, 5000); // change every 4 seconds