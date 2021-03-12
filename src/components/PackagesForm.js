import React, { useContext, useState, useEffect } from 'react'
import { PackageContext } from '../context/Package';
import '../App.css';

function PackagesForm() {

    const [activePackage, setActivePackage] = useContext(PackageContext);
    const [trackingID, setTrackingID] = useState(activePackage?.trackingID);
    const [customerName, setCustomerName] = useState(activePackage?.customerName);


    function submit(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/employee/parcel/${trackingID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({customerName}) // body data type must match "Content-Type" header
        }).then(() => setActivePackage({}))
        .catch(err => {
            throw err;
        }) 
        
        console.log(trackingID, customerName);
    }


    useEffect(() => {
        setTrackingID(activePackage.trackingID);
        setCustomerName(activePackage.customerName);
    }, [activePackage]);


  return (
      <>
      {trackingID && (<form onSubmit={submit}>
        <input type="Tracking ID" value={trackingID} onChange={(e) => setTrackingID(e.target.value)}/>
        <input type="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
        <button type="submit">Submit</button>
    </form>)}
    </>
  );
}

export default PackagesForm;
