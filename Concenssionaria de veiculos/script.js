let valorCarro = Number(prompt("Digite o valor do carro:"));
let formaPagamento = prompt("Escolha a forma de pagamento:\n1- PIX\n2- Cartão de Crédito\n3- Financiamento");

let valorFinal, parcelas;

if (formaPagamento == "1") {
    valorFinal = valorCarro * 0.85; // 15% desconto
    alert("Pagamento à vista no PIX. Valor final: R$ " + valorFinal.toFixed(2));
} else if (formaPagamento == "2") {
    valorFinal = valorCarro * 1.05; // 5% juros
    parcelas = valorFinal / 24;
    alert("Cartão de Crédito (24x). Valor final: R$ " + valorFinal.toFixed(2));
    alert("Valor de cada parcela: R$ " + parcelas.toFixed(2));
} else if (formaPagamento == "3") {
    valorFinal = valorCarro * 1.20; // 20% juros
    parcelas = valorFinal / 48;
    alert("Financiamento (48x). Valor final: R$ " + valorFinal.toFixed(2));
    alert("Valor de cada parcela: R$ " + parcelas.toFixed(2));
} else {
    alert("Opção inválida.");
}
