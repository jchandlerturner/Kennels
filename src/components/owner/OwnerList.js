import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }
        deleteOwner = id => {
            OwnerManager.delete(id)
            .then(() => {
              OwnerManager.getAllOwners()
              .then((newOwner) => {
                this.setState({
                    owner: newOwner
                })
              })
            })
          }

        //componentDidMount comes from REACT (basically saying when the component mounts, do THIS)
    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        OwnerManager.getAllOwners()
        .then((owners) => {
                //setState is a method built into REACT
            this.setState({
                owners: owners
            })
        })
    }
        //Every component has a render
        render(){
            console.log("OwnerList: Render");
            
            return(
                <div className="container-cards">
                {this.state.owners.map(owner =>
                    <OwnerCard
                    key={owner.id}
                    owner={owner}
                    deleteOwner={this.deleteOwner}
                    />
                )}
                </div>
            )
            }
}

export default OwnerList
