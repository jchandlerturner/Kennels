import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import LocationList from './location/LocationList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews