import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationRoutes from "./ApplicationRoutes"
import EmployeeCard from './employee/EmployeeCard'

import "./Kennel.css"

class Kennel extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationRoutes />
      </>
    )
  }
}

export default Kennel