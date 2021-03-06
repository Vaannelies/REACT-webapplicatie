import React from 'react';

class AddSweater extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.colorInput.value, this.sizeInput.value);
        this.nameInput.value = '';
        this.colorInput.value = '';
        this.sizeInput.value = '';
    }


    render() {
        const {name, size, color} = this.props;

      

        return (
            <div className="add-new-card">
            <h3>Add a new sweater</h3>

            <form onSubmit={this.onSubmit}>
                <div>
                    <span>Name {`  `}
                    <input placeholder="Enter a name..." ref={nameInput => this.nameInput = nameInput} required />
                    </span>
                </div>
                {`  `}
                <div>
                    <span>Color {`  `}
                    <input placeholder="Pick a color..." ref={colorInput => this.colorInput = colorInput} required/>
                    </span>
                </div>
                {`  `}
                <div>
                    <span>Size {`  `}
                    <input placeholder="Pick a size..." ref={sizeInput => this.sizeInput = sizeInput} required/>
                    </span>
                </div>
                {`  `}
                <button>Add</button>
            </form>
            </div>
        )
    }
}

export default AddSweater;