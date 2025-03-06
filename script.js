document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    const copyBtn = document.getElementById("copy-email");
    const emailInput = document.getElementById("email-text");

    if (copyBtn) {
        copyBtn.addEventListener("click", function () {
            emailInput.select();
            document.execCommand("copy");

            copyBtn.innerHTML = "✔ Copied!";
            setTimeout(() => copyBtn.innerHTML = '<i class="fas fa-envelope"></i> Copy Email', 2000);
        });
    }
});

