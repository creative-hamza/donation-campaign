// import React from 'react';
import swal from "sweetalert";

const DonationSpecific = ({detail}) => {
    const { id, image, title, dsc, price } = detail;
    const handelAddToDonation = () => {
        // console.log(detail);
        const addedDonationArr = [];

        const getItem = JSON.parse(localStorage.getItem('donation'))
        if (!getItem) {
            addedDonationArr.push(detail)
            localStorage.setItem('donation', JSON.stringify(addedDonationArr))
            swal("Good job!", "Successfully added !", "success");
        }
        else {
            const isExit = getItem.find(detail => detail.id ==id)
            if (!isExit) {
                addedDonationArr.push(...getItem, detail)
                localStorage.setItem('donation', JSON.stringify(addedDonationArr))
                swal("Good job!", "Successfully added !", "success");
            }
            else {
                swal("Error!", "Already added !", "error");
            }

        }
    }


    return (
        <div className="m-10">
            <div className=" container ">
                <img className="  image " src={image} alt="" />
                <div className="overlay">
                    <button
                         onClick={handelAddToDonation}
                        className="bg-[#FF444A] z-10 text-white font-semibold text-xl py-2 px-4 rounded-md">Donate ${price}</button>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-4xl my-14">{title}</h1>
                <p className="font-normal text-base text-[#0b0b0b] text-justify">{dsc}</p>

            </div>
        </div>
    );
};

export default DonationSpecific;