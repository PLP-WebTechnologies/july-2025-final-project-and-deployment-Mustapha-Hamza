document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if(name === "" || email === "" || message === "") {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
  } else if(!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
