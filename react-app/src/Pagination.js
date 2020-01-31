import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.onNext = this.onNext.bind(this);
    }

 

    
    onNext() {
    
        this.props.onNextpage()
     
    }
    onPrevious(event) {
        event.preventDefault();
        this.props.onPrevious(-5);
    }

    render() {
        const {name, size, color} = this.props;

      

        return (
            <div className="add-new-card">
            <h3>Choose page (werkt niet)</h3>

            <button onClick={this.onNext}>Load next 5 sweaters</button>
            <button onClick={this.onPrevious}>Load previous 5 sweaters</button>
  
            </div>
        )
    }
}

export default Pagination;