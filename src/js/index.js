//criou uma constante personagens e buscou no documento todos os que estão com a classe personagem

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') { return };

        /* 
            objetivo 1: quando passar o mouse em cima do personagem temos que:

            - colocar a classe selecionado em cima para ativar a animação
            -retirar a classe selecionado do personagem que está selecionado
        */
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");
        
        personagem.classList.add("selecionado");
        /* 
            objetivo 2: quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
        */
        

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        
        nomeJogador1.innerHTML = nomeSelecionado;
    });
});

