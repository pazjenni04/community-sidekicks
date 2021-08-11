//form to login to an existing account
const form = {
  email: document.querySelector("#userEmail").value.trim(),
  password: document.querySelector("#userPassword").value.trim(),
  submit: document.querySelector("#submitBtn"),
};

let submitForm = form.submit.addEventListener("click", (event) => {
  event.preventDefault();

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
