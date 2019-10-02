import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }
    closeLocation = id => {
        LocationManager.closeLocation(id)
            .then(() => {
                LocationManager.getAllLocations()
                    .then((newLocation) => {
                        this.setState({
                            locations: newLocation
                        })
                    })
            })
    }
    //componentDidMount comes from REACT (basically saying when the component mounts, do THIS)
    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        LocationManager.getAllLocations()
            .then((locations) => {
                //setState is a method built into REACT
                this.setState({
                    locations: locations
                })
            })
    }
    //Every component has a render
    render() {
        console.log("LocationList: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Add Location
                </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location =>
                        <LocationCard
                            key={location.id}
                            location={location}
                            closeLocation={this.closeLocation}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default LocationList
