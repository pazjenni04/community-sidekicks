//form to login to an existing account

let submitForm = form.submit.addEventListener("click", (event) => {
  event.preventDefault();

  const form = {
    email: document.querySelector("#userEmail").value.trim(),
    password: document.querySelector("#userPassword").value.trim(),
    submit: document.querySelector("#submitBtn"),
  };

  if (email && password) {
    const response = fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Login failed. Try again.");
    }
  }
});

//new sign-up (account)
const newAccount = async (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = docuemtn.getElementById("lastName").value;
  const newEmail = document.getElementById("email-signup").value.trim();
  const newPassword = document.getElementById("password-signup").value.trim();
  const newUsername = document.getElementById("newUsername").value.trim();

  if (firstName && lastName && newEmail && newPassword && newUsername) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        newEmail,
        newPassword,
        newUsername,
      }),
      headers: { "Content-Type": "application/json" },
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
