document.addEventListener("DOMContentLoaded", function () {
  // Fetch portfolio data from JSON file
  fetch("portfolio-data.json")
    .then((response) => response.json())
    .then((data) => {
      // Generate portfolio items dynamically
      const portfolioContainer = document.querySelector(
        ".portfolio-area-1 .row"
      );
      data.forEach((item) => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("col-lg-6");
        portfolioItem.innerHTML = `
                    <div class="portfolio-card">
                        <div class="portfolio-card-thumb">
                            <img src="${item.image}" alt="img">
                        </div>
                        <div class="portfolio-card-details">
                            <div class="media-left">
                                <span class="portfolio-card-details_subtitle">${item.subtitle}</span>
                                <h4 class="portfolio-card-details_title"><a href="project-details.html?id=${item.id}">${item.title}</a></h4>
                            </div>
                            <a href="project-details.html?id=${item.id}" class="icon-btn">
                                <img src="assets/img/icon/arrow-up-right.svg" alt="">
                            </a>
                        </div>
                    </div>
                `;
        portfolioContainer.appendChild(portfolioItem);
      });
    })
    .catch((error) => console.error("Error fetching portfolio data:", error));
});
