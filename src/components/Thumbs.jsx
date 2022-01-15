import React from "react";
import thumbs from '../images/hand.png'

const Bookedmodal = ({ toggleModal }) => {
    return (
        <div
            className="bg-black  text-center flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 h-screen px-6 py-10   "
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="mx-auto">
                <img src={thumbs} alt='hnad' />

                <p className="text-2xl text-white mt-14 font-semibold">Item recycled</p>
            </div>
        </div>
    );
};

export default Bookedmodal;
