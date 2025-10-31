
function configurarRotasSPA() {
    
    console.log("Módulo SPA inicializado. Pronto para roteamento e manipulação de templates.");
    
function renderizarTemplate(dados) {
   
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

document.addEventListener('DOMContentLoaded', configurarRotasSPA);