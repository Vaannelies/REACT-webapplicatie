class Sweatercard extends React.Component {

    showDetails() {
        alert('Clicked!')
    }
    
    render() {
        const {name, size, color} = this.props;

      

        return (
            <div className="card">
                <div>{name}</div>
                <div><img src="https://cdn0.iconfinder.com/data/icons/clothes-one-2/32/Clothes-89-128.png"/></div>
                <div>Size: {size} <br></br>

                Color: {color}</div>
                <div><button onClick={this.showDetails}>Details?!</button></div>
            </div>
        )
    }
}