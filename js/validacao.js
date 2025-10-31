
/**

 * DESCRIÇÃO: Módulo de validação de formulário com máscaras e destaque (borda + asterisco) de erro.
 */

const form = document.getElementById('cadastroForm');

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



function aplicarMascaras() {
   
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


function validarFormulario() {
    let pendentes = [];
    
    

    document.querySelectorAll('.campo-invalido').forEach(c => c.classList.remove('campo-invalido'));
    document.querySelectorAll('.erro-asterisco').forEach(span => span.remove()); // Remove os asteriscos anteriores

    camposObrigatorios.forEach(seletor => {
        const campo = document.querySelector(seletor);
        
        if (campo) {
            const isVazio = campo.value.trim() === '';
            
            if (isVazio) {
              
                
               
                campo.classList.add('campo-invalido');
                pendentes.push(seletor); 
                
               
                const label = document.querySelector(`label[for="${campo.id}"]`);
                if (label) {
                    const asterisco = document.createElement('span');
                    asterisco.classList.add('erro-asterisco');
                    asterisco.textContent = ' *';
                    label.appendChild(asterisco);
                }

            } else {
                
                campo.classList.remove('campo-invalido');
            }
        }
    });

    return pendentes;
}


function lidarComEnvio(event) {
    event.preventDefault(); 

    const dadosPendentes = validarFormulario();
    
    if (dadosPendentes.length > 0) {
      
        alert(`🚨 ATENÇÃO: É necessário preencher os campos com o asterisco (*) para prosseguir.`);
        
      
        const primeiroCampoInvalido = document.querySelector(dadosPendentes[0]);
        if(primeiroCampoInvalido) {
             primeiroCampoInvalido.focus();
        }

    } else {
        
        alert('✅ Cadastro efetuado com sucesso! Agradecemos sua inscrição.');
        
      
        form.reset();
        document.querySelectorAll('.campo-invalido').forEach(c => c.classList.remove('campo-invalido'));
        document.querySelectorAll('.erro-asterisco').forEach(span => span.remove());
    }
}


function inicializarCadastro() {
    if (form) {
        form.addEventListener('submit', lidarComEnvio);
        aplicarMascaras();

        camposObrigatorios.forEach(seletor => {
            const campo = document.querySelector(seletor);
            if (campo) {
                campo.addEventListener('input', () => {
                    if (campo.value.trim() !== '') {
                        campo.classList.remove('campo-invalido');
                        
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