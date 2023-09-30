const title = document.querySelector("#title");

const name = localStorage.getItem("name");

title.innerHTML = `Hello ${name}. How are you?`;

const isLogin = localStorage.getItem("isLogin").toString();
if (isLogin === "false") {
  location.href = "./login.html";
  console.log(isLogin);
}

document.querySelector("#logoutBtn").addEventListener("click", function xyz() {
  localStorage.setItem("isLogin", false);
  location.href = "login.html";
});
