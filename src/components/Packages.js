import React, {useState, useEffect} from 'react';
import '../App.css';
import Toggle from './Toggle';

function Packages() {

    useEffect(() => {
        getPackages();
    }, []);

    const [packages, setPackages] = useState([]);
    const [parcel, setParcel] = useState();

    const getPackages = async () => {
        const data = await fetch ('http://localhost:8080/employee/parcel/');
        const items = await data.json();
        console.log(items);
        setPackages(items);
    };



  return (
    <div className="package-table">
        <h2>Packages</h2>
        <table>
            <thead>
                <tr>
                    <th>Tracking Number</th>
                    <th>Customer Name</th>
                    <th>Starting Location</th>
                    <th>Current Location</th>
                    <th>Destination</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>           
                {packages.map(item =>  {
                    return <tr key={item.trackingID}>
                        <td>{item.trackingID}</td>
                        <td>{item.customerName}</td>
                        <td>{item.startingPoint}</td>
                        <td>{item.currentPoint}</td>
                        <td>{item.destination}</td>
                        <td>{item.date}</td>
                        <td><Toggle render={() => (
                            <button>Update</button>
                        )}/></td>
                    </tr>
                })} 
            </tbody>
        </table>
    </div>
  );
}

export default Packages;
