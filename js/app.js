
import { validarFormulario, inicializarMascaras } from "./validacao.js";

function configurarEventos() {
    const cadastroForm = document.getElementById("cadastroForm");
    
    if (cadastroForm) {
        
        cadastroForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            validarFormulario(cadastroForm);
        });
        inicializarMascaras(cadastroForm);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('pageLoaded', () => {
        setTimeout(configurarEventos, 0); 
    });
    
    configurarEventos(); 
});