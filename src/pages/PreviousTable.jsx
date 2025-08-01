import { useState } from "react";
import { prevTableData } from "../adminData.js";
import RecipientModal from "./RecipientModal.jsx";
import RecipientTable from "./RecipientTable.jsx";
import Filter from "./Filter.jsx";

function PreviousTable() {
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
            <Filter tableType={"Previous"} onSearch={setSearch} search={search} onDate={setSelectedDate} date={selectedDate} onSelectStatus={setSelectedStatus} status={selectedStatus} onSelectBenefit={setSelectedBenefit} benefit={selectedBenefit} />
            <RecipientTable data={prevTableData} onSelect={setSelectedUser} nameSearch={search} date={selectedDate} benefit={selectedBenefit} status={selectedStatus} />
            {selectedUser && (
                <RecipientModal data={selectedUser} onClose={() => setSelectedUser(null)}/>
            )}
        </>
    )
}

export default PreviousTable