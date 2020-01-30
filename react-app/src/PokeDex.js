import React from 'react';
import AddSweater from './AddSweater';
import Sweatercard from './Sweatercard';
import { Router, Route, hashHistory} from 'react-router';

class PokeDex extends React.Component {
    constructor() {
        super()
        this.state = { 
            sweaters: [],
            total: null,
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentDidMount() {
        this.loadPokemon()
    }
    
    async loadPokemon() {
        const response = await fetch(`http://145.24.222.55:8000/sweaters`)
        const json = await response.json()
        console.log(json.items)
        this.setState({sweaters: json.items, total: json.items.length})
    } 

    onAdd(name,color,size) {
        console.log(name,color,size);

        const sweaters = this.state.sweaters;
        sweaters.push({name,color,size});
        this.setState({sweaters: sweaters, total: sweaters.length});

        
        fetch('http://145.24.222.55:8000/sweaters', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: name,
        color: color,
        size: size
  })


});
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
        this.setState({sweaters: filteredSweaters, total: filteredSweaters.length})
        fetch("http://145.24.222.55:8000/sweaters/" + id, requestOptions).then((response) => {
            return response.json();
        });

      //  this.setState
    }

    onEditSubmit(name, color, size, id) {
        const requestOptions = {
            method: 'PUT'
        };
        let sweaters = this.state.sweaters;

        sweaters = sweaters.map(sweater => {
            if (sweater._id == id) {
                sweater.name = name;
                sweater.color = color;
                sweater.size = size;
            }
            return sweater;
        });

        
        this.setState({sweaters});
        fetch("http://145.24.222.55:8000/sweaters/" + id, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: name,
        color: color,
        size: size
  })


})
    
    }

      

    render() {
   
        let thumbs = this.state.sweaters.map((sweaters, i) =>
            <Sweatercard key={i} 
            name={sweaters.name} 
            color={sweaters.color} 
            size={sweaters.size} 
            image={sweaters.image} 
            id={sweaters._id} 
            created_at={sweaters.created_at}  
            onDelete={this.onDelete} 
            onEditSubmit={this.onEditSubmit}>
                
            </Sweatercard>
        )
   
       

        return (
        
            <div className="pokedex">
                <div>
                    <AddSweater onAdd={this.onAdd}/>
                </div><br></br>
                <div>
                    <button>Load next 9 sweaters</button>
                </div>
                <div>
                    Bought: {this.state.total}
                </div>
                <div className="thumbnails">
                    {thumbs}
                </div>
            
              
            </div>
        )   
    }
}

export default PokeDex;