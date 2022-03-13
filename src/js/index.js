const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const listaSelecaoCartao = document.querySelectorAll('.cartao-pokemon') 

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //NOS CARTOES
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')


        //NA LISTAGEM
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')
    })
})