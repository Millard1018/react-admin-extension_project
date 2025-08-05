import { useState, useEffect } from "react";

function Summary({wholeData}) {
    const [statusCount, setStatusCount] = useState({
        "Available" : 0, "Unavailable" : 0, "Unclaimed" : 0, "Delayed" : 0
    });

    useEffect(() => {
        const counts = {
            "Available": 0,
            "Unavailable": 0,
            "Unclaimed": 0,
            "Delayed": 0
        };

        Object.entries(wholeData).forEach(([key, array]) => {
            array.forEach(user => {
                const status = user.getStatus();
                if (counts.hasOwnProperty(status)) {
                    counts[status]++;
                }
            });
        });

        setStatusCount(counts);
    }, [wholeData]);

    function highlight(status) {
        const rows = document.querySelectorAll(status);
        rows.forEach(row => row.classList.add("bg-slate-200"));
        setTimeout(() => {
            rows.forEach(row => row.classList.remove("bg-slate-200"));
        },10000);   
    }

    return (
        <section id="summarySection"  className="sectionContainer md:top-15 top-5 w-screen relative">
           <div className="flex flex-col items-center justify-center mb-10">
                <h2 className=" relative font-poppins top-2 md:top-2 text-[1.05em] md:text-[1.30em] lg:text-3xl ">Status</h2>
                <h2 className=" font-hanken text-[1.7em] sm:text-[2em] md:text-[2.3em] lg:text-4xl  ">SUMMARY</h2>
                <div className=" md:w-15 bg-slate-900 w-12 h-1 sm:w-13 top-2 lg:top-3 relative mb-15"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mb-20 ">
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[0.5vw] gap-[1vh]">
                        <a href="#latestSection" onClick={() => highlight(".available")}>
                            <div className="group h-[15vh] md:w-[45vw] w-[75vw] bg-white shadow-xl rounded-2xl hover:scale-101 hover:bg-green-500 relative overflow-hidden">
                                <div className="font-hanken group-hover:text-white flex items-center justify-center w-full h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" text-green-500 group-hover:text-white size-10 mr-[0.2vw]">
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex flex-col justify-start">
                                        <p className="text-xl">AVAILABLE</p>
                                        <p className="text-3xl xl:-mt-[2vh] -mt-[1.2vh]">benefits</p>
                                    </div>
                                    <div className="flex mb-[1vh]">
                                        <p className="text-3xl mx-[3vw]">|</p> 
                                        <p id="Available" className="text-3xl">{statusCount.Available}</p> 
                                    </div>
                                    <div className="absolute lg:-right-[5vw] -right-[12vw] rotate-330 ">
                                        <img src="/assets/status-overlay.png" alt="decorative" className="lg:w-[15vw] w-[30vw] grayscale-100 opacity-30"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                                        
                        <a href="#incomingSection" onClick={() => highlight(".unavailable")}>
                            <div className="group h-[15vh] md:w-[45vw] w-[75vw] bg-white shadow-xl rounded-2xl hover:scale-101 hover:bg-red-800 relative overflow-hidden">
                                <div className="font-hanken group-hover:text-white flex items-center justify-center w-full h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-red-800 group-hover:text-white size-10">
                                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                    </svg>
                                    <div className="flex flex-col justify-start">
                                        <p className="text-xl">UNAVAILABLE</p>
                                        <p className="text-3xl xl:-mt-[2vh] -mt-[1.2vh]">benefits</p>
                                    </div>
                                    <div className="flex mb-[1vh]">
                                        <p className="text-3xl mx-[3vw]">|</p> 
                                        <p id="Unavailable" className="text-3xl">{statusCount.Unavailable}</p> 
                                    </div>
                                    <div className="absolute lg:-right-[5vw] -right-[12vw] rotate-330 ">
                                        <img src="/assets/status-overlay.png" alt="decorative" className="lg:w-[15vw] w-[30vw] grayscale-100 opacity-30"/>
                                    </div>
                                </div>
                            </div>  
                        </a>
                                        
                        <a href="#latestSection" onClick={() => highlight(".delayed")}>
                            <div className="group h-[15vh] md:w-[45vw] w-[75vw] hover:bg-amber-500 bg-white shadow-xl rounded-2xl hover:scale-101 relative overflow-hidden">
                                <div className="font-hanken hover:text-white flex items-center justify-center w-full h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-amber-500 group-hover:text-white size-8 mr-[0.2vw]">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex flex-col justify-start">
                                        <p className="text-xl">DELAYED</p>
                                        <p className="text-3xl xl:-mt-[2vh] -mt-[1.2vh]">benefits</p>
                                    </div>
                                    <div className="flex mb-[1vh]">
                                        <p className="text-3xl mx-[3vw]">|</p> 
                                        <p id="Delayed" className="text-3xl">{statusCount.Delayed}</p> 
                                    </div>
                                    <div className="absolute lg:-right-[5vw] -right-[12vw] rotate-330 ">
                                        <img src="/assets/status-overlay.png" alt="decorative" className="lg:w-[15vw] w-[30vw] grayscale-100 opacity-30"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                                        
                        <a href="#previousSection" onClick={() => highlight(".unclaimed")}>
                            <div className="h-[15vh] md:w-[45vw] w-[75vw] bg-white hover:bg-slate-900 shadow-xl rounded-2xl hover:scale-101 relative overflow-hidden">
                                <div className="font-hanken hover:text-white flex items-center justify-center w-full h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-8 mr-[0.2vw]">
                                        <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex flex-col justify-start">
                                        <p className="text-xl">UNCLAIMED</p>                                            
                                        <p className="text-3xl xl:-mt-[2vh] -mt-[1.2vh]">benefits</p>
                                    </div>
                                    <div className="flex mb-[1vh]">
                                        <p className="text-3xl mx-[3vw]">|</p> 
                                        <p id="Unclaimed" className="text-3xl">{statusCount.Unclaimed}</p> 
                                    </div>
                                    <div className="absolute lg:-right-[5vw] -right-[12vw] rotate-330 ">
                                        <img src="/assets/status-overlay.png" alt="decorative" className="lg:w-[15vw] w-[30vw] grayscale-100 opacity-30"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                                        
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Summary