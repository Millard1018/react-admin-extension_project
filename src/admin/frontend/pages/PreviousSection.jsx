import { useState } from "react";
import { prevTableData } from "../js/adminData.js";
import RecipientModal from "../components/RecipientModal.jsx";
import RecipientTable from "../components/RecipientTable.jsx";
import Filter from "../components/Filter.jsx";

function PreviousSection({onChange}) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedBenefit, setSelectedBenefit] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("")

    if(selectedUser){
        document.getElementById("body").classList.add("overflow-hidden")
    } else {document.getElementById("body").classList.remove("overflow-hidden")}

    return (
        <>
            <div className="mt-[10vh]" id="previousSection">
                <div className=" gap-2 mb-10 sm:mb-15 flex items-center relative left-[6vw]">
                    <h2 className=" relative font-poppins  text-lg md:text-[1.30em] lg:text-3xl ">Previous</h2>
                    <h2 className=" font-hanken text-lg  sm:text-[2em] md:text-[2.3em]  ">BENEFITS</h2>
                    <div className=" md:w-15 bg-slate-900 w-12 h-0.5 sm:w-13 "></div>
                </div>
                
                <div className="flex xl:no-wrap justify-center relative gap-2 mb-10 md:top-[0vh]  ">
                    
                    <h2 id="month" className="xl:text-4xl lg:text-3xl text-2xl font-hanken relative">Month</h2>
                    <h2 id="year" className="xl:text-4xl lg:text-3xl text-2xl font-hanken relative">Year</h2>
                    
                </div>
            </div>

            <Filter tableType={"Previous"} onSearch={setSearch} search={search} onDate={setSelectedDate} date={selectedDate} onSelectStatus={setSelectedStatus} status={selectedStatus} onSelectBenefit={setSelectedBenefit} benefit={selectedBenefit} />
            <RecipientTable data={prevTableData} onSelect={setSelectedUser} nameSearch={search} date={selectedDate} benefit={selectedBenefit} status={selectedStatus} />
            {selectedUser && (
                <RecipientModal selectedUserData={selectedUser} onClose={() => setSelectedUser(null)}  tableData={prevTableData} tableDataName={"prevTableData"} onChange={onChange} />
            )}
        </>
    )
}

export default PreviousSection