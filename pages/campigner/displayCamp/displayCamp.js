function setupTheUpdateCampaigns() {
  this.fetchCurrentCompaigns();
  document.querySelector(".mainContent").innerHTML = this.compaignDetailsUpdate;
  document.querySelector(".compaignRow").addEventListener("click", (e) => {
    if (e.target.dataset.id) {
      const compaign = this.compaigns.find((cop) => {
        cop.id == e.target.dataset.id && this.patchTheCampaigns(cop);
      });
    }
  });
}
