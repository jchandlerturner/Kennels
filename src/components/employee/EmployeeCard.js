import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className="pic" src={require('./boy-1.png')} alt="My Employee" />
          </picture>
          <h3><span className="card-petname">{this.props.employee.name}</span></h3>
          <p>{this.props.employee.position}</p>
          <button type="button" onClick={() => this.props.fireEmployee(this.props.employee.id)}>Fire 🔥</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;