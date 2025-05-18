const users=[{
    id:1,
    name:"John Doe",
    email:"john.doe@example.com",
    description:"Lorem ipsum dolor sit amet.",
    status:"active"
},
{
    id:2,
    name:"Jane Smith",
    email:"jane.smith@example.com",
    description:"Consectetur adipiscing elit.",
    status:"inactive"
}]
const campaigns=[{
    id:1,
    name:"Campaign 1",
    description:"Lorem ipsum dolor sit amet.",
    status:"active"
},
{
    id:2,
    name:"Campaign 2",
    description:"Consectetur adipiscing elit.",
    status:"inactive"
}]

//users table
const usersTable=document.getElementById("users-table");
const usersTableBody=usersTable.querySelector("tbody");

users.forEach(user=>{
    const row=document.createElement("tr");
    row.innerHTML=`
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.description}</td>
        <td>${user.status}</td>
    `;
    usersTableBody.appendChild(row);
