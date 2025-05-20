class Pledges {
  user;
  constructor() {
    this.user = JSON.parse(localStorage.getItem("token")) || "anonymous";
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
    if (campaign) {
      this.displayPledge(campaign, amount);
    }
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
