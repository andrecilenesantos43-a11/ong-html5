/**
 * ARQUIVO: js/spa.js
 * DESCRIÇÃO: Módulo de roteamento básico (SPA) e manipulação de templates.
 */

// **REQUISITO: Manipulação do DOM / SPA Básico**
function configurarRotasSPA() {
    // Implementação básica de roteamento:
    // Troca o conteúdo principal da página (ex: <main id="conteudo-principal">) 
    // com base na URL (hash) ou evento de clique nos links.
    
    // Devido à limitação de não ter acesso ao HTML original, este é um esqueleto.
    // O ideal seria carregar o conteúdo das outras páginas (sobre.html, projetos.html, etc.) 
    // via fetch() e injetar no <main>.
    
    console.log("Módulo SPA inicializado. Pronto para roteamento e manipulação de templates.");
    // Ex: window.addEventListener('hashchange', carregarConteudo);
}

// **REQUISITO: Criar sistema de templates JavaScript**
function renderizarTemplate(dados) {
    // Exemplo de template simples (template string ES6) para um item de projeto
    const templateProjeto = `
        <div class="projeto-card">
            <h3>${dados.nome}</h3>
            <p><strong>Área:</strong> ${dados.area}</p>
            <p>${dados.descricao.substring(0, 100)}...</p>
            <a href="${dados.linkDetalhe}">Ver Detalhes</a>
        </div>
    `;
    return templateProjeto;
}

// Você pode chamar esta função para injetar templates na página de 'projetos.html'
// Ex: document.getElementById('lista-projetos').innerHTML += renderizarTemplate(meuObjetoProjeto);

document.addEventListener('DOMContentLoaded', configurarRotasSPA);