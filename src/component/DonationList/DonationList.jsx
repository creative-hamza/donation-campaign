// import React from 'react';

import { Link } from "react-router-dom";

const DonationList = ({ donation }) => {
    const { id, image, title, category, cardBgColor, categoryBgColor, primaryColor, price } = donation;
    const cardbg = {
        backgroundColor: cardBgColor,
    };
    const categoryBg = {
        backgroundColor: categoryBgColor,
        color: primaryColor,
    }
    const titleColor = {
        color: primaryColor,
    }
    return (
        <div>
            <Link to={`/donationDetail/${id}`} style={cardbg} className="card card-compact   shadow-sm " >
                <figure><img className=" w-full" src={image} /></figure>
                <div className="card-body">
                    <span style={categoryBg} className="py-1 text-center px-4 w-[100px] rounded-md font-medium text-sm">{category}</span>
                    <p style={titleColor} className="font-semibold text-lg" >{title}</p>
                </div>
            </Link>
        </div>
    );
};

export default DonationList;