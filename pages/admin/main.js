fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((users) => {
    document.getElementById("user-count").textContent = users.length;
    console.log(users);
    const usersTableBody = document.querySelector("#users-table tbody");
    if (users.length) {
      users.forEach((user) => {
        const row = document.createElement("tr");
        row.dataset.id = user.id;
        row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
      <td>${user.role}</td>
        <td class="user-status">${user.status || "Pending"}</td>
        <td><button class="btn btn-primary activate">Activate</button></td>
        <td><button class="btn btn-danger ban">Ban</button></td>
        <td><button class="btn btn-danger delete">delete</button></td>
      `;
        usersTableBody.appendChild(row);
      });
    }else{
      console.log('there iows');
    }
    updateCounts();
  });

fetch("http://localhost:3000/campaigns")
  .then((res) => res.json())
  .then((campaigns) => {
    document.getElementById("campaign-count").textContent = campaigns.length;

    const campaignsTableBody = document.querySelector("#campaigns-table tbody");
    campaigns.forEach((c) => {
      const row = document.createElement("tr");
      console.log(c.id);
      row.dataset.id = c.id;
      row.innerHTML = `
        <td>${c.title}</td>
        <td>${c.description}</td>
       
        <td class="campaign-status">${
          c.isApproved ? "Approved" : "Pending"
        }</td>
        <td><button class="btn btn-primary approve">Approve</button></td>
        <td><button class="btn btn-warning pause">Pause</button></td>
        <td><button class="btn btn-danger delete-campaign">Delete</button></td>
      `;
      campaignsTableBody.appendChild(row);
    });

    updateCounts();
  });

document.getElementById("users-table").addEventListener("click", function (e) {
  const row = e.target.closest("tr");
  const userId = row.dataset.id;
  if (e.target.classList.contains("activate")) {
    row.querySelector(".user-status").textContent = "Active";
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Active" }),
    });
  } else if (e.target.classList.contains("ban")) {
    row.querySelector(".user-status").textContent = "Banned";
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Banned" }),
    });
  } else if (e.target.classList.contains("delete")) {
    row.querySelector(".user-status").textContent = "delete";
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
  updateCounts();
});

document
  .getElementById("campaigns-table")
  .addEventListener("click", function (e) {
    const row = e.target.closest("tr");
    const campaignId = row.dataset.id;
    console.log(campaignId);
    if (e.target.classList.contains("approve")) {
      row.querySelector(".campaign-status").textContent = "Approved";
      fetch(`http://localhost:3000/campaigns/${campaignId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isApproved: true }),
      });
    } else if (e.target.classList.contains("pause")) {
      row.querySelector(".campaign-status").textContent = "Paused";
      fetch(`http://localhost:3000/campaigns/${campaignId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isApproved: false }),
      });
    } else if (e.target.classList.contains("delete-campaign")) {
      row.remove();
      fetch(`http://localhost:3000/campaigns/${campaignId}`, {
        method: "DELETE",
      });
    }

    updateCounts();
  });

function updateCounts() {
  const activeUsers = document.querySelectorAll(".user-status");
  let activeCount = 0;
  activeUsers.forEach((status) => {
    if (status.textContent === "Active") activeCount++;
  });
  document.getElementById("active-users-count").textContent = activeCount;

  const approvedCampaigns = document.querySelectorAll(".campaign-status");
  let approvedCount = 0;
  approvedCampaigns.forEach((status) => {
    if (status.textContent === "Approved") approvedCount++;
  });
  document.getElementById("approved-campaigns-count").textContent =
    approvedCount;
}

document.getElementById("show-users").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("users-table").style.display = "block";
  document.getElementById("campaigns-table").style.display = "none";
});

document.getElementById("show-campaigns").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("users-table").style.display = "none";
  document.getElementById("campaigns-table").style.display = "block";
});
