document.getElementById("myForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";

    if (name.trim() === "") {
        nameError.textContent = "Name is required";
        event.preventDefault();
    }

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        event.preventDefault();
    }
});
