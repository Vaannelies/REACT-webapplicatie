class Sweatercard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onBack = this.onBack.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    onDelete() {
        const { onDelete, id } = this.props;
        
        onDelete(id);
    }

    onEdit() {
        this.setState({ isEdit: true});
    }

    onEditSubmit(event) {
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.colorInput.value, this.sizeInput.value, this.props.id);
        this.setState({isEdit: false});
    }

    onBack() {
        this.setState({isEdit:false});
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
        const {name, size, color, id} = this.props;

      

        return (
            <div className="card">
                {
                    this.state.isEdit
                    ? (
                        <form onSubmit={this.onEditSubmit}>
                                <div>
                                    <span>Name {`  `}
                                    <input placeholder="Enter a name..." ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                                    </span>
                                </div>
                                {`  `}
                                <div>
                                    <span>Color {`  `}
                                    <input placeholder="Pick a color..." ref={colorInput => this.colorInput = colorInput} defaultValue={color} />
                                    </span>
                                </div>
                                {`  `}
                                <div>
                                    <span>Size {`  `}
                                    <input placeholder="Pick a size..." ref={sizeInput => this.sizeInput = sizeInput} defaultValue={size} />
                                    </span>
                                </div>
                                {`  `}
                                <button>Add</button>
                                <button onClick={this.onBack}>Back</button>
                        </form>
                    )
                    : (
                        <div>
                        <div>{name}</div>
                        <div><img src="https://cdn0.iconfinder.com/data/icons/clothes-one-2/32/Clothes-89-128.png"/></div>
                        <div>
                            Size: {size} 
                            <br></br> 
                            Color: {color}
                        </div>
                        <div><button onClick={this.showDetails}>Details?!</button></div>
                        <div><button onClick={this.onEdit}>Edit</button></div>
                        <div><button onClick={this.onDelete}>Delete</button></div>
                        </div>
                    )
                }
              
            </div>
        )
    }
}