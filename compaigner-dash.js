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
  #compaignDetailsUpdate = "";
  #compaignNewsUpdate = "";
  #createCompaignForm;
  static compaignImages = [];
  #compaignRewards = [];
  constructor() {
    this.#compaignRewards = [];
    // console.log(this.#compaignRewards);
    this.compaignImages = [];
    document.querySelector(".mainContent").innerHTML = this.#createCompaignPage;
    this.#createCompaignForm = document.querySelector("form");
    console.log(this.#createCompaignForm);
    this.getListOfimagesinBase64();
    this.#createCompaignForm.addEventListener("submit", (e) => {
      this.createCompaign(e);
    });
    document
      .querySelector('input[name="addReward"]')
      .addEventListener("click", () => {
        this.addReward();
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
  compaignDetailsUpdate() {}
  compaignNewsUpdate() {}
  getListOfimagesinBase64() {
    document
      .querySelector("#fileImages")
      .addEventListener("change", function (event) {
        const files = event.target.files;
        [...files].forEach((file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (e) {
            const fullBase64 = e.target.result; // Remove data prefix
            console.log(fullBase64);
            console.log(fullBase64);
            const img = document.createElement("img");
            img.src = fullBase64;
            img.style.width = "150px";
            img.style.borderRadius = "5px";
            document
              .querySelector(".uplaoded_images_contaienr")
              .appendChild(img);
            Campaigner.compaignImages.push(fullBase64);
          };
          reader.onerror = function (err) {
            console.log("error while reading files: " + err);
          };
        });
      });
  }
}
new Campaigner();
class compaign {
  constructor(title, description, goal, deadline, rewards, images) {
    this.title = title;
    this.description = description;
    this.goal = goal;
    this.deadline = deadline;
    this.rewards = rewards;
    this.images = images;
    this.isApproved = false;
  }
}
