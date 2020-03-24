// SIGNUP Validator
// ...
// ...
const signupInputValidator = () => {
  //inputs
  const form = document.getElementById("registration_form");
  const firstname = document.getElementById("firstname_input");
  const email = document.getElementById("email_input");
  const password = document.getElementById("password_input");
  const confirmPassword = document.getElementById("confirmPassword_input");
  const toggle_btn1 = document.getElementById("reveal_password1");
  const toggle_btn2 = document.getElementById("reveal_password2");
  const submit_btn = document.getElementById("submit-btn");
  const required_inputs = document.querySelectorAll("input");

  //CSS error-message class selectors to be toggled
  const error_txt_firstname = document.getElementById("error_txt_firstname");
  const error_txt_email = document.getElementById("error_txt_email");
  const error_txt_password = document.getElementById("error_txt_password");
  const error_txt_confirmPassword = document.getElementById(
    "error_txt_confirmPassword"
  );

  //Event Listeners
  //...
  firstname.addEventListener("input", validateInput);
  email.addEventListener("input", validateInput);
  password.addEventListener("input", validateInput);
  confirmPassword.addEventListener("input", validateInput);

  password.addEventListener("focus", toggleBtn_Show);
  password.addEventListener("blur", toggleBtn_Hide);
  confirmPassword.addEventListener("focus", toggleBtn_Show);
  confirmPassword.addEventListener("blur", toggleBtn_Hide);

  //toggle password-toggle-icon visibility
  function toggleBtn_Show(e) {
    const sibling = e.target.nextElementSibling;
    console.log(sibling);
    sibling.classList.add("password-toggle");
  }
  function toggleBtn_Hide(e) {
    const sibling = e.target.nextElementSibling;
    console.log(sibling);
    sibling.classList.remove("password-toggle");
  }

  //TODO: make toggler work...ARGHh
  toggle_btn1.addEventListener("click", () => {
    password.focus();
    console.log("just tapped");
    password.type == "password"
      ? (password.type = "text")
      : (password.type = "password");
  });
  toggle_btn2.addEventListener("click", () => {});

  //show password as plaintext
  function passwordReveal(e) {
    e.target.name;
  }

  //Input validator
  function validateInput(e) {
    console.log(e.target.value);
    const value = e.target.value;
    const target = e.target.name;

    if (target === "firstname") {
      if (value.length > 1) {
        submit_btn.removeAttribute("disabled");
        error_txt_firstname.classList.remove("error-active");
      } else {
        submit_btn.setAttribute("disabled", false);
        error_txt_firstname.classList.add("error-active");
      }
    }
    if (target === "email") {
      if (value.length > 6) {
        submit_btn.removeAttribute("disabled");
        error_txt_email.classList.remove("error-active");
      } else {
        submit_btn.setAttribute("disabled", false);
        error_txt_email.classList.add("error-active");
      }
    }

    if (target === "password") {
      if (value.length > 5) {
        submit_btn.removeAttribute("disabled");
        error_txt_password.classList.remove("error-active");
      } else {
        submit_btn.setAttribute("disabled", false);
        error_txt_password.classList.add("error-active");
      }
    }

    if (target === "confirmPassword") {
      if (value.length > 5) {
        submit_btn.removeAttribute("disabled");
        error_txt_confirmPassword.classList.remove("error-active");
        //TODO:unfreeze button
      } else {
        submit_btn.setAttribute("disabled", false);
        error_txt_confirmPassword.classList.add("error-active");
      }
    }
  }
};


// LOGIN VALIDATOR
// ...
// ...

const loginInputValidator = () => {
  //inputs
  const form = document.getElementById("registration_form");
  const email = document.getElementById("email_input");
  const password = document.getElementById("password_input");
  const toggle_btn1 = document.getElementById("reveal_password1");
  const submit_btn = document.getElementById("submit-btn");

  //CSS error-message class selectors to be toggled
  const error_txt_email = document.getElementById("error_txt_email");
  const error_txt_password = document.getElementById("error_txt_password");
  

  //Event Listeners
  //...
  email.addEventListener("input", validateInput);
  password.addEventListener("input", validateInput);

  password.addEventListener("focus", toggleBtn_Show);
  password.addEventListener("blur", toggleBtn_Hide);

  //toggle password-toggle-icon visibility
  function toggleBtn_Show(e) {
    const sibling = e.target.nextElementSibling;
    console.log(sibling);
    sibling.classList.add("password-toggle");
  }
  function toggleBtn_Hide(e) {
    const sibling = e.target.nextElementSibling;
    console.log(sibling);
    sibling.classList.remove("password-toggle");
  }

  //TODO: make toggler work...ARGHh
  toggle_btn1.addEventListener("click", () => {
    password.focus();
    console.log("just tapped");
    password.type == "password"
      ? (password.type = "text")
      : (password.type = "password");
  });

  //show password as plaintext
  function passwordReveal(e) {
    e.target.name;
  }

  //Input validator
  function validateInput(e) {
    console.log(e.target.value);
    const value = e.target.value;
    const target = e.target.name;

    if (target === "email") {
      if (value.length > 6) {
        submit_btn.removeAttribute("disabled");
        error_txt_email.classList.remove("error-active");
      } else {
        submit_btn.setAttribute("disabled", false);
        error_txt_email.classList.add("error-active");
      }
    }

    if (target === "password") {
      if (value.length > 5) {
        submit_btn.removeAttribute("disabled");
        error_txt_password.classList.remove("error-active");
      } else {
        submit_btn.setAttribute("disabled", false);
        error_txt_password.classList.add("error-active");
      }
    }

    
  }
};

//init

