const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function loginFunction(e) {
  e.preventDefault();

  const email = document.querySelector("#loginEmail").value;
  const pass = document.querySelector("#loginPass").value;

  const transparentBgLogin = document.querySelector("#transparent__bg__login");
  const modalLogin = document.querySelector("#modal__login");

  const emailFromStorage = localStorage.getItem("email", email);
  const passFromStorage = localStorage.getItem("pass", pass);

  if (email) {
    if (pass) {
      if (email == emailFromStorage && pass == passFromStorage) {
        console.log("Login Successfull");
        localStorage.setItem("isLogin", true);
        transparentBgLogin.style.display = "block";
        modalLogin.style.display = "flex";
        setTimeout(function xyz() {
          location.href = "/";
        }, 2000);
        email.value = "";
        pass.value = "";
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please Enter your password.");
    }
  } else {
    alert("Please Enter your email.");
  }
});
