// Fatores de conversão tendo o Joule (J) como base 1:1
const fatoresEmJoule = {
    J: 1,
    kJ: 1000,
    cal: 4.184,
    kcal: 4184,
    Wh: 3600,
    kWh: 3600000
};

function converterEnergia() {
    const valorInput = document.getElementById('valor').value;
    const deUnidade = document.getElementById('de').value;
    const paraUnidade = document.getElementById('para').value;
    const resultadoTexto = document.getElementById('resultado-texto');

    const valor = parseFloat(valorInput);

    if (isNaN(valor)) {
        resultadoTexto.textContent = "Por favor, insira um número válido.";
        return;
    }

    // Lógica: Converte a unidade de origem para Joule, depois de Joule para a unidade de destino
    const valorEmJoules = valor * fatoresEmJoule[deUnidade];
    const valorFinal = valorEmJoules / fatoresEmJoule[paraUnidade];

    // Formata o resultado para até 6 casas decimais se necessário
    resultadoTexto.textContent = `${Number(valorFinal.toFixed(6))} ${paraUnidade}`;
}

document.getElementById('btn-converter').addEventListener('click', converterEnergia);