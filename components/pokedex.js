class PokeDex extends React.Component {
    constructor() {
        super()
        this.state = { 
            pokemon: [],
            caught: 4
        }
    }

    componentDidMount() {
        this.loadPokemon()
    }
    
    async loadPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100`)
        const json = await response.json()
        console.log(json.results)
        this.setState({pokemon: json.results})
    } 

    
      

    render() {
        let thumbs = this.state.pokemon.map((pokemon, i) =>
            <Card key={i} name={pokemon.name} uri={pokemon.url}>{pokemon.name}></Card>
        )

        return (
            <div className="pokedex">
                <div>
                    <button>Load next 9 Pokémon</button>
                </div>
                <div>
                    Caught: {this.state.caught}
                </div>
                <div className="thumbnails">
                    {thumbs}
                </div>
            </div>
        )   
    }
}