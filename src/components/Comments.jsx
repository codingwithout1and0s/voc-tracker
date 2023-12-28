import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // React Grid Logic
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css" // Theme

const Comments = () => {

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { Date: "10/2/2023", "Voice Feedback": "Kevin was awesome", ContactID: "154406-8325", Loan: "4393555", AHT: "685", CSAT: 5 },
        { Date: "10/3/2023", "Voice Feedback": "By continuing friendly & informative communication", ContactID: "154407-18879", Loan: "1079071", AHT: "650", CSAT: 5 },
        { Date: "10/3/2023", "Voice Feedback": "How is scanning and printing on my end a document different than you getting the digital document and printing yourself? The only difference is however long the mail takes and my paying for shipping.", ContactID: "154407-19086", Loan: "1094590", AHT: "805", CSAT: 1 },
        { Date: "10/3/2023", "Voice Feedback": "The guy who answered my call was very salty about people calling and asking a simple question. I was confused why my loan payment didn’t come out Tuesday morning. I knew it was a holiday on Monday but I was under the impression the payment would come out Tuesday morning (like all my other payments out of my account……). The guy who answered my call said something along the lines of “I’m so annoyed by people calling about this today.” Kinda irritating. Don’t be rude to be for asking a simple question", ContactID: "154407-23061", Loan: "1940040", AHT: "900", CSAT: 1 },
        { Date: "10/3/2023", "Voice Feedback": "I reported my experience with educational institution-CDI College to NSLSC service rep but shown inability to help. If he or she report to their authority that the student is victim of institution's malafide act and not benefited of the education for what he was enrolled. Institution must be asked explanation. Number of students has similar experience. If NSLSC authority intervene in the matter and help for refund and compensation, I will appreciate it. Thanks,", ContactID: "154407-23542", Loan: "1773358", AHT: "1280", CSAT: 3 },
        { Date: "10/4/2023", "Voice Feedback": "Representative seemed like they were in a rush and it didn’t feel genuine at all.", ContactID: "154408-19498", Loan: "9104296", AHT: "1175", CSAT: 3 }
    ]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
        { field: "Date" },
        { field: "Voice Feedback" },
        { field: "ContactID" },
        { field: "Loan" },
        { field: "AHT" },
        { field: "CSAT" }

    ]);

    return (
        <div className="ag-theme-quartz px-5 mt-5" style={{ height: 500 }}>
            {/* The AG Grid component */}
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
    )
}

export default Comments
