class Explore {
  campaign ;
  camp
  user;
  campaignPledges = new Map();
  constructor() {
    this.user = JSON.parse(localStorage.getItem("token")) || "anonymous";
    this.fetchCompaigns();
    this.fetchPledges();
    const form = document.querySelector(".modal-body form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        const amount = document.querySelector("input[name='amount']").value;
        const pledgeReqBody = {
          amount: amount,
          campaignId: this.campaign.id,
          userId: this.user.id,
        };
        fetch("http://localhost:3000/pledges", {
          method: "POST",
          body: JSON.stringify(pledgeReqBody),
        })
          .then((res) => {
            console.log("you are successfully add a pledge", res);
          })
          .catch((err) => {
            console.log(`problom while do the req${err}`);
          });
      }
    });
    document
      .querySelector("#sortBycategorySelect")
      .addEventListener("change", (e) => {
        this.SortByCat(e.target.value);
      });
    document
      .querySelector("#search")
      .addEventListener("keyUp", this.searchCamp());
  }
  searchCamp(campChar) {
    console.log(this.campaign)
  }

  SortByCat(categ) {
    const url =
      categ === "all"
        ? "http://localhost:3000/campaigns"
        : `http://localhost:3000/campaigns?category=${categ}`;
    if (categ)
      fetch(url)
        .then((res) => res.json())
        .then((campigns) => {
          this.displayCampigns(campigns);
        })
        .catch((x) => {});
  }
  fetchCompaigns() {
    console.log("works");
    fetch(`http://localhost:3000/campaigns?isApproved=true`)
      .then((res) => res.json())
      .then((campigns) => {
        this.displayCampigns(campigns);
      })
      .catch((x) => {
        // alert(
        //   "sorry we are facing a problim while fetching data from the server"
        // );
      });
  }
  fetchPledges() {
    fetch(`http://localhost:3000/pledges`)
      .then((res) => res.json())
      .then((pleds) => {
        this.pledgs = pleds;
      })
      .catch((x) => {
        console.log(x);
      });
  }
  displayCampigns(campigns) {
    console.log(campigns);
    document.querySelector(".ExpoloreMoreComp").innerHTML = "";
    campigns.forEach((comp) => {
      // display logic here
      document.querySelector(".ExpoloreMoreComp").innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-10 p-2">
        <div class="d-flex justify-content-center">
          <div class="card shadow-sm position-relative overflow-hidden">
            <div class="position-relative">
              <img
                src="${comp.images[0]}"
                class="recently-card-img-top"
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
                  <span class="text-card fs-6 fw-semibold">of ${
                    comp.goal
                  } target</span>
                </div>
                <div class="d-flex justify-content-between align-items-center w-100">
                  <h6 class="text-card fs-5">deadline</h6>
                  <span class="text-card fs-6 fw-semibold">${
                    comp.deadline
                  }</span>
                </div>
                ${
                  this.user.role == "backer" && this.user.status == "Active"
                    ? `<div class="text-end">
                    <button
                      data-comp='${JSON.stringify(comp)}'
                      class="pledgeBtn bg-secondary border-0 rounded-1 px-3 text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#pledgeModal"
                    >
                      Pledge
                    </button>
                  </div>`
                    : ``
                }
              </div>
            </div>
          </div>
        </div>
      </div>`;
    });
    this.addPledge();
  }
  getTotalPledgesAmounts(campaignId) {
    // const p = this.pledgs.filter((pld) => pld.campaignId == campaignId);
    // let sum = 0;
    // p.forEach((p) => {
    //   sum += Number(p.amount);
    // });
    return sum;
    /**
     * 1- Filter the pldges to return the same campigns id like the given one
     * 2- and then summion all pledges .
     * get all pledges
     * -----------------------------------------------------------------------
     * onTheApp
     *
     */
  }
  addPledge() {
    document.querySelectorAll(".pledgeBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.campaign = JSON.parse(e.target.dataset.comp);
      });
    });
  }
}
new Explore();
