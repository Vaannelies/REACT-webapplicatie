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

    onDelete(id) {
        const requestOptions = {
            method: 'DELETE'
        };

        const sweaters = this.state.sweaters;

        const filteredSweaters = sweaters.filter(sweater => {
            return sweater._id !== id;
        });
        console.log(id);
      
        console.log(filteredSweaters);
        this.setState({sweaters: filteredSweaters})
        fetch("http://145.24.222.55:8000/sweaters/" + id, requestOptions).then((response) => {
            return response.json();
        });

      //  this.setState
    }
      

    render() {
        let thumbs = this.state.sweaters.map((sweaters, i) =>
            <Sweatercard key={i} name={sweaters.name} color={sweaters.color} size={sweaters.size} image={sweaters.image} id={sweaters._id} onDelete={this.onDelete}></Sweatercard>
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