import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCsatContext } from '../Contexts/CsatContext'
import { AgGridReact } from 'ag-grid-react' // React Grid Logic
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import 'ag-grid-community/styles/ag-theme-balham.min.css' // Theme
import myData from '../../agent-stat.json';

const Comments = () => {

    const { setCurrCsat, setCsatDataPoints, csatDataPoints } = useCsatContext();

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
        { field: "Date", width: 90 },
        { field: "Voice Feedback", width: 750, wrapText: true, autoHeight:true },
        { field: "ContactID", width: 100 },
        { field: "AHT", width: 60 },
        { field: "CSAT", width: 60 }
    ]);

    // let addArray = [];

    useEffect(() => {
        
        setRowData(myData.agent);
        setCurrCsat(currAvgCSAT);
        

        // for (let i = 0; i < rowData.length; i++) {
        //     console.log(rowData[i].CSAT)

        //     // addArray.push(rowData[i].CSAT)
        // }
        // setCsatDataPoints([...csatDataPoints, addArray]);
        // console.log("The data points for CSAT are: " + csatDataPoints);
        // console.log("csatDataPoints length: " + csatDataPoints.length);
    },[])
    const currAvgCSAT = rowData.reduce((sum, curr) => sum + curr.CSAT, 0) /rowData.length;
    return (
        <section 
            className="ag-theme-balham mb-5" 
            style={{ height: 500 }}
        >
            <p><b>AVG CSAT: {currAvgCSAT} / 5.00</b></p>
            <div className='d-flex reduce-margin-top'>
                <Link to="/full-comments" className=''>Full View</Link>
                <p style={{ marginLeft: 'auto'}}>Last updated...</p>
            </div>

            <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </section>
    )
}

export default Comments
