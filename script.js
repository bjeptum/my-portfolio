document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("Qd-yS5Cv6tSXQaPDs");

  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    responseMsg.textContent = "";
    responseMsg.style.color = "";

    if (!name || !email || !message) {
      responseMsg.textContent = "Please fill out all fields before submitting.";
      responseMsg.style.color = "red";
      return;
    }

    // Optional: Add email format validation
    if (!emailPattern.test(email)) {
      responseMsg.textContent = "Please enter a valid email address.";
      responseMsg.style.color = "red";
      return;
    }

    // Send form using EmailJS
    emailjs.sendForm(
      "service_ha35eik",
      "template_es8kzsc",   // ✅ Replace with your actual Template ID
      form
    ).then(
      function(response) {
        responseMsg.textContent = "Thank you for reaching out! I’ll get back to you soon.";
        responseMsg.style.color = "#00ffcc";
        form.reset();
      },
      function(error) {
        responseMsg.textContent = "Oops! Something went wrong. Please try again later.";
        responseMsg.style.color = "red";
        console.error("EmailJS Error:", error);
      }
    );
  });
});
