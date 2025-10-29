// js/validacao.js

// Funções de Máscara
function aplicarMascaraCPF(campo) {
    campo.value = campo.value
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function aplicarMascaraTelefone(campo) {
    campo.value = campo.value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2');
}

function aplicarMascaraCEP(campo) {
    campo.value = campo.value
        .replace(/\D/g, '')
        .replace(/^(\d{5})(\d{3})$/, '$1-$2');
}

// Inicializa as máscaras (deve ser chamado após carregar o formulário)
export function inicializarMascaras(form) {
    if (!form) return;

    // Busca campos específicos no formulário
    const cpf = form.querySelector('#cpf');
    const telefone = form.querySelector('#telefone');
    const cep = form.querySelector('#cep');
    
    if (cpf) cpf.addEventListener('input', (e) => aplicarMascaraCPF(e.target));
    if (telefone) telefone.addEventListener('input', (e) => aplicarMascaraTelefone(e.target));
    if (cep) cep.addEventListener('input', (e) => aplicarMascaraCEP(e.target));
}

// Função de validação principal
export function validarFormulario(form) {
    let valido = true;
    const campos = form.querySelectorAll("input[required], textarea[required], select[required]");
    
    // Limpa estados de erro anteriores
    campos.forEach(campo => {
        campo.classList.remove('erro'); // Classe 'erro' definida no CSS
        campo.removeAttribute('title');
    });

    campos.forEach(campo => {
        // Validação HTML nativa (required, type, pattern)
        if (!campo.checkValidity()) {
            campo.classList.add('erro');
            campo.title = `Preenchimento incorreto ou campo obrigatório. ${campo.validationMessage}`;
            valido = false;
        }

        // Exemplo de verificação de consistência customizada (se o campo tem o tamanho mínimo esperado pela máscara)
        if (campo.id === 'cpf' && campo.value.length < 14 && campo.value.length > 0) {
             campo.classList.add('erro');
             campo.title = 'CPF incompleto. Formato esperado: 000.000.000-00';
             valido = false;
        }
    });

    // Aviso ao usuário de preenchimento incorreto
    if (!valido) {
        alert("⚠️ Por favor, corrija os campos em destaque (vermelho) para prosseguir.");
        // Foca no primeiro campo com erro
        form.querySelector('.erro').focus();
    } else {
        alert("✅ Formulário enviado com sucesso (simulação)! Os dados foram verificados.");
        // Simulação de envio, armazene aqui no localStorage se necessário para a próxima entrega
        form.reset();
        campos.forEach(campo => campo.classList.remove('erro'));
    }
}