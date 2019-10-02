import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        ownerName: "",
        owns: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.owns === "") {
            window.alert("Please enter owner information");
        } else {
            this.setState({ loadingStatus: true });
            const Owner = {
                name: this.state.ownerName,
                owns: this.state.owns,
            };

            // Create the animal and redirect user to animal list
            OwnerManager.post(Owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ownerName"
                        placeholder="Owner Name"
                        />
                        <label htmlFor="ownerName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="owns"
                        placeholder="Owns"
                        />
                        <label htmlFor="owns">Owns</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm