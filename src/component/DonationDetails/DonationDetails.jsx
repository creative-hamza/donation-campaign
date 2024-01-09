// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import DonationSpecific from "../DonationSpecific/DonationSpecific";

const DonationDetails = () => {
    const details = useLoaderData();
    const {id}=useParams();
     const detail = details.find(detail => detail.id == id);

    // console.log(detail)
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <DonationSpecific detail={detail} />
                
            </div>
        </div>
    );
};

export default DonationDetails;