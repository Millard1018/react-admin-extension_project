import { useState } from "react";
import { latestTableData } from "../adminData.js";
import RecipientModal from "./RecipientModal.jsx";
import RecipientTable from "./RecipientTable.jsx";
import Filter from "./Filter.jsx";

function LatestSection({onChange}) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("")
    const [selectedBenefit, setSelectedBenefit] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("")

    if(selectedUser){
        document.getElementById("body").classList.add("overflow-hidden")
    } else {document.getElementById("body").classList.remove("overflow-hidden")}

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                    <h2 className=" relative font-poppins top-2 md:top-2 text-[1.05em] md:text-[1.30em] lg:text-3xl ">Benefits</h2>
                    <h2 className=" font-hanken text-[1.7em] sm:text-[2em] md:text-[2.3em] lg:text-4xl  ">STATUS</h2>
                    <div className=" md:w-15 bg-slate-900 w-12 h-1 sm:w-13 top-2 lg:top-3 relative mb-15"></div>
            </div>

            <div id="latestSection" className=" gap-2 mb-10 sm:mb-15 flex items-center relative ml-[6vw]">
                <h2 className=" relative font-poppins  text-lg md:text-[1.30em] lg:text-3xl ">Latest</h2>
                <h2 className=" font-hanken text-lg  sm:text-[2em] md:text-[2.3em]  ">BENEFITS</h2>
                <div className=" md:w-15 bg-slate-900 w-12 h-0.5 sm:w-13 "></div>
            </div>

            <Filter tableType={"Latest"} onSearch={setSearch} search={search} onSelectStatus={setSelectedStatus} status={selectedStatus} onSelectBenefit={setSelectedBenefit} benefit={selectedBenefit} />
            <RecipientTable data={latestTableData} onSelect={setSelectedUser} nameSearch={search} benefit={selectedBenefit} status={selectedStatus} />
            {selectedUser && (
                <RecipientModal selectedUserData={selectedUser} onClose={() => setSelectedUser(null)} tableData={latestTableData} tableDataName={"latestTableData"} onChange={onChange} />
            )}
        </>
    )
}

export default LatestSection