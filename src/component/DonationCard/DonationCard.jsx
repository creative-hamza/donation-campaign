// import React from 'react';

const DonationCard = ({ card }) => {
    const { image, title, category, cardBgColor, categoryBgColor, primaryColor, price
    } = card;
    const cardbg = {
        backgroundColor: cardBgColor,
    };
    const priceColor = {
        color: primaryColor,
    };
    const categoryBg = {
        backgroundColor: categoryBgColor,
        color: primaryColor,
    }
    const btncolor = {
        backgroundColor: primaryColor,
    }
    return (
        <div>
            <a href="#" style={cardbg} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
                <img className="object-cover w-full md:w-60 md:h-60 rounded-t-lg md:rounded-t-none  md:rounded-l-lg lg:rounded-l-lg  " src={image} alt="" />
                <div className="flex flex-col justify-between leading-normal px-4">
                    <h1 style={categoryBg} className="py-1 my-2 text-center rounded-md px-4 w-[100px]">{category}</h1>
                    <h2 className="font-medium text-2xl my-2">{title}</h2>
                    <h4 style={priceColor} className="font-semibold text-base py-2">{price}</h4>
                    <button style={btncolor} className="mb-4  py-2 px-4 rounded-md text-white">View details</button>

                </div>
            </a>


        </div>
    );
};


export default DonationCard;