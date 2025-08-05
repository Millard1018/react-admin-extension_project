import { useState } from "react";
import { latestTableData, prevTableData, incomingTableData } from "./js/adminData.js";
import Summary from "./pages/Summary.jsx";
import LatestSection from "./pages/LatestSection.jsx";
import PreviousSection from "./pages/PreviousSection.jsx";
import IncomingSection from "./pages/IncomingSection.jsx";

export default function App() {

    const [data, setData] = useState({
        "latestTableData" : latestTableData,
        "prevTableData" : prevTableData,
        "incomingTableData" : incomingTableData
    });

    return (
        <>
            <Summary wholeData={data} />
            <section id="statusSection" className="sectionContainer mt-20">
                <LatestSection onChange={setData}/>
                <PreviousSection onChange={setData} />
                <IncomingSection onChange={setData} />
            </section>
        </>
    )
}