document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificação de login (aqui estamos usando um usuário fixo para exemplo)
    if (username === "estherzinha.moreninha" && password === "1005") {
        alert("Bem-vinda, meu amor!");
        window.location.href = "home.html";  // Redireciona para a página home
    } else {
        alert("Usuário ou senha inválidos!");
    }
});

