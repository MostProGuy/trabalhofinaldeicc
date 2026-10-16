function textoParaBinario() {
    const texto = document.getElementById("texto").value;
    const bytes = new TextEncoder().encode(texto);
    let resultado = "";

    for (let i = 0; i < bytes.length; i++) {
        resultado += bytes[i].toString(2).padStart(8, "0") + " ";
    }

    document.getElementById("resultadoBinario").value = resultado.trim();
}

function binarioParaTexto() {
    const binario = document.getElementById("binario").value.replace(/\s/g, "");
    const resultado = document.getElementById("resultadoTexto");

    if (binario === "") {
        resultado.value = "";
        return;
    }

    if (!/^[01]+$/.test(binario) || binario.length % 8 !== 0) {
        resultado.value = "Erro: digite apenas 0 e 1 em grupos de 8 bits.";
        return;
    }

    const bytes = [];

    for (let i = 0; i < binario.length; i += 8) {
        bytes.push(parseInt(binario.slice(i, i + 8), 2));
    }

    try {
        resultado.value = new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes));
    } catch {
        resultado.value = "Erro: esse código não representa um texto válido.";
    }
}

function limparTexto() {
    document.getElementById("texto").value = "";
    document.getElementById("resultadoBinario").value = "";
}

function limparBinario() {
    document.getElementById("binario").value = "";
    document.getElementById("resultadoTexto").value = "";
}
