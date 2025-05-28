/* Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e
 mostra o cartão  
correspondente 
o que foi selecionado no clique para isso vamos usar o elemento :
1- listagem
2 - cartão pokémon*/

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemon.forEach(pokemon =>{
    pokemon.addEventListener('click', () =>{
        //remover a classe aberto só no do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        //Vamos pegar o id do pokémon na listagem//
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        //arrumando a cor da listagem//

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
  

})
