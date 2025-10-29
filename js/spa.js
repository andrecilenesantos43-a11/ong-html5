// js/app.js
import { validarFormulario, inicializarMascaras } from "./validacao.js";

// Função para anexar eventos de formulário após o carregamento de uma página SPA
function configurarFormulario() {
    // Procura por todos os formulários injetados
    const cadastroForm = document.getElementById("cadastroForm");
    const contatoForm = document.getElementById("contatoForm");

    // Configuração para o formulário de Cadastro (com máscaras e validação robusta)
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", (e) => {
            e.preventDefault();
            validarFormulario(cadastroForm);
        });
        // Aplica as máscaras nos campos do formulário de cadastro
        inicializarMascaras(cadastroForm);
    }
    
    // Configuração para o formulário de Contato (validação básica)
    if (contatoForm) {
        contatoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Reutiliza a função de validação para o formulário de contato
            validarFormulario(contatoForm);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Escuta o evento customizado 'pageLoaded' disparado pelo spa.js
    // Isso garante que os eventos sejam reanexados sempre que o conteúdo do <main> for trocado.
    document.addEventListener('pageLoaded', () => {
        // Usa setTimeout para garantir que a injeção do HTML no DOM esteja completa.
        setTimeout(configurarFormulario, 0); 
    });
    
    // Tenta configurar o formulário na carga inicial (caso o JS não seja o único a carregar)
    configurarFormulario(); 
});