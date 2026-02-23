function validarLogin(usuario, senha) {
    if (usuario === "" || senha === "") return "Dados Inválidos";
    if (usuario === "admin" && senha === "1234") return "Login bem-sucedido";
    return "Usuário ou senha incorretos";

}

console.log(validarLogin("admin", "1234"));
console.log(validarLogin("admin", "0000"));
console.log(validarLogin("", "1234"));