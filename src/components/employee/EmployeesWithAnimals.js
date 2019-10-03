import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager'
import AnimalList from '../animal/AnimalList'

class EmployeeWithAnimals extends Component {
  state = {
    employee: {},
    animals: []
  }

  deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => {
        EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
          .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
          })
      })
  }
  componentDidMount() {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
      .then((APIResult) => {
        this.setState({
          employee: APIResult,
          animals: APIResult.animals,
        })
      })
  }

  render() {
    return (
      <div className="card">
        <p>Employee: {this.state.employee.name}</p>
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
            {...this.props}
          />
        )}
      </div>
    )
  }
}

export default EmployeeWithAnimals;