// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banar from "../component/banar/Banar";
import DonationLists from "../component/DonationLists/DonationLists";
import { useState } from "react";

const Home = () => {
    const donations = useLoaderData();
    const [displayCards, setDisplayCards] = useState([...donations]);
    // console.log(donations);
    const handelSearchText = (e) => {
        let input = e.target.value.toLowerCase();
        const getSearchData = donations?.filter((card) =>
          card.category.toLowerCase().startsWith(input)
        );
        setDisplayCards(getSearchData);
      };
    return (
        <div>
            <Banar handelSearchText={handelSearchText}/>
            <DonationLists donations={displayCards} />
        </div>
    );
};

export default Home;