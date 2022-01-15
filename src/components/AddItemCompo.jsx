import React from 'react'
import PrimaryButton from './PrimaryButton';
import pot from "../images/potred.png"
import red from "../images/red.png"
import itemi from "../images/item.png"
import news from "../images/newsred.png"
import { Link } from 'react-router-dom';


const AddItemCompo = ({ item, title,  tes, toggle, toggleThumbs, thumbs, show }) => {
    return (
        <div>
            <div className="bg-secondary px-2 py-4 mt-4 rounded-lg">
                <p className="text-lg ">{title}</p>
                {item.map((item, index) => (
                    <div
                        key={index}
                        className="bg-backGreen rounded-2xl  w-full h-16 my-2 px-2 flex justify-between items-center"
                        onClick={tes ? toggle : null}
                    >
                        <div className="flex justify-between items-center gap-2">
                            <img
                                src={
                                    item === "Newspaper"
                                        ? news
                                        : item === "100g Yoghurt Pot"
                                        ? pot
                                        : item === "Item "
                                        ? red
                                        : itemi
                                }
                                alt="item-img"
                            />

                            <p className="font-semibold text-xs">{item}</p>
                        </div>
                        <Link to={item === "100g Yoghurt Pot" ? "/" : ""}>
                            <div
                                onClick={item === "100g Yoghurt Pot" ? toggleThumbs : ""}
                            >
                                <PrimaryButton green text="Add" add />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddItemCompo
