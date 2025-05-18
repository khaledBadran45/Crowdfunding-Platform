class Explore {
  constructor() {}
  fetchCompaigns() {
    fetch(`http://localhost:3000/campigns`)
      .then((res) => res.json())
      .then((campigns) => {
        this.displayCampigns(campigns);
      })
      .catch((x) => {
        alert(
          "sorry we are facing a problim while fetching data from the server"
        );
      });
  }

  displayCampigns(campigns) {
    campigns.forEach((comp) => {
      // display logic here
    });
  }

  /*
   * 1) get the data from the server
   * 2) Define the format of the card
   * 3) display and set the id
   * 4) onclick get the id and get redirect to the Campign Details
   * 5) on campign details of laod fetch the campign details
   */
}
