const popUp = document.querySelector(".popUp");
// const signUpForm =;
document.querySelector("ul").addEventListener("click", function (e) {
  const elementId = e.target.id;
  console.log(elementId);
  if (elementId == "sign_up") {
    popUp.style.display = "flex";
    console.log("truedis");
    popUp.innerHTML = `
    <form class="form col-10 col-md-6 m-auto">
       <div class="d-flex justify-content-between align-items-center">
        <h2>sign up</h2>
        <button class="btn-close"></button>
      </div>
    <div class="flex-column">
      <label>username</label>
    </div>
    <div class="inputForm">
      <i class="fa-regular fa-user"></i>
      <input name="username" type="text" class="input" placeholder="Enter your username" />
      </div>
      <div class="usernameMsg Error_msg ">Username must be at least 3 characters ! </div>
      <div class="flex-column">
      <label>Email </label>
    </div>
    <div class="inputForm">
      <i class="fa-solid fa-at"></i>
      <input name="email" type="text" class="input" placeholder="Enter your Email" />
      </div>
      <div class="mailMsg Error_msg">Please Enter a valid email !</div>
    <div class="flex-column">
      <label>Password </label>
    </div>
    <div class="inputForm">
      <i class="fa-solid fa-lock"></i>
      <input
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
    <button class="button-submit">Sign In</button>
    <p class="p">
      Don't have an account? <span class="span">Sign Up</span>
    </p>
    <!-- <p class ="p line">Or With</p> -->

    <!-- <div class="flex-row">
      <button class="btn google">
        <svg
          version="1.1"
          width="20"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <path
            style="fill: #fbbb00"
            d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
C103.821,274.792,107.225,292.797,113.47,309.408z"
          ></path>
          <path
            style="fill: #518ef8"
            d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
          ></path>
          <path
            style="fill: #28b446"
            d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
          ></path>
          <path
            style="fill: #f14336"
            d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
C318.115,0,375.068,22.126,419.404,58.936z"
          ></path>
        </svg>

        Google</button
      ><button class="btn apple">
        <svg
          version="1.1"
          height="20"
          width="20"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 22.773 22.773"
          style="enable-background: new 0 0 22.773 22.773"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
              ></path>
              <path
                d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
              ></path>
            </g>
          </g>
        </svg>
        Apple
      </button>
    </div> 
  </form>`;
  } else if (elementId == "sign_in") {
    popUp.style.display = "flex";
    popUp.innerHTML = ` 
    <form class="form m-auto">
    <div class="d-flex justify-content-between align-items-center">
        <h2>sign in</h2>
        <button class="btn-close"></button>
      </div>
    <div class="flex-column">
      <label>Email </label>
    </div>
    <div class="inputForm">
      <i class="fa-solid fa-at"></i>
      <input name="" type="text" class="input" placeholder="Enter your Email" />
    </div>
    <div class="flex-column">
      <label>Password </label>
    </div>
    <div class="inputForm">
      <i class="fa-solid fa-lock"></i>
      <input
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
    <div class="flex-row">
      <div>
        <input name="" type="checkbox" />
        <label>Remember me </label>
      </div>
      <span class="span">Forgot password?</span>
    </div>
    <button class="button-submit">Sign In</button>
    <p class="p">
      Don't have an account? <span class="span">Sign Up</span>
    </p>
    <!-- <p class ="p line">Or With</p> -->

    <!-- <div class="flex-row">
      <button class="btn google">
        <svg
          version="1.1"
          width="20"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <path
            style="fill: #fbbb00"
            d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
C103.821,274.792,107.225,292.797,113.47,309.408z"
          ></path>
          <path
            style="fill: #518ef8"
            d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
          ></path>
          <path
            style="fill: #28b446"
            d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
          ></path>
          <path
            style="fill: #f14336"
            d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
C318.115,0,375.068,22.126,419.404,58.936z"
          ></path>
        </svg>

        Google</button
      ><button class="btn apple">
        <svg
          version="1.1"
          height="20"
          width="20"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 22.773 22.773"
          style="enable-background: new 0 0 22.773 22.773"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
              ></path>
              <path
                d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
              ></path>
            </g>
          </g>
        </svg>

        Apple
      </button>
    </div> 
  </form>`;
  }
  setupValidation();
});

function setupValidation() {
  const usernameInput = document.querySelector('input[name="username"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  console.log(usernameInput, emailInput, passwordInput);
  usernameInput.addEventListener("blur", function () {
    const username = usernameInput.value.trim();
    if (username.length < 3) {
      document.querySelector(".usernameMsg").style.display = "block";
      console.log("Username must be at least 3 characters.");
    } else {
      document.querySelector(".usernameMsg").style.display = "none";
    }
  });

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

  passwordInput.addEventListener("blur", function () {
    const password = passwordInput.value.trim();
    if (password.length < 6) {
      document.querySelector(".passMsg").style.display = "block";
    } else {
      document.querySelector(".passMsg").style.display = "none";
    }
  });
}
