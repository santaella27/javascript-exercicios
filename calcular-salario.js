function calcularSalarioFinal(salario, desempenho) {

    if(desempenho >= 8) {
        return salario + (salario * 0.20);
    } else if (desempenho >= 5) {
        return salario + (salario * 0.10);
    } else {
        return salario
    }
}

let s1 = calcularSalarioFinal(2000, 9);
let s2 = calcularSalarioFinal(2000, 6);
let s3 = calcularSalarioFinal(2000, 3);

console.log("Salário Final 1:", s1);
console.log("Salário Final 2:", s2);
console.log("Salário Final 3:", s3);