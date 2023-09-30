const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", function signUpFunction(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const pass = document.querySelector("#pass").value;
  const cpass = document.querySelector("#cpass").value;

  if (name) {
    if (email) {
      if (phone) {
        if (pass) {
          if (cpass) {
            if (pass === cpass) {
              const transparentBgRegister = document.querySelector(
                "#transparent__bg__register"
              );
              const modalRegister = document.querySelector("#modal__register");

              localStorage.setItem("name", name);
              localStorage.setItem("email", email);
              localStorage.setItem("phone", phone);
              localStorage.setItem("pass", pass);
              localStorage.setItem("isLogin", false);

              name.value = "";
              email.value = "";
              phone.value = "";
              pass.value = "";
              cpass.value = "";

              transparentBgRegister.style.display = "block";
              modalRegister.style.display = "flex";

              setTimeout(function xyz() {
                location.href = "login.html";
              }, 2000);
            } else {
              alert("Password and Confirm Password are mismatched");
            }
          } else {
            alert("Please Enter your Confirm Password.");
          }
        } else {
          alert("Please Enter your Password.");
        }
      } else {
        alert("Please Enter your phone.");
      }
    } else {
      alert("Please Enter your email.");
    }
  } else {
    alert("Please Enter your name.");
  }
});
