import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        breed: "",
        loadingStatus: true,
    }
    
    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        LocationManager.closeLocation(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    componentDidMount(){
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
                name: location.name,
                address: location.address,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            <img className="pic" src={require('./hospital.png')} alt="My Vet" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close ❌</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;