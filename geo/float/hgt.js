// Form validation function
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Validate name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    return isValid;
}

// Attach event listener to the form
document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});