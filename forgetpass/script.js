    const form = document.getElementById("forgotForm");
    const email = document.getElementById("email");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (email.value.trim() === "") {
        errorMsg.textContent = "Please enter your email address!";
        return;
      }

      errorMsg.textContent = "";
      alert("If this email is registered, a reset link will be sent!");
      form.reset();
    });