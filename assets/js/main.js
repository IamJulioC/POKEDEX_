const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 20
let offset = 0

/*
    -Caso queira limitar, no exemplo limita aos pokemons de primeira geração.
        Primeiro declare a função: const maxRecordsPage = 151    
*/

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}                
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">                
                </div>

            </li>
        `).join('')
        pokemonList.innerHTML += newHtml  
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    /*Depois inclua:

        const recordsNumberPerPage = offset + limit
        if (recordsNumberPerPage >= maxRecordsPage ){
            const newLimit = maxRecordsPage - offset
            loadPokemonItens(offset, newLimit)
            
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        }else {
            loadPokemonItens(offset, limit)
        }
    */

    loadPokemonItens(offset, limit) // E remova esse trecho
})
    