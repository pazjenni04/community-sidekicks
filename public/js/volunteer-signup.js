//need to create event listener for the signup btn for volunteer to send info the back end
const newVolunteer = async (event) => {
  event.preventDefault();

  const volFname = document.getElementById("first_name").value.trim();
  const volLname = document.getElementById("last_name").value.trim();
  const volEmail = document.getElementById("volEmail").value.trim();
  const volPhone = document.getElementById("volPhone").value.trim();

  if (volFname && volLname && volEmail && volPhone) {
    const response = await fetch("/api/volunteers", {
      method: "POST",
      body: JSON.stringify({
        first_name: volFname,
        last_name: volLname,
        email: volEmail,
        phone: volPhone,
        zip_code: volzip,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log("Volunteer Successfully Entered Information");
      alert(
        "Volunteer Information Successfully Uploaded! Organizations will contact you for help!"
      );
    } else {
      alert("Please try again! Volunteer information NOT uploaded");
      console.log("Volunteer info NOT uploaded succesfully");
    }
  }
};

//event listener for signup
document
  .getElementById("volsignupBtn")
  .addEventListener("submit", newVolunteer);
