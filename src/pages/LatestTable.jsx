import { useState } from "react";
import { latestTableData } from "../adminData.js";
import RecipientModal from "./RecipientModal.jsx";
import RecipientTable from "./RecipientTable.jsx";
import Filter from "./Filter.jsx";

function LatestTable() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState(null)
    const [selectedBenefit, setSelectedBenefit] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null)

    if(selectedUser){
        document.getElementById("body").classList.add("overflow-hidden")
    } else {document.getElementById("body").classList.remove("overflow-hidden")}

    return (
        <>
            <Filter tableType={"Latest"} onSearch={setSearch} search={search} onSelectStatus={setSelectedStatus} onSelectBenefit={setSelectedBenefit} />
            <RecipientTable data={latestTableData} onSelect={setSelectedUser} nameSearch={search} benefit={selectedBenefit} status={selectedStatus} />
            {selectedUser && (
                <RecipientModal data={selectedUser} onClose={() => setSelectedUser(null)}/>
            )}
        </>
    )
}

export default LatestTable