// import React from 'react';

import DonationList from "../DonationList/DonationList";

const DonationLists = ({donations}) => {

    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 px-4 md:px-4 lg:px-2">
           {
                // donations.map(donation => <DonationList key={donation.id} donation={donation}/>)
                // eslint-disable-next-line react/prop-types
                donations.map(donation => <DonationList key={donation.id} donation={donation} />)
            }
           </div>
        </div>
    );
};

export default DonationLists;