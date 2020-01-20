class PokeDex extends React.Component {
    constructor() {
        super()
        this.state = { 
            sweaters: [],
            caught: 4,
        }
    }

    componentDidMount() {
        this.loadPokemon()
    }
    
    async loadPokemon() {
        const response = await fetch(`http://145.24.222.55:8000/sweaters`)
        const json = await response.json()
        console.log(json.items)
        this.setState({sweaters: json.items})
    } 

    
      

    render() {
        let thumbs = this.state.sweaters.map((sweaters, i) =>
            <Card key={i} name={sweaters.name} color={sweaters.color} size={sweaters.size} image={sweaters.image}></Card>
        )

        return (
            <div className="pokedex">
                <div>
                    <button>Load next 9 sweaters</button>
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