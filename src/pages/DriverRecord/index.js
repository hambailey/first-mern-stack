import * as React from 'react'
import { useState } from 'react'
import DriverForm from '../../components/driverForm'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// BWCTruckDriverOrientationRecords

const DriverRecordPage = () => {

    return (
        <Layout pageTitle="Truck Driver Orientation Records" >
            <p> Purpose: easy search list for truck drivers that have signed an orientation paper.</p>
            <p> Future Features: 
                <li>
                    After server record saves established. Make Carrier and Product dropdown selections. This will require a webpage for creating new selections for each domain.
                </li>
                <li>
                    Notification for drivers expiring soon.
                </li>
                <li>
                    Have the form create a seperate .mdx file per driver. (overkill on purpose to allow for more features later)
                </li>
            </p>
            <p> <b>**Current task:**</b> submit each driver to a server as a record.</p>
            <DriverForm />
        </Layout>
    )
}

export const Head = () => <Seo title="Driver Orientation" />

export default DriverRecordPage