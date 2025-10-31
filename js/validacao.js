
/**
 * ARQUIVO: js/validacao.js
 * DESCRIÇÃO: Módulo de validação de formulário com máscaras e destaque (borda + asterisco) de erro.
 */

const form = document.getElementById('cadastroForm');

// Lista de todos os campos obrigatórios (IDs do seu HTML)
const camposObrigatorios = [
    '#nome',
    '#email',
    '#cpf',
    '#telefone',
    '#nascimento',
    '#endereco',
    '#cep',
    '#cidade',
    '#estado'
];

// --- FUNÇÕES DE MÁSCARA (Mantidas do seu código original) ---

function aplicarMascaras() {
    // ... (Manter as funções de máscara para cpf, telefone e cep aqui)
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if (cpf) {
        cpf.addEventListener('input', e => {
            e.target.value = e.target.value
                .replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        });
    }

    if (telefone) {
        telefone.addEventListener('input', e => {
            e.target.value = e.target.value
                .replace(/\D/g, '')
                .replace(/^(\d{2})(\d)/g, '($1) $2')
                .replace(/(\d{5})(\d{4})$/, '$1-$2');
        });
    }

    if (cep) {
        cep.addEventListener('input', e => {
            e.target.value = e.target.value
                .replace(/\D/g, '')
                .replace(/^(\d{5})(\d{3})$/, '$1-$2');
        });
    }
}

// --- FUNÇÕES DE VALIDAÇÃO E ALERTA COM DESTAQUE DUPLO ---

/**
 * Valida o formulário, aplica o destaque (borda e asterisco) e retorna os campos pendentes.
 */
function validarFormulario() {
    let pendentes = [];
    
    
    // 1. Limpa todos os destaques/asteriscos antes de começar
    document.querySelectorAll('.campo-invalido').forEach(c => c.classList.remove('campo-invalido'));
    document.querySelectorAll('.erro-asterisco').forEach(span => span.remove()); // Remove os asteriscos anteriores

    camposObrigatorios.forEach(seletor => {
        const campo = document.querySelector(seletor);
        
        if (campo) {
            const isVazio = campo.value.trim() === '';
            
            if (isVazio) {
                // *** DUPLO DESTAQUE APLICADO AQUI ***
                
                // A) Aplica a borda vermelha
                campo.classList.add('campo-invalido');
                pendentes.push(seletor); 
                
                // B) Adiciona o asterisco na label (Manipulação do DOM)
                const label = document.querySelector(`label[for="${campo.id}"]`);
                if (label) {
                    const asterisco = document.createElement('span');
                    asterisco.classList.add('erro-asterisco');
                    asterisco.textContent = ' *';
                    label.appendChild(asterisco);
                }

            } else {
                // Remove o destaque se estiver preenchido
                campo.classList.remove('campo-invalido');
            }
        }
    });

    return pendentes;
}

/**
 * Lida com a submissão do formulário.
 */
function lidarComEnvio(event) {
    event.preventDefault(); 

    const dadosPendentes = validarFormulario();
    
    if (dadosPendentes.length > 0) {
        // === ALERTA DE DADOS PENDENTES ===
        alert(`🚨 ATENÇÃO: É necessário preencher os campos com o asterisco (*) para prosseguir.`);
        
        // Foca no primeiro campo inválido  
        const primeiroCampoInvalido = document.querySelector(dadosPendentes[0]);
        if(primeiroCampoInvalido) {
             primeiroCampoInvalido.focus();
        }

    } else {
        // === ALERTA DE SUCESSO (REQUISITO) ===
        alert('✅ Cadastro efetuado com sucesso! Agradecemos sua inscrição.');
        
        // Limpa formulário e remove destaques/asteriscos
        form.reset();
        document.querySelectorAll('.campo-invalido').forEach(c => c.classList.remove('campo-invalido'));
        document.querySelectorAll('.erro-asterisco').forEach(span => span.remove());
    }
}

// --- INICIALIZAÇÃO ---

function inicializarCadastro() {
    if (form) {
        form.addEventListener('submit', lidarComEnvio);
        aplicarMascaras();

        // Limpar o destaque da borda ao digitar
        camposObrigatorios.forEach(seletor => {
            const campo = document.querySelector(seletor);
            if (campo) {
                campo.addEventListener('input', () => {
                    if (campo.value.trim() !== '') {
                        campo.classList.remove('campo-invalido');
                        // Tenta remover o asterisco associado à label deste campo
                        const label = document.querySelector(`label[for="${campo.id}"]`);
                        const asterisco = label ? label.querySelector('.erro-asterisco') : null;
                        if (asterisco) {
                             asterisco.remove();
                        }
                    }
                });
            }
        });
    } else {
        console.error("ERRO CRÍTICO: Formulário com ID 'cadastroForm' não encontrado. Verifique o HTML.");
    }
}

document.addEventListener('DOMContentLoaded', inicializarCadastro);