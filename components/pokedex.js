class PokeDex extends React.Component {
    constructor() {
        super()
        this.state = { 
            sweaters: [],
            caught: 4,
        }
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.loadPokemon()
    }
    
    async loadPokemon() {
        const response = await fetch(`http://145.24.222.55:8000/sweaters`)
        const json = await response.json()
        console.log(json.items)+
        this.setState({sweaters: json.items})
    } 

    onDelete(name) {
  
        const sweaters = this.state.sweaters;

        const filteredSweaters = sweaters.filter(sweater => {
            return sweater.name !== name;
        });
        console.log(filteredSweaters);
        this.setState({sweaters: filteredSweaters})

      //  this.setState
    }
      

    render() {
        let thumbs = this.state.sweaters.map((sweaters, i) =>
            <Sweatercard key={i} name={sweaters.name} color={sweaters.color} size={sweaters.size} image={sweaters.image} onDelete={this.onDelete}></Sweatercard>
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