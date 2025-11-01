<<<<<<< HEAD
# 🌟 Plataforma ONG - HTML5 e Aplicação Web Acessível

Este projeto consolida as habilidades de desenvolvimento front-end, focando em práticas profissionais de **Versionamento (GitFlow)**, **Acessibilidade (WCAG 2.1 AA)** e **Otimização para Produção**.

---

## 🎯 ENTREGA IV: Versionamento, Acessibilidade e Deploy (Requisitos Finais)

Esta fase transformou o projeto em uma aplicação pronta para produção, atendendo a altos padrões de qualidade e inclusão.

### 1. ♿ Conformidade WCAG 2.1 Nível AA (Acessibilidade)

A aplicação foi auditada e corrigida para garantir a máxima usabilidade para todos os usuários, incluindo aqueles que utilizam tecnologias assistivas.

* **Navegação por Teclado:** Implementada a ordem de tabulação lógica (`tabindex` padrão) e indicadores de foco (`:focus`) de alto contraste (amarelo forte).
* **Estrutura Semântica:** Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` e elementos WAI-ARIA (ex: `aria-expanded` no menu).
* **Contraste:** Garantido o contraste mínimo de **4.5:1** para texto normal, conforme exigência do Nível AA.
* **Leitores de Tela:** Adicionado o atributo `alt` descritivo em todas as imagens informativas.
* **Alto Contraste / Modo Escuro:** Implementado suporte via *media query* `prefers-color-scheme: dark`, com esquema de cores que mantém o contraste mínimo em ambos os temas.

### 2. ⚙️ Otimização para Produção

Focando no desempenho e tempo de carregamento:

* **Minificação:** Implementada a remoção de espaços e comentários nos arquivos **HTML (`index.html`)** e **CSS (`style.css`)** para reduzir o tamanho de transferência.
* **Compressão de Imagens:** Todas as imagens foram processadas com ferramentas de compressão *lossy/lossless* para garantir o menor tamanho possível sem perda perceptível de qualidade.

### 3. 🐙 Versionamento e Colaboração (Git/GitHub)

O histórico de desenvolvimento reflete práticas profissionais de gestão de código:

* **Estratégia GitFlow Simplificada:** Utilização das *branches* `main` (produção) e `develop` (estabilidade) com trabalho realizado em *branch* de *feature* (`feature/entrega-4-acessibilidade`).
* **Histórico Semântico:** Todos os *commits* seguem a convenção semântica (ex: `feat:`, `fix:`, `chore:`), facilitando o rastreamento de mudanças.
* **Releases:** O projeto utiliza **versionamento semântico (`vX.Y.Z`)** com *tags* e *releases* documentadas no GitHub.
* **Gestão de Tarefas:** Utilização de **Issues** para rastreamento de tarefas e **Milestones** para organização do cronograma da Entrega IV.

---

## 🎯 Requisitos Implementados (Entrega 3 - JavaScript)

Esta atualização focou em trazer interatividade e consistência de dados ao projeto:

* **Código JavaScript Modular:** Estrutura organizada em `js/validacao.js` e `js/templates.js`.
* **Manipulação do DOM:** Utilizada para alternar classes de estilo e injetar elementos de erro dinamicamente.
* **Validação de Formulário Completa:**
    * Sistema de verificação de consistência de dados no formulário de cadastro.
    * Aviso visual (borda e asterisco) de preenchimento incorreto.
    * Alerta de sucesso após cadastro completo.
* **Sistema de Templates JavaScript:** Implementado em `projetos.html` para renderização dinâmica de conteúdo (listagem de projetos).

---

## 🛠️ Tecnologias e Dependências

* HTML5 semântico
* CSS (Estilização e Layout)
* JavaScript (ES6): Manipulação do DOM, Modularização, Template Literals, e Eventos.
* Validação W3C
* Imagens otimizadas

---

## 🚀 Como Rodar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/andrecilenesantos43-a11/ong-html5.git](https://github.com/andrecilenesantos43-a11/ong-html5.git)
    cd ong-html5
    ```
2.  **Acesse:** Abra o arquivo `index.html` diretamente no seu navegador.
3.  **Para Testar Acessibilidade:** Utilize a tecla `TAB` para navegar ou ative um leitor de tela (NVDA/VoiceOver) e o modo escuro do seu sistema operacional.

---

## 🧑‍💻 Desenvolvido por

André — 2025
=======
# 🌟 Plataforma ONG - HTML5 e JavaScript Dinâmico

Projeto desenvolvido para a disciplina de Fundamentos de HTML5, **evoluído para a implementação de JavaScript Avançado** (Entrega 3).

O objetivo é criar uma estrutura semântica completa e transformá-la em uma aplicação web dinâmica e interativa, demonstrando domínio em Manipulação do DOM, Modularização e Validação.

---

## 🎯 Requisitos Implementados (Entrega 3 - JavaScript)

Esta atualização focou em trazer interatividade e consistência de dados ao projeto:

* **Código JavaScript Modular:** Estrutura organizada em `js/validacao.js` e `js/templates.js`.
* **Manipulação do DOM:** Utilizada para alternar classes de estilo e injetar elementos de erro dinamicamente.
* **Validação de Formulário Completa:**
    * Sistema de verificação de consistência de dados no formulário de cadastro.
    * Aviso visual (borda e asterisco) de preenchimento incorreto.
    * Alerta de sucesso após cadastro completo.
* **Sistema de Templates JavaScript:** Implementado em `projetos.html` para renderização dinâmica de conteúdo (listagem de projetos).

---

## 📄 Páginas Incluídas

* `index.html` – Página inicial da organização.
* `projetos.html` – Detalhes de projetos com listagem dinâmica via Templates JS.
* `cadastro.html` – Formulário completo com **validação avançada (JS)**, máscaras (CPF, Telefone, CEP) e feedback visual de erro.

## 🛠️ Tecnologias Utilizadas

* HTML5 semântico
* CSS (Estilização e Layout)
* **JavaScript (ES6):** Manipulação do DOM, Modularização, Template Literals, e Eventos.
* Validação W3C
* Imagens otimizadas

---

## 🧑‍💻 Desenvolvido por

André — 2025
>>>>>>> 8e49d7bb56605adf72f1658918bf448e6330feaf
