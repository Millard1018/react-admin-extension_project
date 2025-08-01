function RecipientTable({data, onSelect, nameSearch, date, benefit, status}) {

    function trClassHelper(status) {
        if (status === "Available") {
            return "available group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
        } 
        else if (status === "Unavailable") {
            return "unavailable group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
        } 
        else if (status === "Delayed") {
            return "delayed group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
        }
        else if (status === "Unclaimed") {
            return "unclaimed group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
        }  
        else {
            return "group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
        }
    }

    function getStatusIcon(status) {
        if (status === "Claimed") {
            return (<div className="flex items-center justify-center">
                        <div className="group-hover:bg-gray-500 group-hover:text-white flex items-center bg-gray-200 rounded-3xl py-0.5 text-black px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" text-gray-500 group-hover:text-white size-5 mr-[0.2vw]">
                                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg> Claimed
                        </div>
                    </div>);
            }
        if (status === "Unclaimed") {
            return (<div className="flex items-center justify-center">
                        <div className=" group-hover:bg-slate-900 group-hover:text-white flex items-center bg-slate-200 rounded-3xl py-0.5 text-black px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 mr-[0.2vw]">
                                <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                            </svg> Unclaimed
                        </div>
                    </div>);
        }
        if (status === "Delayed") {
            return (<div className="flex items-center justify-center">
                        <div className="group-hover:bg-amber-500 group-hover:text-white flex items-center bg-amber-200 rounded-3xl py-0.5 text-black px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-amber-500 group-hover:text-white size-4 mr-[0.2vw]">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
                            </svg> Delayed
                        </div>
                    </div>);
        }
        if (status === "Unavailable") {
            return (<div className="flex items-center justify-center">
                        <div className="child group-hover:bg-red-800 group-hover:text-white flex items-center bg-red-200 rounded-3xl py-0.5 text-black px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-red-800 group-hover:text-white size-5">
                                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                            </svg> Unavailable
                        </div>
                    </div>);
        }
        if (status === "Available") {
            return (<div className="flex items-center justify-center">
                        <div className=" group-hover:bg-green-500 group-hover:text-white flex items-center bg-green-200 rounded-3xl py-0.5 text-black px-2">
                            <div className="size-3 mr-[0.2vw] rounded-full bg-green-500 group-hover:bg-white"></div> Available
                        </div>
                    </div>);
        }
    }

    function dateHelper(date) {
        if(date) {
           const months = ["January", "Febrauary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const [year, month] = date.split("-");
        const monthIndex = parseInt(month, 10) -1;
        const monthYear = `${months[monthIndex]} ${year}`
        document.getElementById("month").textContent = months[monthIndex] //katamaran toh pero ok na yan
        document.getElementById("year").textContent = year
        return monthYear 
        } else {
            return null
        }
    }


    const filteredTable = data.filter(row => {
        const matchSearch = row.getName().toLowerCase().includes(nameSearch ? nameSearch.toLowerCase().trim() : "");

        const stringDate = dateHelper(date);
        const matchDate = !stringDate ? true : row.getDate() === stringDate;

        const matchBenefit = !benefit || benefit === "All Benefits" ? true : row.getBenefit() === benefit;

        const matchStatus = !status || status === "All Statuses" ? true : row.getStatus() === status;

        return matchSearch && matchDate && matchBenefit && matchStatus;
    });

    return (
        <div>
            <div className="overflow-y-auto lg:overflow-x-hidden overflow-x-auto h-[50vh] w-[87.1vw] relative mx-auto rounded-2xl">
                <table className="border-collapse shadow-2xs bg-slate-50 w-[87vw] text-wrap font-poppins text-center">
                    <thead className="sticky top-0  bg-green-800 font-hanken text-white">
                        <tr className="p-0">
                        <td className="md:flex items-center justify-center hidden">Transaction Number</td>
                        <td >Recipient Name</td>
                        <td className=" md:flex items-center justify-center hidden">ID Number</td>
                        <td >Benefits</td>
                        <td >Date of Claim</td>
                        <td >Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTable.map((user, index) => (
                            <tr key={index} onClick={() => onSelect(user)}
                            className={trClassHelper(user.getStatus())}>
                                <td className="md:flex items-center justify-center h-10 hidden">{user.getTransactionNo()}</td>
                                <td>{user.getName()}</td>
                                <td className="md:flex items-center justify-center h-10 hidden">{user.getID()}</td>
                                <td>{user.getBenefit()}</td>
                                <td>{user.getDate()}</td>
                                <td>{getStatusIcon(user.getStatus())}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>           
            </div>
        </div>    
    )
}

export default RecipientTable