var userInput = document.getElementById("input");
var submitForm = document.getElementById("submit-form");

//zipcode search
const zipcodeSearch = async (event) => {
  event.preventDefault();
  console.log("TESTING");
  if (userInput.value) {
    const response = await fetch("/api/volunteer/zip", {
      method: "POST",
      body: JSON.stringify({
        zip_code: userInput,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/volunteer");
    } else {
      alert("No volunteers with existing zipcodes");
    }
  }
};

//eventlistener takes the value from the user's typed in zipcode
submitForm.addEventListener("submit", zipcodeSearch);
