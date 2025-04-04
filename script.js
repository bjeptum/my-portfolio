// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("responseMsg");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        responseMsg.textContent = "Please fill in all fields.";
        responseMsg.style.color = "red";
        return;
      }
  
      // Simulate sending to backend
      console.log("Message sent:", { name, email, message });
  
      responseMsg.textContent = "Thanks for reaching out! I’ll get back to you soon.";
      responseMsg.style.color = "#00ffcc";
  
      form.reset();
    });
  });  