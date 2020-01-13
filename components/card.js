class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image:"",
            height: "",
            weight:50,
        }
    }

    componentDidMount() {
     //  console.log(this.props.uri)
       
        this.loadDetails()
        //console.log(this.state.details)
    }

    async loadDetails() {
        const response = await fetch(this.props.name)
        const json = await response.json()
        console.log(json)
         this.setState({height: json.name, weight: json.size, image: json.color})
    }
//kaartje gaat fetch doen, daarin zitten gegevens over specifieke pokemon, die gegevens moet je terug in je state zetten. eigenlij khetzelfde wat we gedaan hebben in die parent
    render() {
        return (
            <div className="card">
                <div>{this.props.name}</div>
                <div><img src={this.state.image}/></div>
                <div>
                    Height: {this.state.height} <br></br>
                    Weight: {this.state.weight}
                </div>
                <div><button>Catch!</button></div>
            </div>
        );
    }
}