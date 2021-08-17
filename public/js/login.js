//form to login to an existing account

let submitForm = form.submit.addEventListener("click", (event) => {
  event.preventDefault();

  const form = {
    email: document.querySelector("#orgEmail").value.trim(),
    password: document.querySelector("#orgPassword").value.trim(),
    submit: document.querySelector("#submitBtn"),
  };

  if (email && password) {
    const response = fetch("/api/organization/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Login failed. Try again.");
    }
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
        Accept: "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

//event listener for signup

document.getElementById("signupBtn").addEventListener("submit", newAccount);
