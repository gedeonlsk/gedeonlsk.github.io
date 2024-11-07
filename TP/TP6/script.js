// Fonction de connexion simulée
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "password123") {
        alert("Connexion réussie !");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Identifiant ou mot de passe incorrect.";
    }
}

// Fonction d'annulation
function cancel() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error-message").textContent = "";
}
