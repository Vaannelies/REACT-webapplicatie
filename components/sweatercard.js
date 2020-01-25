class Sweatercard extends React.Component {
    constructor(props){
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    onDelete() {
        const { onDelete, id } = this.props;
        
        onDelete(id);
    }

    showDetails() {
        alert( this.props.id);
        
    }
    
    componentWillMount() {
        console.log('WILL MOUNT');
    }
   
    componentDidMount() {
        console.log('DID MOUNT');
    }


    render() {
        const {name, size, color} = this.props;

      

        return (
            <div className="card">
                <div>{name}</div>
                <div><img src="https://cdn0.iconfinder.com/data/icons/clothes-one-2/32/Clothes-89-128.png"/></div>
                <div>
                    Size: {size} 
                    <br></br> 
                    Color: {color}
                </div>
                <div><button onClick={this.showDetails}>Details?!</button></div>
                <div><button onClick={this.onDelete}>Delete</button></div>
            </div>
        )
    }
}