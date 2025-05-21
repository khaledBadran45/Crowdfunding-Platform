const user = JSON.parse(localStorage.getItem("token"));
fetch(`http://localhost:3000/campaigns?_start=10&_limit=5`)
  .then((res) => res.json())
  .then((campigns) => {
    this.camps = campigns;

    this.displayCampigns(campigns);
  })
  .catch((x) => {});

function displayCampigns(campigns) {
  document.querySelector(".ExpoloreMoreComp .row").innerHTML = "";
  campigns.forEach((comp) => {
    // display logic here
    document.querySelector(".ExpoloreMoreComp .row").innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-10 p-2">
        <div class="d-flex justify-content-center">
          <div class="card shadow-sm position-relative overflow-hidden">
            <div class="position-relative">
              <img
                src="${comp.images[0]}"
                class="recently-card-img-top w-100 h-100"
                alt="recently funded"
              />
              <div
                class="overlay bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100"
              ></div>
              <h5
                class="title-overlay position-absolute top-50 start-50 translate-middle text-white text-center fw-bold px-2"
              >${comp.title}</h5>
            </div>
            <div class="recently-card-body text-start p-2">
              <p class="text-muted fw-semibold fs-6">${comp.description}</p>
              <div class="p-2">
                <div class="d-flex justify-content-between align-items-center w-100">
                  <h6 class="text-card fs-5">45$</h6>
                  <span class="text-card fs-6 fw-semibold">of ${comp.goal} target</span>
                </div>
                <div class="d-flex justify-content-between align-items-center w-100">
                  <h6 class="text-card fs-5">deadline</h6>
                  <span class="text-card fs-6 fw-semibold">${comp.deadline}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    document.querySelector(".card").addEventListener("click", function (e) {
      console.log(e.target.dataset.id);
    });
  });
}
