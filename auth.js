const isLoggedIn = JSON.parse(localStorage.getItem("token")) || false;
isLoggedIn && handleUserLoign();
const popUp = document.querySelector(".popUp");
// const signUpForm =;
document.querySelector("ul").addEventListener("click", function (e) {
  const elementId = e.target.id;
  console.log(elementId);
  if (elementId == "sign_up") {
    popUp.style.display = "flex";
    console.log("truedis");
    popUp.innerHTML = `<form class="form col-10 col-md-6 p-3 m-auto">
     <div class="d-flex justify-content-between align-items-center">
      <h2>sign up</h2>
      <button type='button' class="btn-close"></button> 
      </div> 
      <div class="flex-column">
      <label>username</label> </div>
      <div class="inputForm"> <i class="fa-regular fa-user"></i>
      <input name="username" type="text" minLength="3" class="input" placeholder="Enter your username" /> 
      </div> <div class="usernameMsg Error_msg ">Username must be at least 3 characters ! </div>
      <div class="flex-column"> <label>Email </label>
      </div> <div class="inputForm"> <i class="fa-solid fa-at"></i> <input name="email" type="text" class="input" placeholder="Enter your Email" />
        </div> <div class="mailMsg Error_msg">Please Enter a valid email !</div>
        <div class="flex-column"> <label>Password </label> </div> 
        <div class="inputForm"> <i class="fa-solid fa-lock"></i> 
        <input
        min="6"
        type="password"
        class="input"
        placeholder="Enter your Password"
        name="password"
        />
</div>

<div class="passMsg Error_msg">Password must be at least 6 characters</div>

<div class="flex-column"> <label>User Role </label> </div> 
<div class="inputForm"> <i class="fa-solid fa-user-tag"></i> 
  <select name="role" class="input">
    <option value="">Select a role</option>
    <option value="backer">backer</option>
    <option value="compaigner">compaigner</option>
  </select>
</div>
<div class="roleMsg Error_msg">Please select a role</div>

<div class="flex-row">
  <div>
    <input name="remember" type="checkbox" />
    <label>Remember me </label>
  </div>
  <span class="span">Forgot password?</span>
</div>
<button type="submit" class="button-submit">Sign Up</button>
<p class="p">
  Already have an account? <span class="span">Sign In</span>
</p>
</form>`;
  } else if (elementId == "sign_in") {
    popUp.style.display = "flex";
    popUp.innerHTML = `<form class="form col-10 col-md-6 p-3 m-auto">
     <div class="d-flex justify-content-between align-items-center">
      <h2>sign in</h2>
       <button class="btn-close"></button> </div> 
        <div class="flex-column"> <label>Email </label> </div> <div class="inputForm"> <i class="fa-solid fa-at"></i>
         <input name="email" type="text" class="input" placeholder="Enter your Email" /> </div> <div class="mailMsg Error_msg">Please Enter a valid email !</div> <div class="flex-column"> <label>Password </label> </div> <div class="inputForm"> <i class="fa-solid fa-lock"></i> <input
   name="password"
   type="password"
   class="input"
   placeholder="Enter your Password"
   />

  <svg
    viewBox="0 0 576 512"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
    ></path>
  </svg>
</div>
<div class="passMsg Error_msg">Password must be at least 6 characters</div>
<div class="flex-row">
  <div>
    <input name="remember" type="checkbox" />
    <label>Remember me </label>
  </div>
  <span class="span">Forgot password?</span>
</div>
<button type="submit" class="button-submit">Sign In</button>
<p class="p">
  Don't have an account? <span class="span">Sign Up</span>
</p>
</form>`;
  }
  setupValidation();
});

function setupValidation() {
  const usernameInput = document.querySelector('input[name="username"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const roleSelect = document.querySelector('select[name="role"]');

  // Username validation
  if (usernameInput) {
    usernameInput.addEventListener("blur", function () {
      const username = usernameInput.value.trim();
      if (username.length < 3) {
        document.querySelector(".usernameMsg").style.display = "block";
        console.log("Username must be at least 3 characters.");
      } else {
        document.querySelector(".usernameMsg").style.display = "none";
      }
    });
  }

  // Email validation
  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      const email = emailInput.value.trim();
      // Email validation (basic regex)
      const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
      if (!emailRegex.test(email)) {
        document.querySelector(".mailMsg").style.display = "block";
      } else {
        document.querySelector(".mailMsg").style.display = "none";
      }
    });
  }

  // Password validation
  if (passwordInput) {
    passwordInput.addEventListener("blur", function () {
      const password = passwordInput.value.trim();
      if (password.length < 6) {
        document.querySelector(".passMsg").style.display = "block";
      } else {
        document.querySelector(".passMsg").style.display = "none";
      }
    });
  }

  // Role validation
  if (roleSelect) {
    roleSelect.addEventListener("change", function () {
      const role = roleSelect.value.trim();
      if (!role) {
        document.querySelector(".roleMsg").style.display = "block";
      } else {
        document.querySelector(".roleMsg").style.display = "none";
      }
    });
  }

  // Close button functionality
  // document.querySelector(".btn-close").addEventListener("click", () => {
  //   popUp.style.display = "none";
  // });

  // Form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // For sign up form
      if (usernameInput && emailInput && passwordInput && roleSelect) {
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const role = roleSelect.value.trim();

        // Validate all fields
        let isValid = true;

        if (username.length < 3) {
          document.querySelector(".usernameMsg").style.display = "block";
          isValid = false;
        }

        const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
        if (!emailRegex.test(email)) {
          document.querySelector(".mailMsg").style.display = "block";
          isValid = false;
        }

        if (password.length < 6) {
          document.querySelector(".passMsg").style.display = "block";
          isValid = false;
        }

        if (!role) {
          document.querySelector(".roleMsg").style.display = "block";
          isValid = false;
        }

        if (isValid) {
          const user = {
            username: username,
            email: email,
            password: password,
            role: role,
            isActive: true,
          };

          userSignUp(user.email).then((isTrue) => {
            if (isTrue) {
              alert("User with this email already exists");
            } else {
              alert("User registered successfully");
              addUser(user);
            }
          });
        }
      }
      // For sign in form
      else if (emailInput && passwordInput) {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
        if (!emailRegex.test(email)) {
          document.querySelector(".mailMsg").style.display = "block";
          isValid = false;
        }

        if (password.length < 6) {
          document.querySelector(".passMsg").style.display = "block";
          isValid = false;
        }

        if (isValid) {
          // const user = { email: email, password: password };

          login(email, password).then((state) => {
            if (state) {
              handleUserLoign({ email, password });
            } else {
              alert("this mail dosent exist");
            }
          });
          popUp.style.display = "none";

          // Handle sign in logic here
        }
      }
    });
  }

  async function userSignUp(userEmail) {
    const users = await fetch("http://localhost:3000/users").then(
      (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
    );
    return users.some((user) => user.email === userEmail);
  }

  async function login(userEmail, userPassword) {
    const users = await fetch("http://localhost:3000/users").then(
      (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
    );
    return users.some(
      (user) => user.email === userEmail && user.password == userPassword
    );
  }

  //if user logged in
  // 1) add  to the local storage .
  // 2) appear the dashbord btn to locate to his dashbord .
  // 3) locate user Home
  // 4)
  // return users.some((user) => user.email == userEmail);
}
function addUser(user) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("User added successfully:", data);
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
}
function handleUserLoign(user) {
  if (user) {
    localStorage.setItem("token", JSON.stringify(user));
  }
  document.querySelector("#dashbord").classList.remove("d-none");
  document.querySelector("#sign_in").classList.add("d-none");
  document.querySelector("#sign_up").classList.add("d-none");
}
