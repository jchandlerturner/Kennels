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
          <h3><span className="card-petname">{this.props.myLocation.name}</span></h3>
          <p><strong>Address: </strong>{this.props.myLocation.address}</p>
          <Link to={`/locations/${this.props.myLocation.id}`}><button className="hvr-float">Details</button></Link>
          {(this.props.user) ?
          <button type="button" className="hvr-float" onClick={() => this.props.closeLocation(this.props.myLocation.id)}>Close ❌</button>
          : ""
        }
        {(this.props.user) ?
          <button type="button" className="hvr-float"
        onClick={() => {this.props.history.push(`/locations/${this.props.myLocation.id}/edit`)}}>Edit</button>
        : ""
        }
        </div>
      </div>
    );
  }
}

export default LocationCard;