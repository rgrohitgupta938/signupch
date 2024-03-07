const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.getElementById("error1");
const errorPass = document.getElementById("error2");
const succ = document.getElementById("success");

email.addEventListener("change", () => {
  if (isValidEmail(email.value)) {
    errorEmail.style.display = "none";
    succ.style.display = "block";
  } else {
    errorEmail.style.display = "block";
    succ.style.display = "none";
  }
});

password.addEventListener("change", () => {
  if (isValidPassword(password.value)) {
    errorPass.style.display = "none";
    succ.style.display = "block";
  } else {
    errorPass.style.display = "block";
    succ.style.display = "none";
  }
});

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (isValidEmail(email.value) && isValidPassword(password.value)) {
    const confirmed = confirm("Do you want to sign up?");
    if (confirmed) {
      alert("Successful Signup!");
    }
  } else {
    errorEmail.style.display = "none";
    errorPass.style.display = "none";
    succ.style.display = "block";
    document.getElementById("myForm").reset();
  }
});

function isValidEmail(email) {
  return email.length >= 3 && email.includes("@") && email.includes(".");
}

function isValidPassword(password) {
  return password.length > 8;
}
