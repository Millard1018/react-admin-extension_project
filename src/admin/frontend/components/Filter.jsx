import {useState} from 'react';

function Filter({tableType, onSearch, search, onDate, date, onSelectBenefit, benefit, onSelectStatus, status}) {

    const [filter, setFilter] = useState(false);
    const [benefitFilter, setBenefitFilter] = useState(false);
    const [statusFilter, setStatusFilter] = useState(false);

    function dateHelper(tableType) {
        if(tableType === "Previous") {
            return (
            <div className="flex md:justify-end mt-2 md:mt-0 xl:ml-[2.5vw]">
                <p className="md:text-[1em] text-[1.1em] font-hanken my-auto mr-[1vw]">Month and Year: </p>
                <form>
                    <input type="month" value={date} onChange={e => onDate(e.target.value)} name="date" className="mt-1 block xl:w-[13vw] w-full border p-2 rounded-md"/>
                </form>
            </div>
            )
        } else return null
    }

    function statusHelper(tableType) {
        if(tableType === "Latest") {
            return ( <div>
                        <div className="flex items-center" onClick={() => setStatusFilter(prev => !prev)} ><span>{status ? status : "Filter Status"}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`${statusFilter ? "" : "rotate-180"} size-4 ml-auto`}>
                            <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="border p-0"></div>
                        <div className={`${statusFilter ? "" : "hidden"}  flex-col font-normal`}>
                            <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("All Statuses")} >All Statuses</div>
                            <div className="border p-0"></div>
                            <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("Available")} >Available</div>
                            <div className="border p-0"></div>
                            <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("Claimed")} >Claimed</div>
                            <div className="border p-0"></div>
                            <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("Delayed")} >Delayed</div>
                            <div className="border p-0"></div>
                        </div>
                    </div>)
        }
        if(tableType === "Previous") {
            return (   
                    <div>
                        <div className="flex items-center" onClick={() => setStatusFilter(prev => !prev)} ><span >{status ? status : "Filter Status"}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 ml-auto">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="border p-0"></div>
                            <div className={`${statusFilter ? "" : "hidden"}  flex-col font-normal`}>
                                <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("All Statuses")} >All Statuses</div>
                                <div className="border p-0"></div>
                                <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("Claimed")} >Claimed</div>
                                <div className="border p-0"></div>
                                <div className="status hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectStatus("Unclaimed")} >Unclaimed</div>
                                <div className="border p-0"></div>
                            </div>
                    </div>)
                            
        }
        if(tableType === "Incoming") {
            return ""
        }
    }

    return (
        <div>
            <div className= "flex lg:flex-nowrap flex-wrap w-[85vw] relative mb-5 items-center left-[6vw] lg:mt-[5vh]">
                <div className="flex-1">
                    <form>
                        <fieldset>
                            <input value={search} onChange={(e) => onSearch(e.target.value)}  type="text" placeholder="Search Name" className="pl-6 rounded-3xl xl:w-[40vw] md:w-[40vw] w-[60vw] h-8 focus:outline-slate-900 bg-white inset-ring-1 inset-ring-slate-200"/>
                        </fieldset>
                    </form>
                </div> 

                <div className="flex flex-col md:flex-row lg:space-x-[1vw] space-x-[3vw] xl:mt-0 xl:ml-[12vw] lg:ml-[8vw] ml-[1vw] mt-[2vh] md:items-center">

                    {dateHelper(tableType)}

                    <div className="flex space-x-[2vw] md:ml-0 ml-[2vw] md:mt-0">
                        <div className=" font-bold lg:text-[0.9em] xl:text-[1em]" id="LatestFilter">
                            <div className="flex font-bold relative z-40">
                                <div className="hover:opacity-60 active:opacity-100 flex" onClick={() => setFilter(prev => !prev)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
                                    </svg>Filter
                                </div>
                                <div className={`${filter ? "" : "hidden"}  absolute top-[3.5vh] lg:-left-[2vw] md:-left-[5vw] xl:w-[12vw] lg:w-[14vw] sm:w-[20vw] flex flex-col bg-white rounded-2xl p-2`}>
                                    <div className="flex items-center" onClick={() => setBenefitFilter(prev => !prev)} ><span>{benefit ? benefit : "Filter Benefit"}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`${benefitFilter ? "" : "rotate-180"} size-4 ml-auto`} >
                                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="border p-0"></div>
                                    <div className={`${benefitFilter ? "" : "hidden"} flex-col font-normal`}>
                                        <div className="benefit hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectBenefit("All Benefits")} >All Benefits</div>
                                        <div className="border p-0"></div>
                                        <div className="benefit hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectBenefit("Allowance Benefit")}>Allowance Benefit</div>
                                        <div className="border p-0"></div>
                                        <div className="benefit hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectBenefit("Birthday Benefit")}>Birthday Benefit</div>
                                        <div className="border p-0"></div>
                                        <div className="benefit hover:bg-slate-900 hover:text-white active:bg-blue-950" onClick={() => onSelectBenefit("Christmas Benefit")}>Christmas Benefit</div>
                                        <div className="border p-0"></div>
                                    </div>
                                    {statusHelper(tableType)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Filter