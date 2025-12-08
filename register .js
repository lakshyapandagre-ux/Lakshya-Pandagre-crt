 const form = document.getElementById("registerForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (password.value !== confirmPassword.value) {
        errorMsg.textContent = "Passwords do not match!";
        return;
      }

      errorMsg.textContent = "";
      alert("Registration successful!");
      form.reset();
    });