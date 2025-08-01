import { useState } from "react"
import { latestTableData, prevTableData, incomingTableData } from "../adminData"

function RecipientModal({data, onClose}) {

    const [confirm, setConfirm] = useState(false);

    function claimHelper() {
        setConfirm(false);

        const found = latestTableData.find(user => user.getTransactionNo() === data.getTransactionNo() && user.getStatus() === data.getStatus()) ||
                    prevTableData.find(user => user.getTransactionNo() === data.getTransactionNo() && user.getStatus() === data.getStatus()) ||
                    incomingTableData.find(user => user.getTransactionNo() === data.getTransactionNo() && user.getStatus() === data.getStatus());

        if (found) {
            found.setStatus("Claimed");
        }
    }

    return (
        <div>
            <div className={`z-50 w-screen h-[120vh] fixed left-0 top-0 bg-slate-900 opacity-70 backdrop-blur-xs overflow-hidden`}></div>
            
            <div onClick={onClose} className={` h-full w-full z-50 fixed inset-0`}>
                <div onClick={(event) => event.stopPropagation()} className="fixed top-[12vh] lg:top-[20vh] bottom-[15vh] lg:bottom-[20vh] left-[15vw] right-[15vw] flex flex-col lg:flex-row space-y-[1vh] z-60 lg:text-[1.2em]">
                    <div className="flex flex-1 flex-col space-y-[1vh]">
                        <div className="bg-white flex-1/5 rounded-2xl flex p-1">
                            <div className=" flex-1 flex items-center pl-[1vw] font-bold">{data.getName()}</div>
                            <div className="flex-1 flex items-center justify-center p-[2vw] lg:p-[1vw]">
                                <div className="border-2 size-[25vw] md:size-[15vw] lg:size-[10vw] border-dashed rounded-2xl "></div>
                                <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl relative -top-[6vh] lg:-top-[8vh] -right-[1vw]">&times;</button>
                            </div>
                        </div>
                        <div className="bg-white flex-1/2 rounded-2xl flex flex-col p-2">
                            <div className="flex-1/64 font-bold mr-4">Personal Information
                                <div className="border"></div>
                            </div>
                            <div className="flex-2/3 flex">
                                <div className="flex-1 space-y-1">
                                    <p className="font-bold w-fit">ID <br/><span className="font-normal">{data.getID()}</span></p>
                                    <p className="font-bold w-fit">Birthday <br/><span id="modalBirthday" className="font-normal">{data.getBirthday()}</span></p>
                                    <p className="font-bold w-fit">Address <br/><span id="modalAddress" className="font-normal">{data.getAddress()}</span></p>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="font-bold w-fit">Contact <br/><span id="modalContact" className="font-normal">{data.getContact()}</span></p>
                                    <p className="font-bold w-fit">Disability <br/><span id="modalDisability" className="font-normal">{data.getDisability()}</span></p>
                                    <p className="font-bold w-fit">Status <br/><span id="modalStatus" className="font-normal">{data.getStatus()}</span></p>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    <div className="bg-slate-100/70 flex-1 lg:h-[60vh] xl:h-[48vh] rounded-2xl flex flex-col lg:ml-2">
                        <div className="bg-white flex flex-col flex-2/3 rounded-2xl p-2">
                            <div className="flex-1/64 font-bold">Transaction Details
                                <div className="border"></div>
                            </div>
                            <div className="flex-2/3 flex">
                                <div className="flex-1">
                                    <p className="font-bold w-fit">Transaction No<br/><span id="modalTransactionNo" className="font-normal">{data.getTransactionNo()}</span></p>
                                    <p className="font-bold w-fit">Benefit Name <br/><span id="modalBenefit" className="font-normal">{data.getBenefit()}</span></p>
                                    <p className="font-bold w-fit">Type <br/><span id="modalType" className="font-normal">{data.getType()}</span></p>
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold w-fit"><span id="changeClaim">Date of Claim</span><br/><span id="modalDate" className="font-normal ">{data.getDate()}</span></p>
                                    <p className="font-bold w-fit">Amount <br/><span id="modalAmount" className="font-normal ">{data.getAmount()}</span></p>
                                </div> 
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end items-end">
                            <button onClick={() => setConfirm(true)} className={`${data.getStatus() === "Available" || data.getStatus() === "Unclaimed" ? "" : "hidden"} bg-green-800 text-start text-slate-100 rounded-2xl p-1 px-2 m-1 hover:opacity-70 active:bg-white active:text-slate-900`}>Claim</button>
                            <button className="bg-slate-200 text-start text-green-900 rounded-2xl p-1 px-2 m-1 hover:opacity-70 active:bg-green-800 active:text-white" onClick={onClose}>Cancel</button>
                        </div>
                    </div>

                    <div id = "confirmationBlur" className={`${confirm ? "" : "invisible"} z-50 w-screen h-[120vh] fixed left-0 top-0 bg-gray-700 opacity-70 backdrop-blur-xs overflow-hidden`}></div>
                    <div id="shadow" className={`${confirm ? "" : "invisible"} z-50 fixed right-[25.5vw] left-[25.5vw] top-[35vh] bottom-[37vh] lg:top-[35vh] lg:bottom-[35vh] lg:right-[35vw] lg:left-[35vw] bg-gray-200/60 shadow-2xl opacity-60 backdrop-blur-xs border-2 border-white rounded-3xl p-1`}></div>
                    <div id="box" className={`${confirm ? "" : "invisible"} z-50 fixed right-[27vw] left-[27vw] top-[37vh] bottom-[39vh] lg:top-[38vh] lg:bottom-[38vh] lg:right-[36vw] lg:left-[36vw] flex flex-col justify-center items-center bg-white rounded-3xl shadow-xl`}>
                        <div className=" size-7 lg:size-10 bg-blue-200 flex justify-center items-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 lg:size-9 text-blue-800">
                                <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="mt-[1vh] font-bold">Confirm claim for <br/><span className="flex justify-center">{data.getName()}</span></p>
                        </div>
                        <div className="mt-[2vh] flex w-full justify-between px-[6vw] xl:px-[8vw]">
                            <button className="border-2 border-gray-500 rounded-xl p-1 hover:opacity-60 active:opacity-100" onClick={() => setConfirm(false)}>Cancel</button>
                            <button className="border-2 border-blue-900 bg-blue-800 rounded-xl p-1 px-2 hover:opacity-60 active:opacity-100" onClick={() => claimHelper()}>Claim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipientModal