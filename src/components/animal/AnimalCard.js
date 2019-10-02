import React, { Component } from 'react';
import { Link } from "react-router-dom";


class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className="pic" src={require('./dog.png')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button className="hvr-float">Details</button></Link>
          <button type="button" className= "hvr-float" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge 👋</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;