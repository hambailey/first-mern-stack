import * as React from 'react'
import { useState } from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// BWCTruckDriverOrientationRecords

const DriverRecordPage = () => {
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
                <label htmlFor="name">Name:
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <br/>
                <label htmlFor="carrier">Carrier:
                    <input type="carrier" id="carrier" name="carrier" value={formData.carrier} onChange={handleChange}/>
                </label>
                <br/>
                <label htmlFor="TWICExp">TWIC Expiration:
                    <input type="text" id="TWICExp" name="TWICExp" value={formData.TWICExp} onChange={handleChange}/>
                </label>
                <br/>
                <label htmlFor="product">Product:
                    <input type="text" id="product" name="product" value={formData.product} onChange={handleChange}/>
                </label>
                <br/>
                <label htmlFor="phoneNumber">Phone Number (optional):
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                </label>
            </form>
        </Layout>
    )
}

export const Head = () => <Seo title="Driver Orientation" />

export default DriverRecordPage