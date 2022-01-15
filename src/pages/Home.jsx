import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Bradon from "../images/bradon.png";
import binimg from "../images/bin.png";
import trophy from "../images/trophy.png";
import check from "../images/check.png";
import cross from "../images/cross.png";

const Home = ({ bin}) => {
    const trophies = [
        {
            id: 1,
            image: trophy,
            text: "Top solo",
            
        },
        {
            id: 2,
            image: trophy,
            text: "Secret item",
        },
        {
            id: 3,
            image: trophy,
            text: "Weekly streak",
        },
    ];
    return (
        <div className="">
            <div className="flex justify-between mb-10">
                <p className="text-3xl">Home</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                </svg>
            </div>
            {/* profile */}
            <div className="flex justify-between  text-center ">
                <img src={Bradon} alt="profile" className=" sm:w-1/2 xl:w-40" />
                {bin && (
                    <img
                        src={binimg}
                        alt="profile"
                        className=" h-20 absolute mt-24"
                    />
                 )} 

                <div>
                    <p className="text-lg font-semibold mb-2">Brad Jordon</p>
                    <p className="text-sm font-normal mb-2">
                        Team : Flying Pigs
                    </p>
                    <p className=" text-sm font-normal mb-2">40 Credits</p>
                    <div className="mb-2">
                        <PrimaryButton text="Edit Avatar" green edit />
                    </div>
                    <PrimaryButton text="My QR Code" />
                </div>
            </div>
            {/* achivements */}
            <div className="px-2 py-4 mt-10  bg-secondary rounded-xl">
                <div className="flex justify-between ">
                    <p className="self-center text-lg font-semibold">
                        Achievements{" "}
                    </p>
                    <PrimaryButton green text="See all" />
                </div>
                <div className="flex justify-between gap-2 mt-10">
                    {trophies.map((item) => (
                        <div
                            key={item.id}
                            className=" border-2 border-black py-2 px-1  w-40   rounded-xl"
                        >
                            <img
                                src={item.image}
                                alt="trophy"
                                className="mx-auto"
                            />
                            <hr className="bg-black my-2" />
                            <p className="text-sm text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* progress */}
            <div className="px-2 py-4 mt-10  bg-secondary rounded-xl">
                <div className="flex justify-between ">
                    <p className="self-center text-lg font-semibold">
                        Progress{" "}
                    </p>
                    <PrimaryButton green text="See all" />
                </div>
                <table className="w-full mt-10">
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src={check}
                                    className="w-6 mx-auto"
                                    alt="mark"
                                />
                            </td>
                            <td>
                                <img
                                    src={check}
                                    className="w-6 mx-auto"
                                    alt="mark"
                                />
                            </td>
                            <td>
                                <img
                                    src={cross}
                                    className="w-8 mx-auto"
                                    alt="cross"
                                />
                            </td>
                            <td>
                                <img
                                    src={check}
                                    className="w-6 mx-auto"
                                    alt="mark"
                                />
                            </td>
                            <td>
                                <img
                                    src={check}
                                    className="w-6 mx-auto"
                                    alt="mark"
                                />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
