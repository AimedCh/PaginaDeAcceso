document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    const isPassword = passwordField.type === "password";

    passwordField.type = isPassword ? "text" : "password";

    // Switch the eye icon
    if (isPassword) {
      eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          `;
    } else {
      eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.133-3.75m6.5-2.25a3 3 0 114.243 4.243M12 5c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-2.133 3.75m-6.5 2.25a3 3 0 11-4.243-4.243" />
          `;
    }
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      const message = document.getElementById("loginMessage");
      message.textContent =
        "Password must be at least 8 characters, including uppercase, lowercase, and a number.";
      message.className = "text-center mt-4 text-sm text-red-400 font-medium";
      return;
    }

    const message = document.getElementById("loginMessage");
    message.textContent = "Processing...";
    message.className = "text-center mt-4 text-sm text-yellow-300 font-medium";

    setTimeout(() => {
      window.location.href = "success.html";
    }, 2500);
  });
