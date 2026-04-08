let valorPedido = Number(prompt("Digite o valor do pedido:"));
let valorFinal = valorPedido;

if (valorPedido > 50) {
    let fidelidade = prompt("Você possui Cartão Fidelidade? (sim/não)");
    if (fidelidade.toLowerCase() === "sim") {
        valorFinal = valorPedido * 0.90;
        alert("Desconto aplicado!\nValor final: R$ " + valorFinal.toFixed(2));
    } else {
        alert("Você ganhou um Cookie de brinde!\nValor final: R$ " + valorFinal.toFixed(2));
    }
} else {
    alert("Valor final: R$ " + valorFinal.toFixed(2));
}
