import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import AddItemCompo from '../components/AddItemCompo';
import { emptyArray, paper, plastic, glass, metal, textile, wood, electronics, food } from '../utils/Array';
import PrimaryButton from '../components/PrimaryButton';
import pot from "../images/pot.png";
import itemi from "../images/item.png";

import bottle from "../images/bottle.png";
import paperImg from "../images/paper.png";

const AddItem = () => {
    const [show, setShow] = useState(false)

    const toggle = () =>{
        setShow(true)
    }
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
                    <p className="text-3xl">Add Item</p>
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
            <div className="border-2 border-black flex justify-between ">
                <div className="bg-buttonGreen justify-center items-center flex py-3 px-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                    </svg>
                </div>
                <input
                    placeholder="(Search for item)"
                    className="outline-none"
                />
                <div className="bg-buttonGreen justify-center items-center flex py-3 px-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="bg-secondary px-2 py-4 mt-4 rounded-lg">
                <div className="text-center mb-2">
                    <p className="text-lg">Favorites</p>
                    <p className="text-sm mt-1">(0 out of 4)</p>
                </div>
                {emptyArray.map((item, index) => (
                    <div
                        key={index}
                        className="bg-backGreen rounded-2xl  w-full h-16 my-2 px-2 flex justify-between items-center"
                    >
                        {show && <> <div className="flex justify-between items-center gap-2">
                            <img
                                src={
                                    item === "330ml Aluminium Pot"
                                        ? bottle
                                        : item === "100g Yoghurt Pot"
                                        ? pot : item === "A4 Paper" ? paperImg
                                        : itemi
                                }
                                alt="item-img"
                            />

                            <p className="font-semibold text-xs">{item}</p>
                        </div>
                        <PrimaryButton green text="Add" add /></>}
                    </div>
                ))}
            </div>
            <div className="bg-secondary px-2 py-4 mt-4 rounded-lg">
                <p className="font-semibold text-lg mb-6 text-center">Items</p>
                <AddItemCompo item={paper} title="Paper/cardboard" />
                <AddItemCompo item={plastic} title="Plastic" show={show} toggle={toggle} tes/>
                <AddItemCompo item={glass} title="Glass" />
                <AddItemCompo item={metal} title="Metal" />
                <AddItemCompo item={textile} title="Textile" />
                <AddItemCompo item={wood} title="Wood" />
                <AddItemCompo item={electronics} title="Electronics" />
                <AddItemCompo item={food} title="Food" />
            </div>
        </div>
    );
}

export default AddItem
