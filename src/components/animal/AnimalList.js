import React, { Component } from 'react'
import './Animal.css'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    //componentDidMount comes from REACT (basically saying when the component mounts, do THIS)
    componentDidMount() {
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
            .then((animals) => {
                //setState is a method built into REACT
                this.setState({
                    animals: animals
                })
            })
    }
    //Every component has a render
    render() {
        console.log("AnimalList: Render");

        return (
            <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/animals/new") }}>
                    Admit Animal
                </button>
            </section>
            <section className="cardsFlex"> 
                <div className="container-cards">
                    {this.state.animals.map(animal =>
                        <AnimalCard
                            key={animal.id}
                            animal={animal}
                            deleteAnimal={this.deleteAnimal}
                            {...this.props}
                        />
                    )}
                </div>
            </section>
                </>
                )
                }
        }
        
        export default AnimalList
