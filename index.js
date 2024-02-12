let btnEl = document.getElementById("btn-div");

function myFunction() {
  setTimeout(() => {
    btnEl.style.display = "block";
  }, 4000);
}



function sendEmail() {
  e.preventDefault();
  console.log("hello");
  var form = document.getElementById("myForm"); // Make sure your form has the correct ID
  var formData = new FormData(form);

  fetch("https://formspree.io/f/myyrwgvr", {
    method: "POST",
    mode: "cors",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle success or error messages in the frontend
      if (data.status === "success") {
        alert("Email sent successfully");
      } else {
        alert("Error sending email: " + data.message);
      }
    })
    .catch(error => console.error("Error:", error));
}
