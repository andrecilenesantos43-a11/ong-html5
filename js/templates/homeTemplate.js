
export const homeTemplate = `
    <section aria-labelledby="quem-somos" class="card">
        <h2 id="quem-somos">Quem Somos</h2>
        <p>A ONG Esperança atua há mais de 10 anos promovendo inclusão social, educação e solidariedade.</p>
        <img src="imagens/ong1.jpg" alt="Equipe da ONG em ação social">
    </section>

    <section aria-labelledby="missao" class="card">
        <h2 id="missao">Missão, Visão e Valores</h2>
        <ul>
            <li><strong>Missão:</strong> Transformar vidas através da empatia e solidariedade.</li>
            <li><strong>Visão:</strong> Ser referência em ações sociais sustentáveis.</li>
            <li><strong>Valores:</strong> Transparência, comprometimento e amor ao próximo.</li>
        </ul>
    </section>

    <section aria-labelledby="projetos">
        <h2 id="projetos">Projetos</h2>
        <div class="card">
            <h3>Projeto Educação</h3>
            <p>Oferecemos cursos e oficinas para crianças e jovens.</p>
            <span class="badge">Novo</span>
        </div>
        <div class="card">
            <h3>Projeto Inclusão</h3>
            <p>Atividades voltadas para inclusão social e desenvolvimento pessoal.</p>
            <span class="badge">Destaque</span>
        </div>
        <div class="card">
            <h3>Projeto Saúde</h3>
            <p>Campanhas de saúde e prevenção para comunidades carentes.</p>
            <span class="badge">Ativo</span>
        </div>
    </section>

    <section aria-labelledby="contato" class="card">
        <h2 id="contato">Contato</h2>
        <form id="contatoForm">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="seu@email.com" required>
            
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem" required></textarea>

            <button type="submit">Enviar Contato</button>
        </form>
    </section>
`;