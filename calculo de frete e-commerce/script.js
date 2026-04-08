let valorCompra = Number(prompt("Digite o valor da compra:"));
let regiao = prompt("Digite a região de entrega:\n1-Sul\n2-Sudeste\n3-Outras");

let frete;

if (valorCompra > 250) {
    frete = 0;
} else {
    if (regiao == "1") {
        frete = 20;
    } else if (regiao == "2") {
        frete = 10;
    } else {
        frete = 30;
    }
}

let total = valorCompra + frete;
alert("Valor da compra: R$ " + valorCompra.toFixed(2) + 
      "\nFrete: R$ " + frete.toFixed(2) + 
      "\nTotal a pagar: R$ " + total.toFixed(2));
