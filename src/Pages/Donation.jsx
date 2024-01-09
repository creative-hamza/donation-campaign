// import React from 'react';

import { useEffect, useState } from "react";
import DonationCard from "../component/DonationCard/DonationCard";

const Donation = () => {
    const [donationData, setDonationData] = useState([])
    const [noData, setNoData] = useState(false)
    const [isShow, setIsShow] = useState(4)


    useEffect(() => {
        // get boruser data 
        const getItem = JSON.parse(localStorage.getItem('donation'))
        if (getItem) {

            setDonationData(getItem);
        } else {
            setNoData('no data found');
        }
    },
        [])

    return (
        <div className="max-w-7xl mx-auto my-10">

            {
                noData ? <p className="h-[80vh] flex justify-center items-center text-2xl">No data found</p> :

                    <div>
                        <div className="flex justify-center items-center">
                            <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-12  px-4 md:px-4 lg:px-4 ">
                                {
                                    !isShow ?
                                        donationData.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                        :
                                        donationData.slice(0, isShow).map(card => <DonationCard key={card.id} card={card}></DonationCard>)

                                }
                            </div>

                        </div>
                        <div className="text-center">
                            <div className={donationData.length >= 4 ? "block" : "hidden"}>
                                <div className={isShow === donationData.length && "hidden"}>
                                    <button onClick={() => setIsShow(donationData.length)} className="bg-[#009444] py-2 px-4 text-white  rounded-md font-semibold my-4"> See All </button>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default Donation;