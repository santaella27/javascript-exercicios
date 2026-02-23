function verificarPermissao(cargo, ativo) {
    if (!ativo) return "Usuário inativo";
    if (cargo === "admin") return "Acesso total";
    if (cargo === "editor") return "Acesso limitado";
    return "Acesso básico";
} 

console.log(verificarPermissao("admin", true));
console.log(verificarPermissao("editor", true));
console.log(verificarPermissao("user", true));
console.log(verificarPermissao("admin", false));