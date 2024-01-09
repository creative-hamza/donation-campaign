// import React from 'react';

const Banar = ({handelSearchText}) => {
    return (
        <div>
        <div  className="bg">
            <div className="text-center py-28 md:py-60 px-4">
                <h1 className="py-4 font-semibold md:font-bold text-3xl md:text-5xl">I Grow By Helping People In Need</h1>
                <div className="flex justify-center items-center mt-10">
                    <div className="flex items-center">
                        <input
                         onChange={handelSearchText} 
                         type="text" 
                         placeholder="Search here...."
                          name="search" 
                          className="bannerInput px-2 md:pr-8 lg:pr-24" 
                          />
                        <button type="button" className='inputbtn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default Banar;