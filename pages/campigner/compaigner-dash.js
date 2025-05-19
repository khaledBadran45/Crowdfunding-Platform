// #createCompaignForm =
class Campaigner {
  #createCompaignPage = `
 <h2 class="text-capitalize text-dark-emphasis">
            create new compaign
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            mollitia necessitatibus quidem ullam sit deserunt aliquid
            perferendis quasi aliquam velit.
          </p>
 <form>
          <div class="row">
            <div class="col-md-8 mx-auto">
              <div>
                <div class="container">
                  <label for="fileImages" class="header">
                    <div class="wrapper w-100 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <p>Browse images to upload!</p>
                  </label>
                  <input id="fileImages" multiple class="d-none" type="file" />
                </div>
              </div>
            </div>
            <div class="col-md-8">
           
              <div
                class="row justify-content-around uplaoded_images_contaienr"
              ></div>
            </div>
            <div class="col-md-6">
              <div>
                <div class="mb-3">
                  <label for="Title">Title</label>
                  <input type="text" name="Title" class="form-control" id="Title" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <div class="mb-3">
                  <label for="Description">Description</label>
                  <input type="text" name="Description" class="form-control" id="Description" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <div class="mb-3">
                  <label for="Goal">Goal</label>
                  <input type="text" name="Goal" class="form-control" id="Goal" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <div class="mb-3">
                  <label for="Deadline">Deadline</label>
                  <input type="date" name="Deadline" class="form-control" id="Deadline" />
                </div>
              </div>
            </div>
            <h4>Rewards</h4>
            <div class="row justify-content-center">
            <div class="col-md-4">
            <div class="mb-3">
            <label for="limit">limit</label>
            <input type="text" name="limit" class="form-control" id="limit" />
          </div>
            </div>
              <div class="col-md-4">
                <div class="mb-3">
                <label for="Reward_Title">Reward Title</label>
                <input type="text" name="Reward_Title" class="form-control" id="Reward_Title" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="">
              <input type="button" name="addReward" class="mt-4 bg-primary border-0 rounded-2 text-white text-capitalize" value="new reward" id="Reward Title" />
            </div>
              </div>
          <!-- Add your dashboard content here -->
        </div>
        <div class="col-4 ms-auto">
          <input type="submit"  name="submit compaign" class="mt-4 w-100 bg-primary border-0 rounded-2 text-white text-capitalize" value="new compaign" id="compaignBtn" />
        </div> 
      </form>
  `;
  #compaigns = [];
  #compaignDetailsUpdate = `<h2 class="text-capitalize text-dark-emphasis">
            Update Compaign Details
          </h2>
          <div class="comapignData">
            <div class="row justify-content-start align-content-center">
              <!-- <div class="col-md-10 mx-auto">
                  <div class="container">
                    <label for="fileImages" class="header">
                      <div class="wrapper w-100 text-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <p>Browse images to upload!</p>
                    </label>
                    <input id="fileImages" multiple class="d-none" type="file" />
                  </div>
              
            </div> -->
            <div class="col-md-4">
              <div class="mb-3">
                <label for="title">title</label>
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  id="title"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="Description">Description</label>
                <input
                  type="text"
                  name="Description"
                  class="form-control"
                  id="Description"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="deadline">deadline</label>
                <input
                  type="date"
                  name="deadline"
                  class="form-control"
                  id="deadline"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="goal">goal</label>
                <input
                  type="text"
                  name="goal"
                  class="form-control"
                  id="goal"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="news">compaign news</label>
                <input
                  type="text"
                  name="news"
                  class="form-control"
                  id="news"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mt-4">
                <input
                  type="button"
                  name="patch"
                  value="patch"
                  class="btn w-100 btn-primary ms-auto"
                  id="patch"
                />
              </div>
            </div>
          </div>
          <div
            class="row compaignRow justify-content-start align-items-center"
          ></div>
        </div>`;
  #compaignNewsUpdate = "";
  #createCompaignForm;
  compaignImages = [];
  #compaignRewards = [];
  constructor() {
    // this.setupTheUpdateCampaigns();
    this.SetupTheCreationOfTheCompaign();
    // setup Upadtion copmaigns
    // patch the compaigns to the input
    // get the input then attach the compaigns
    // Setup The Creation OF the Compaign
  }
  SetupTheCreationOfTheCompaign() {
    this.#compaignRewards = [];
    // console.log(this.#compaignRewards);
    Campaigner.compaignImages = [];
    // setUp Creation Page
    document.querySelector(".mainContent").innerHTML = this.#createCompaignPage;
    this.#createCompaignForm = document.querySelector("form");
    // this.getListOfimagesinBase64();
    this.#createCompaignForm.addEventListener("submit", (e) => {
      this.createCompaign(e); 
    });
    document
      .querySelector('input[name="addReward"]')
      .addEventListener("click", () => {
        this.addReward();
      });
    this.getListOfimagesinBase64();
  }
  setupTheUpdateCampaigns() {
    this.fetchCurrentCompaigns();
    document.querySelector(".mainContent").innerHTML =
      this.#compaignDetailsUpdate;
    document.querySelector(".compaignRow").addEventListener("click", (e) => {
      if (e.target.dataset.id) {
        const compaign = this.#compaigns.find((cop) => {
          cop.id == e.target.dataset.id && this.patchTheCampaigns(cop);
        });
      }
    });
  }

  patchTheCampaigns(campaign) {
    const titleInput = document.querySelector('input[name="title"]');
    titleInput.value = campaign.title;

    const descriptionInput = document.querySelector(
      'input[name="Description"]'
    );
    descriptionInput.value = campaign.description;

    const deadlineInput = document.querySelector('input[name="deadline"]');
    deadlineInput.value = campaign.deadline;

    const goalInput = document.querySelector('input[name="goal"]');
    goalInput.value = campaign.goal;
    const Images = Campaigner.compaignImages;

    const newsInp = document.querySelector('input[name="news"]');
    newsInp.value = campaign.value;
    document
      .querySelector("input[name='patch']")
      .addEventListener("click", function () {
        const title = titleInput.value;
        const description = descriptionInput.value;
        const deadline = deadlineInput.value;
        const goal = goalInput.value;
        const cam = new compaign(
          title,
          description,
          goal,
          deadline,
          [],
          [],
          newsInp.value
        );
        fetch(`http://localhost:3000/compaigns/${campaign.id}`, {
          body: JSON.stringify(cam),
          method: "PATCH",
        })
          .then((res) => {
            alert("successfully patch the Campaign with id  " + campaign.id);
          })
          .catch((res) => {
            console.log(res);
          });
      });
  }

  addReward() {
    const Reward_Title = document
      .querySelector('input[name="Reward_Title"]')
      .value.trim();
    const Limit = document.querySelector('input[name="limit"]').value.trim();
    // why this compoins rewards is return undefined
    this.#compaignRewards.push({ reward_Title: Reward_Title, limit: Limit });
    console.log(this.#compaignRewards);
    alert("you add 1 reward to the current compaign");
  }
  getImages() {
    return Campaigner.compaignImages;
  }
  createCompaign(e) {
    e.preventDefault();
    const comapign = new compaign(
      document.querySelector("input[name='Title']").value.trim(),
      document.querySelector("input[name='Description']").value.trim(),
      document.querySelector("input[name='Goal']").value.trim(),
      document.querySelector("input[name='Deadline']").value.trim(),
      "The campign just starting now",
      this.#compaignRewards,
      this.getImages()
    );
    fetch("http://localhost:3000/compaigns", {
      method: "POST",
      body: JSON.stringify(comapign),
    })
      .then((x) => {
        alert("the compaign has been created");
      })
      .catch((x) => {
        console.log(x);
      });

    console.log(comapign);
  }
  fetchCurrentCompaigns() {
    fetch("http://localhost:3000/compaigns")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.#compaigns = data;
        this.displayCompaigns(data);
      })
      .catch((x) => {
        console.log(x);
      });
  }
  compaignNewsUpdate() {}
  getListOfimagesinBase64() {
    document
      .querySelector("#fileImages")
      .addEventListener("change", function (event) {
        const files = event.target.files;
        [...files].forEach((file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            const fullBase64 = e.target.result; // Remove data prefix
            console.log(fullBase64);
            const img = document.createElement("img");
            img.src = fullBase64;
            img.style.width = "150px";
            img.style.borderRadius = "5px";
            document
              .querySelector(".uplaoded_images_contaienr")
              .appendChild(img);
            // want this to be on the claass

            Campaigner.compaignImages.push(fullBase64);
            console.log();
          };
          reader.onerror = function (err) {
            console.log("error while reading files: " + err);
          };
        });
      });
  }

  displayCompaigns(listOfCompaign) {
    listOfCompaign.forEach((comp) => {
      document.querySelector(
        ".compaignRow"
      ).innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12 p-2">
                <div class="d-flex justify-content-center">
                  <div
                    class="card shadow-sm position-relative overflow-hidden"
                    id="campaignCard"
                  >
                    <!-- Campaign Image -->
                    <div class="position-relative">
                      <img
                        id="campaignImage"
                        class="img-fluid"
                        alt="Campaign Cover"
                        src="${comp.images[0]}"
                        style="height: 200px; object-fit: cover; width: 300px"
                      />
                    </div>
  
                    <!-- Card Body -->
                    <div class="card-body text-start p-3">
                      <h5 id="campaignTitle" class="fw-bold mb-2 text-capitalize">
                        ${comp.title}
                      </h5>
                      <p
                        id="campaignDescription"
                        class="text-muted text-capitalize small"
                      >
                       ${comp.description}
                      </p>
                      <div class="mb-3">
                        <!-- <div
                          class="progress"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            id="campaignProgress"
                            class="progress-bar"
                            style="height: 10px"
                          ></div>
                        </div> -->
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <p class="fw-bold text-muted">Goal</p>
                          <p class="fw-semibold text-muted">${comp.goal}</p>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <p class="fw-bold text-muted">Deadline</p>
                          <p class="fw-semibold text-danger">${comp.deadline}</p>
                        </div>
                        <div class="text-end">
                          <a class="editBtn">
                            <i class="fa-solid fa-pen" data-id='${comp.id}'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
    });
  }
}

new Campaigner();
class compaign {
  constructor(title, description, goal, deadline, lastNews, rewards, images) {
    this.title = title;
    this.description = description;
    this.goal = goal;
    this.deadline = deadline;
    this.rewards = rewards;
    this.images = images;
    this.isApproved = false;
    lastNews = lastNews;
  }
}
