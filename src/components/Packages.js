import React, {useState, useEffect, useContext} from 'react';
import '../App.css';
import Toggle from './Toggle';
import PackagesForm from './PackagesForm';
import { PackageContext } from '../context/Package';

function Packages() {



    const [activePackage, setActivePackage] = useContext(PackageContext);
    const [packages, setPackages] = useState([]);

    const getPackages = async () => {
        const data = await fetch ('http://localhost:8080/employee/parcel/');
        const items = await data.json();
        console.log(items);
        setPackages(items);
    };

    useEffect(() => {
        console.log(activePackage.trackingID);
        if (!activePackage.trackingID) {
            getPackages();
        }
    }, [activePackage]);

    // useEffect(() => {
    //     getPackages();
    // }, []);

    const onRowClick = (row) => {
        setActivePackage(row);
    }


  return (
    <>
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
                    return <tr key={item.trackingID} onClick={() => onRowClick(item)}>
                        <td>{item.trackingID}</td>
                        <td>{item.customerName}</td>
                        <td>{item.startingPoint}</td>
                        <td>{item.currentPoint}</td>
                        <td>{item.destination}</td>
                        <td>{item.date}</td>
                    </tr>
                })} 
            </tbody>
        </table>
    </div>

    <div>
        <PackagesForm />
    </div>

    </>
  );
}

export default Packages;
