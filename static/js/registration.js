const registrationInputValidator = () => {
  const form = document.getElementById("registration_form");
  const firstname = document.getElementById("firstname_input");
  const email = document.getElementById("email_input");
  const password = document.getElementById("password_input");
  const confirmPassword = document.getElementById("confirmPassword_input");
  const submit_btn = document.getElementById("submit-btn");
  const required_inputs = document.querySelectorAll("input");

  //CSS error-message class selectors
  const error_txt_email = document.getElementById("error_txt_email");
  const error_txt_password = document.getElementById("error_txt_password");
  const error_txt_confirmPassword = document.getElementById(
    "error_txt_confirmPassword"
  );

  // Event Listeners
  email.addEventListener("input", validate);
  password.addEventListener("input", validate);
  confirmPassword.addEventListener("input", validate);


  function validate(e) {
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

  // Check/ Allow toggling of button after satisfaction of input requirements
};

//init
registrationInputValidator();
