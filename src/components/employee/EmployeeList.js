import React, { Component } from 'react'

    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }
        fireEmployee = id => {
            EmployeeManager.delete(id)
            .then(() => {
              EmployeeManager.getAllEmployees()
              .then((newEmployee) => {
                this.setState({
                    employee: newEmployee
                })
              })
            })
          }
        //componentDidMount comes from REACT (basically saying when the component mounts, do THIS)
    componentDidMount(){
        console.log("Employee List: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        EmployeeManager.getAllEmployees()
        .then((employees) => {
                //setState is a method built into REACT
            this.setState({
                employees: employees
            })
        })
    }
        //Every component has a render
        render(){
            console.log("EmployeeList: Render");
            
            return(
                <div className="container-cards">
                {this.state.employees.map(employee =>
                    <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    fireEmployee={this.fireEmployee}
                    />
                )}
                </div>
            )
            }
}

export default EmployeeList
