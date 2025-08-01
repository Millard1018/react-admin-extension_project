import { useState } from "react";
import { latestTableData } from "../adminData.js";
import RecipientModal from "./RecipientModal.jsx";
import RecipientTable from "./RecipientTable.jsx";
import Filter from "./Filter.jsx";

function LatestTable() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("")
    const [selectedBenefit, setSelectedBenefit] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("")

    if(selectedUser){
        document.getElementById("body").classList.add("overflow-hidden")
    } else {document.getElementById("body").classList.remove("overflow-hidden")}

    return (
        <>
            <Filter tableType={"Latest"} onSearch={setSearch} search={search} onSelectStatus={setSelectedStatus} status={selectedStatus} onSelectBenefit={setSelectedBenefit} benefit={selectedBenefit} />
            <RecipientTable data={latestTableData} onSelect={setSelectedUser} nameSearch={search} benefit={selectedBenefit} status={selectedStatus} />
            {selectedUser && (
                <RecipientModal data={selectedUser} onClose={() => setSelectedUser(null)}/>
            )}
        </>
    )
}

export default LatestTable