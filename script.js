document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      responseMsg.textContent = "Please fill out all fields before submitting.";
      responseMsg.style.color = "red";
      return;
    }

    console.log("Message sent:", { name, email, message });

    responseMsg.textContent = "Thank you for reaching out! I’ll get back to you soon.";
    responseMsg.style.color = "#00ffcc";
    form.reset();
  });
});