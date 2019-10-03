import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationRoutes from "./ApplicationRoutes"
import EmployeeCard from './employee/EmployeeCard'

import "./Kennel.css"

class Kennel extends Component {
  state = {
    user: false
  }
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    localStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />        
        <ApplicationRoutes user={this.state.user}
          setUser={this.setUser} />
      </>
    )
  }
}

export default Kennel