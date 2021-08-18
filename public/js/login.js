//form to login to an existing account
const form = {
  submit: document.querySelector("#submitBtn"),
};

let submitForm = form.submit.addEventListener("click", (event) => {
  event.preventDefault();

  let email = document.querySelector("#orgEmail").value.trim();
  let password = document.querySelector("#orgPassword").value.trim();

  if (email && password) {
    const response = fetch("/api/organization/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Login failed. Try again.");
      }
    });
  }
});

//new org sign-up (account)
const newAccount = async (event) => {
  event.preventDefault();

  const organizationName = document.getElementById("organization_name").value;
  const newEmail = document.getElementById("email-signup").value.trim();
  const newPassword = document.getElementById("password-signup").value.trim();

  if (organizationName && newEmail && newPassword) {
    const response = await fetch("/api/organization/signup", {
      method: "POST",
      body: JSON.stringify({
        organization_name: organizationName,
        email: newEmail,
        password: newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to sign up");
    }
  }
};

//event listener for signup

document.addEventListener("DOMContentLoaded", function (event) {
  console.log(document.querySelector("div"));
});

if (document.getElementById("signupBtn")) {
  document.getElementById("signupBtn").addEventListener("submit", newAccount);
}
