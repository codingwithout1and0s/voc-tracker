import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCsatContext } from '../Contexts/CsatContext'
import { AgGridReact } from 'ag-grid-react' // React Grid Logic
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import 'ag-grid-community/styles/ag-theme-balham.min.css' // Theme

const Comments = () => {

    const { setAvgCsat, setCsatDataPoints, csatDataPoints } = useCsatContext();

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { Date: "10/2/2023", "Voice Feedback": "Kevin was awesome", ContactID: "154406-8325", AHT: "685", CSAT: 5 },
        { Date: "10/3/2023", "Voice Feedback": "By continuing friendly & informative communication", ContactID: "154407-18879", AHT: "650", CSAT: 5 },
        { Date: "10/3/2023", "Voice Feedback": "How is scanning and printing on my end a document different than you getting the digital document and printing yourself? The only difference is however long the mail takes and my paying for shipping.", ContactID: "154407-19086", AHT: "805", CSAT: 1 },
        { Date: "10/3/2023", "Voice Feedback": "The guy who answered my call was very salty about people calling and asking a simple question. I was confused why my loan payment didn’t come out Tuesday morning. I knew it was a holiday on Monday but I was under the impression the payment would come out Tuesday morning (like all my other payments out of my account……). The guy who answered my call said something along the lines of “I’m so annoyed by people calling about this today.” Kinda irritating. Don’t be rude to be for asking a simple question", ContactID: "154407-23061", AHT: "900", CSAT: 1 },
        { Date: "10/3/2023", "Voice Feedback": "I reported my experience with educational institution-CDI College to NSLSC service rep but shown inability to help. If he or she report to their authority that the student is victim of institution's malafide act and not benefited of the education for what he was enrolled. Institution must be asked explanation. Number of students has similar experience. If NSLSC authority intervene in the matter and help for refund and compensation, I will appreciate it. Thanks,", ContactID: "154407-23542", AHT: "1280", CSAT: 3 },
        { Date: "10/4/2023", "Voice Feedback": "Representative seemed like they were in a rush and it didn’t feel genuine at all.", ContactID: "154408-19498", AHT: "1175", CSAT: 3 }
    ]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
        { field: "Date", width: 90 },
        { field: "Voice Feedback", width: 750, wrapText: true, autoHeight:true },
        { field: "ContactID", width: 100 },
        { field: "AHT", width: 60 },
        { field: "CSAT", width: 60 }
    ]);

    let addArray = [];

    useEffect(() => {
        setAvgCsat(currAvgCSAT);

        for (let i = 0; i < rowData.length; i++) {
            console.log(rowData[i].CSAT)

            // addArray.push(rowData[i].CSAT)
        }
        setCsatDataPoints([...csatDataPoints, addArray]);
        console.log("The data points for CSAT are: " + csatDataPoints);
        console.log("csatDataPoints length: " + csatDataPoints.length);
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
