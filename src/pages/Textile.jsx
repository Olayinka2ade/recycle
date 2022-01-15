import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import map from '../images/map1.png'
import pin from '../images/pin.png'



const textArray = [
    'Textile',
    "Paper/Card",
    "Glass",
    "Plastic",
    "Eletronics",
    "Cans",
    "Food",
    "Mixed"
]

const Textile = () => {
    const [active, setActive] = useState(0)
    return (
        <div>
            <div className="flex justify-between mb-10">
                <div className="flex gap-3 justify-center items-center">
                    <Link to="/">
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
                                d="M11 17l-5-5m0 0l5-5m-5 5h12"
                            />
                        </svg>
                    </Link>
                    <p className="text-3xl">Location</p>
                </div>
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
            <div className="flex gap-4 justify-center items-center  flex-wrap">
                {textArray.map((item, index) => (
                    <div
                        key={index}
                        className={
                            active === index
                                ? " border-2 border-black rounded-lg px-2 py-2"
                                : " border-2  text-gray-400 rounded-lg px-2 py-2 "
                        }
                        onClick={() => setActive(index)}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="">
                <Link to='/textile-info'>
                    <img
                        src={pin}
                        alt="pin"
                        className="relative top-80 left-28"
                    />
                </Link>{" "}
                <img src={pin} alt="pin" className=" relative top-40 left-40" />
                <img
                    src={pin}
                    alt="pin"
                    className="relative top-test left-44"
                />
                <img src={map} alt="map" />
            </div>
        </div>
    );
}

export default Textile
