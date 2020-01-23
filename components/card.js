class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image:"",
            color: "",
            size: "",
        }
    }

    componentDidMount() {
    //    console.log(this.props.name)
       
        this.loadDetails()
        //console.log(this.state.details)
    }

    async loadDetails() {
        const response = await fetch(this.props._links.self)
        console.log(this.props._links.self)
        const json = await response.json()
        console.log(json)
         this.setState({color: this.props.color, size: this.props.size})
    }

    showDetails() {
        alert('Clicked!')
    }
//kaartje gaat fetch doen, daarin zitten gegevens over specifieke pokemon, die gegevens moet je terug in je state zetten. eigenlij khetzelfde wat we gedaan hebben in die parent
    render() {
        return (
            <div className="card">
                <div>{this.props.name}</div>
                <div><img src="https://cdn0.iconfinder.com/data/icons/clothes-one-2/32/Clothes-89-128.png"/></div>
                <div>
                    Color: {this.props.color} <br></br>
                    Size: {this.props.size}
                </div>
                <div><button onClick={this.showDetails}>Details?!</button></div>
            </div>
        );
    }
}

