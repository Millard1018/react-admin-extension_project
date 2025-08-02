import { useState } from "react";
import { incomingTableData } from "../adminData.js";
import RecipientModal from "./RecipientModal.jsx";
import RecipientTable from "./RecipientTable.jsx";
import Filter from "./Filter.jsx";

export default function IncomingSection({onChange}) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("");
    const [selectedBenefit, setSelectedBenefit] = useState("");

    return (
        <>
            <div id="incomingSection" className=" mt-20 pb-40">
                    <div className=" gap-2 mb-10 sm:mb-15 flex items-center relative ml-[6vw]">
                        <h2 className=" relative font-poppins  text-lg md:text-[1.30em] lg:text-3xl ">Incoming</h2>
                        <h2 className=" font-hanken text-lg  sm:text-[2em] md:text-[2.3em]  ">BENEFITS</h2>
                        <div className=" md:w-15 bg-slate-900 w-12 h-0.5 sm:w-13 "></div>
                    </div>
                <Filter tableType={"Incoming"} onSearch={setSearch} search={search} onSelectBenefit={setSelectedBenefit} benefit={selectedBenefit} />
                <RecipientTable data={incomingTableData} onSelect={setSelectedUser} nameSearch={search} benefit={selectedBenefit} />
                {selectedUser && (
                    <RecipientModal data={selectedUser} onClose={() => setSelectedUser(null)}  tableData={incomingTableData} tableDataName={"incomingTableData"} onChange={onChange} />
                )}
            </div>
        </>
    );
}