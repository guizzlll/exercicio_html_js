 // Função de validação
 document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Verifica se B é maior que A
    if (campoB > campoA) {
        // Se for válido, o formulário é enviado
        alert("Formulário válido! Enviando...");
        this.submit(); // Envio do formulário
    } else {
        // Se for inválido, exibe uma mensagem de erro
        alert("Campo B deve ser maior que Campo A.");
    }
});