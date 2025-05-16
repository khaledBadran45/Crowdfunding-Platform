const base64Images = [];
document
  .querySelector("#fileImages")
  .addEventListener("change", function (event) {
    const files = event.target.files;

    [...files].forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const fullBase64 = e.target.result;
        const base64Decoded = fullBase64.split(",")[1]; // Remove data prefix
        base64Images.push(base64Decoded);
        console.log(base64Images);
      };
      reader.onerror = function (err) {
        console.log("error while reading files: " + err);
      };
    });
  });

class Campaigner {
  #createCompaignPage = "";
  #compaignDetailsUpdate = "";
  #compaignNewsUpdate = "";
  constructor() {}
  createCompaign() {}
  compaignDetailsUpdate() {}
  compaignNewsUpdate() {}
}
