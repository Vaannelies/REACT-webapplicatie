import React from 'react';

class Sweatercard extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            isEdit: false,
            isDetails: false,
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
        this.setState({isDetails:false});
    }


    showDetails() {
        this.setState({isDetails: true});
        console.log(this.state.isDetails);
    }

    showDetailsURL() {
       
        let id = this.props.params.id;
        if(id == 'hoi'){
       // this.setState({isDetails: true});
        console.log("hoi");
        }
    }
    
    componentWillMount() {
        console.log('WILL MOUNT');
    }
   
    componentDidMount() {
        console.log('DID MOUNT');
    }


    render() {
        const {name, size, color, id, created_at} = this.props;

      

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
                                <div><button>Submit</button></div>
                                <div><button onClick={this.onBack}>Back</button></div>
                        </form>
                    )
                    : this.state.isDetails 
                    ? (
                        <div>
                        <div>{name}</div>
                        <div><img src="https://cdn0.iconfinder.com/data/icons/clothes-one-2/32/Clothes-89-128.png"/></div>
                        <div>
                            Size: {size} 
                            <br></br> 
                            Color: {color}
                            <br></br>
                            ID: {id}
                            <br></br>
                            Created at: {created_at}
                        </div>
                        <div><button onClick={this.onEdit}>Edit</button></div>
                        <div><button onClick={this.onDelete}>Delete</button></div>
                        <div><button onClick={this.onBack}>Back</button></div>
                        </div>
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

export default Sweatercard;