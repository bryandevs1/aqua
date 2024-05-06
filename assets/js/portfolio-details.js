document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  fetch("portfolio-data.json")
    .then((response) => response.json())
    .then((data) => {
      const projectDetails = data.find((item) => item.id == id);
      if (projectDetails) {
        const detailsContainer = document.querySelector(
          ".portfolio-deatils-area .row"
        );

        // Create a list element
        const keyStakeholdersList = document.createElement("ul");
        const scope = document.createElement("ul");

        // Populate the list with list items for each key stakeholder
        projectDetails.scope.forEach((stakeholder) => {
          const listItem = document.createElement("li");
          listItem.textContent = stakeholder;
          keyStakeholdersList.appendChild(listItem);
        });
        projectDetails.key.forEach((stakeholder) => {
          const listItem = document.createElement("ol");
          listItem.textContent = stakeholder;
          scope.appendChild(listItem);
        });

        // Append the list to the details container
        detailsContainer.innerHTML = `
          <div class="col-xxl-8 col-lg-7">
            <div class="page-thumb mb-40">
              <img src="${projectDetails.image}" alt="img">
            </div>
          </div>
          <div class="col-12 order-lg-3">
            <h3 class="page-title mt-70 mb-30">${projectDetails.title}</h3>
            <p class="mb-30">${projectDetails.details}</p>
            <p class ="mb-10 mt-10"><strong>Background</strong></p>
            <p class="mb-30">${projectDetails.background}</p>
            <p class ="mb-10 mt-10"><strong>Scope of work</strong></p>
            ${keyStakeholdersList.outerHTML} <!-- Insert the list HTML -->
            <p class ="mb-10 mt-10"><strong>Key Stakeholders</strong></p>
            <p class="-ml-30">${scope.outerHTML}</p>
            <p class ="mb-10 mt-10"><strong>Notable Milestones</strong></p>
            <p class="mb-30">${projectDetails.notable}</p>
          </div>
          <div class="col-xxl-4 col-lg-5 order-lg-2">
            <aside class="sidebar-area">
              <div class="widget widget_project-info">
                <h3 class="widget_title">Project Information</h3>
                <p class="widget-text">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc</p>
                <ul>
                  <li>
                    <strong>Category: </strong>
                    <span>Corporate, business</span>
                  </li>
                  <li>
                    <strong>Rating: </strong>
                    <span>
                      <span class="star-ratting">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        `;
      } else {
        console.error("Project details not found");
      }
    })
    .catch((error) => console.error("Error fetching project details:", error));
});
