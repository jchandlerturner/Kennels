import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className="pic" src={require('./girl-1.png')} alt="My Owner" />
          </picture>
          <h3><span className="card-petname">{this.props.owner.name}</span></h3>
          <p>{this.props.owner.owns}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Discharge 👋</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;