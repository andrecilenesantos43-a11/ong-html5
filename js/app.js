// js/app.js
import { validarFormulario, inicializarMascaras } from "./validacao.js";

// Função para anexar eventos (chamada após cada injeção de template)
function configurarEventos() {
    const cadastroForm = document.getElementById("cadastroForm");
    
    if (cadastroForm) {
        // Se encontrarmos o formulário de cadastro:
        cadastroForm.addEventListener("submit", (e) => {
            e.preventDefault(); // <--- ESTA LINHA É CRÍTICA PARA IMPEDIR O REDIRECIONAMENTO!
            validarFormulario(cadastroForm);
        });
        inicializarMascaras(cadastroForm);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Escuta o evento que o spa.js dispara quando um novo template é carregado
    // Este é o mecanismo que garante que o JS encontre o formulário
    document.addEventListener('pageLoaded', () => {
        // Damos um pequeno respiro para o DOM processar a injeção
        setTimeout(configurarEventos, 0); 
    });
    
    // Tenta configurar na carga inicial (se o template tiver um formulário)
    configurarEventos(); 
});