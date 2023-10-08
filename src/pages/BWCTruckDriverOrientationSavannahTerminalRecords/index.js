import * as React from 'react'
import { useState } from 'react'
import Layout from '../../components/layout'

const BWCTruckDriverOrientationRecords = () => {
    const [formData, setFormData] = useState({name: "", carrier: "", TWICExp: "", product: "", phoneNumber: ""});
    // const [inputError, setInputError] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Name: $formData.name, has been registered');

    };

    return (
        <Layout pageTitle="Truck Driver Orientation Records" >
            <p> Purpose: easy search list for truck drivers that have signed an orientation paper.</p>
            <p> Let's create a form. The form creates a seperate .mdx file per driver. (overkill on purpose to allow for more features later) </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <label htmlFor="carrier">Carrier:</label>
                <input type="carrier" id="carrier" name="carrier" value={formData.carrier} onChange={handleChange}/>
                <label htmlFor="TWICExp">TWIC Expiration:</label>
                <input type="text" id="TWICExp" name="TWICExp" value={formData.TWICExp} onChange={handleChange}/>
                <label htmlFor="product">Product:</label>
                <input type="text" id="product" name="product" value={formData.product} onChange={handleChange}/>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
            </form>
        </Layout>
    )
}

export const Head = () => <title>Truck DRiver Orientation Records</title>

export default BWCTruckDriverOrientationRecords