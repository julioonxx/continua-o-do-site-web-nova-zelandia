// Mostrar mais informações ao clicar no botão
document.getElementById("btnMostrar").addEventListener("click", function() {
    var texto = document.getElementById("textoOculto");

    // Verificar se o texto está oculto e alternar o estado
    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block"; 
        this.textContent = "Ocultar informações"; 
    } else {
        texto.style.display = "none"; 
        this.textContent = "Mostrar mais informações"; 
    }
});

// Função para abrir o modal
function abrirModal(imagem) {
    var modal = document.getElementById("modalImagem");
    var modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    modalImg.src = imagem.src;
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById("modalImagem");
    modal.style.display = "none";
}

// Validação do formulário
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    // Se o formulário for válido, exibir mensagem de agradecimento
    document.getElementById("mensagemFeedback").textContent = "Obrigado pelo seu feedback!";
    return false; // Impede o envio real do formulário para efeito de teste
}

// Criar botão de descrição dinamicamente
const botaoDescricao = document.createElement("button");
botaoDescricao.textContent = "Mostrar descrição";
botaoDescricao.style.display = "block";
botaoDescricao.style.margin = "20px auto";
botaoDescricao.style.padding = "10px 20px";
botaoDescricao.style.backgroundColor = "white"; 
botaoDescricao.style.color = "black"; 
botaoDescricao.style.border = "2px solid #007BFF";  
botaoDescricao.style.borderRadius = "5px";
botaoDescricao.style.cursor = "pointer";
botaoDescricao.style.fontSize = "16px";

// Efeito de hover no botão de descrição
botaoDescricao.addEventListener("mouseover", function() {
    botaoDescricao.style.backgroundColor = "#f0f0f0";
});

// Alternar a exibição da descrição ao clicar no botão
botaoDescricao.addEventListener("click", function() {
    var descricaoDiv = document.getElementById("descricaoDiv");
    if (descricaoDiv) {
        descricaoDiv.style.display = descricaoDiv.style.display === "none" ? "block" : "none";
    }
});

// Adicionar o botão de descrição à div "paisagemDiv"
document.getElementById("paisagemDiv").appendChild(botaoDescricao);

// Alternar a exibição de outra descrição com base no id passado
function toggleDescription(id) {
    const desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}
