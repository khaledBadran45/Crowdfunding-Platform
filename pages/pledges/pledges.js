class Pledges {
  user;
  constructor() {
    this.user = JSON.parse(localStorage.getItem("token")) || "anonymous";
    console.log(this.user.role);
    if (this.user.role == "backer") {
      document.querySelector("#pledges").classList.remove("d-none");
    }
    // document.querySelector(".loader-wrapper").style.opacity = 1;
    this.fetchCompaigns();
  }
  fetchCompaigns() {
    fetch("http://localhost:3000/compaigns")
      .then((res) => res.json())
      .then((campaigns) => {
        this.campaigns = campaigns;
        this.fetchPledges();

        // document.querySelector(".loader-wrapper").style.opacity = 0;
      })
      .catch((err) => {
        console.error("Error fetching pledges:", err);
      });
  }
  fetchPledges() {
    fetch("http://localhost:3000/pledges")
      .then((res) => res.json())
      .then((pledges) => {
        this.displayPledgeState(pledges);
        pledges.forEach((pld) => {
          this.getCampaignDetails(pld.campaignId, pld.amount);
        });
      })
      .catch((err) => {
        console.error("Error fetching pledges:", err);
      });
  }

  getCampaignDetails(campaignId, amount) {
    const campaign = this.campaigns.find((cam) => cam.id == campaignId);
    this.displayPledge(campaign, amount);
  }
  displayPledge(campaign, amount) {
    const pledges_container = document.querySelector(".pledges_container");
    pledges_container.innerHTML += `
     <div class="mb-4">
              <div class="card-body">
                <div class="row">
                  <!-- Pledge Item 1 -->
                  <div class="">
                    <div class="card pledge-card">
                      <div class="row">
                        <div class="col-md-3">
                          <img
                            src="${campaign.images[0]}"
                            class="img-fluid rounded-start campaign-image w-100 h-100"
                            alt="Campaign Image"
                          />
                        </div>
                        <div class="col-md-9">
                          <div class="card-body h-100 d-flex flex-column">
                            <div class="d-flex justify-content-between">
                              <h5 class="card-title mb-1">${campaign.title}</h5>
                            </div>
                            <p class="text-muted mb-2">
                             ${this.user.username}
                            </p>

                            <div class="mb-2">
                              <span class="badge bg-primary">
                                <i class="bi bi-currency-dollar me-1"></i>${amount}
                              </span>
                            </div>

                            <div class="progress mb-2">
                              <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style="width: 125%"
                                aria-valuenow="125"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div class="d-flex justify-content-between mt-auto">
                              <div>
                                <small class="text-muted"
                                  >Pledged on: May 15, 2023</small
                                >
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Empty State (hidden by default) -->
                <div class="empty-state d-none">
                  <i class="bi bi-heart text-muted" style="font-size: 3rem"></i>
                  <h4 class="mt-3">No pledges yet</h4>
                  <p class="text-muted">
                    You haven't pledged to any campaigns. Discover amazing
                    projects to support!
                  </p>
                  <a href="index.html" class="btn btn-primary mt-2"
                    >Browse Campaigns</a
                  >
                </div>
              </div>
            </div>`;
  }
  displayPledgeState(plds) {
    let totalAmount = 0;

    plds.forEach((pld) => {
      totalAmount += parseInt(pld.amount);
    });
    // const am = pld.flatMap((x) => Number(x.amount));
    document.querySelector(
      ".pledge_stats"
    ).innerHTML = `<h5 class="card-title">Pledge Stats</h5>
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">Total Pledges</span>
                  <span class="fw-bold">${plds.length}</span>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted">Total Amount</span>
                  <span class="fw-bold">${totalAmount}$</span>
                </div>`;
  }
}
new Pledges();

/***
 * we need to display the compaigns that user doing a pledge for it ?
 * i have the pledges and
 *
 */
/**
 * 
                <!-- Pledge Item 2 -->
                <div class="col">
                  <div class="card pledge-card">
                    <div class="row g-0">
                      <div class="col-md-3">
                        <img
                          src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                          class="img-fluid rounded-start campaign-image w-100 h-100"
                          alt="Campaign Image"
                        />
                      </div>
                      <div class="col-md-9">
                        <div class="card-body h-100 d-flex flex-column">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title mb-1">
                              Eco-Friendly Water Bottle
                            </h5>
                            <span
                              class="badge bg-warning text-dark status-badge align-self-start"
                              >In Progress</span
                            >
                          </div>
                          <p class="text-muted mb-2">by Green Living Co.</p>

                          <div class="mb-2">
                            <span class="badge reward-badge me-1">
                              <i class="bi bi-gift-fill me-1"></i>Standard
                              Edition
                            </span>
                            <span class="badge bg-primary">
                              <i class="bi bi-currency-dollar me-1"></i>$45
                            </span>
                          </div>

                          <div class="progress mb-2">
                            <div
                              class="progress-bar bg-warning"
                              role="progressbar"
                              style="width: 65%"
                              aria-valuenow="65"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="d-flex justify-content-between mt-auto">
                            <div>
                              <small class="text-muted"
                                >Pledged on: June 2, 2023</small
                              >
                              <small class="d-block text-muted"
                                >Ends in: 12 days</small
                              >
                            </div>
                            <div>
                              <button
                                class="btn btn-sm btn-outline-primary me-1"
                              >
                                <i class="bi bi-eye"></i> View
                              </button>
                              <button class="btn btn-sm btn-outline-danger">
                                <i class="bi bi-x-circle"></i> Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pledge Item 3 -->
                <div class="col">
                  <div class="card pledge-card">
                    <div class="row g-0">
                      <div class="col-md-3">
                        <img
                          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                          class="img-fluid rounded-start campaign-image w-100 h-100"
                          alt="Campaign Image"
                        />
                      </div>
                      <div class="col-md-9">
                        <div class="card-body h-100 d-flex flex-column">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title mb-1">
                              The Novelist's Companion
                            </h5>
                            <span
                              class="badge bg-danger status-badge align-self-start"
                              >Failed</span
                            >
                          </div>
                          <p class="text-muted mb-2">
                            by Creative Writers Guild
                          </p>

                          <div class="mb-2">
                            <span class="badge reward-badge me-1">
                              <i class="bi bi-gift-fill me-1"></i>Signed Copy
                            </span>
                            <span class="badge bg-primary">
                              <i class="bi bi-currency-dollar me-1"></i>$75
                            </span>
                          </div>

                          <div class="progress mb-2">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              style="width: 42%"
                              aria-valuenow="42"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="d-flex justify-content-between mt-auto">
                            <div>
                              <small class="text-muted"
                                >Pledged on: April 10, 2023</small
                              >
                              <small class="d-block text-muted"
                                >Ended: May 25, 2023</small
                              >
                            </div>
                            <div>
                              <button
                                class="btn btn-sm btn-outline-primary me-1"
                              >
                                <i class="bi bi-eye"></i> View
                              </button>
                              <button class="btn btn-sm btn-outline-secondary">
                                <i class="bi bi-arrow-repeat"></i> Find Similar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
 */
