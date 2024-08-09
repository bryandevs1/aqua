document.addEventListener("DOMContentLoaded", function () {
  const sectors = document.querySelectorAll(".sector");
  let currentIndex = 0;

  function showNextSector() {
    sectors.forEach((sector, index) => {
      sector.style.opacity = "0"; // Hide all sectors
    });

    sectors[currentIndex].style.opacity = "1"; // Show the current sector
    currentIndex = (currentIndex + 1) % sectors.length; // Move to the next sector

    setTimeout(showNextSector, 5000); // Adjust the timeout based on desired duration
  }

  showNextSector(); // Start the animation
});
