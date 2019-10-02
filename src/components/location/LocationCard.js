import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className="pic" src={require('./hospital.png')} alt="My Vet" />
          </picture>
          <h3><span className="card-petname">{this.props.location.name}</span></h3>
          <p><strong>Address: </strong>{this.props.location.address}</p>
          <Link to={`/locations/${this.props.location.id}`}><button className="hvr-float">Details</button></Link>
          <button type="button" className="hvr-float" onClick={() => this.props.closeLocation(this.props.location.id)}>Close ❌</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;