 const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (username.value.trim() === "" || password.value.trim() === "") {
        errorMsg.textContent = "Please fill in all fields!";
        return;
      }

      if (password.value.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return;
      }

      errorMsg.textContent = "";
      alert("Login successful!");
      form.reset();
    });