import * as React from 'react'
import { useState } from 'react'

class DriverForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            driverName: "",
            carrier: "",
            TWICExp: "",
            product: "",
            phoneNumber: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
        event.preventDefault();
        alert('Driver info submitted:  \n' +
            'Driver: ' + this.state.driverName + '\n' +
            'Carrier: ' + this.state.carrier + '\n' +
            'TWIC Expiration: ' + this.state.TWICExp + '\n' +
            'Product: ' + this.state.product + '\n' +
            'Phone Number: ' + this.state.phoneNumber
        );
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:
                    <input
                        type="text"
                        id="name"
                        name="driverName"
                        value={this.state.driverName}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label htmlFor="carrier">Carrier:
                    <input
                        type="text"
                        id="carrier"
                        name="carrier"
                        value={this.state.carrier}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label htmlFor="TWICExp">TWIC Expiration:
                    <input
                        type="text"
                        id="TWICExp"
                        name="TWICExp"
                        value={this.state.TWICExp}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label htmlFor="product">Product:
                    <input
                        type="text"
                        id="product"
                        name="product"
                        value={this.state.product}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label htmlFor="phoneNumber">Phone Number (optional):
                    <input
                        type="text"
                        id="phoneNumber" 
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <input
                    type="submit"
                    value="Submit"
                    onSubmit={this.handleSubmit}
                />
            </form>
        );
    }
}

export default DriverForm