let salarioBruto = Number(prompt("Digite seu salário bruto mensal:"));
let imposto = 0;

if (salarioBruto <= 2112) {
    imposto = 0;
} else if (salarioBruto <= 2826.65) {
    imposto = salarioBruto * 0.075;
} else if (salarioBruto <= 3751.05) {
    imposto = salarioBruto * 0.15;
} else {
    imposto = salarioBruto * 0.225;
}

let salarioLiquido = salarioBruto - imposto;

alert("Imposto de Renda: R$ " + imposto.toFixed(2) + 
      "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2));
