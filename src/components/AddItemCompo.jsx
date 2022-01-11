import React from 'react'
import PrimaryButton from './PrimaryButton';
import pot from "../images/pot.png"
import itemi from "../images/item.png"
import news from "../images/news.png"


const AddItemCompo = ({ item, title }) => {
    
    const test = () =>{
        alert("yes")
    }
    return (
        <div>
            <div className="bg-secondary px-2 py-4 mt-4 rounded-lg">
                <p className="text-lg ">{title}</p>
                {item.map((item, index) => (
                    <div
                        key={index}
                        className="bg-backGreen rounded-2xl  w-full h-16 my-2 px-2 flex justify-between items-center"
                    >
                        <div className="flex justify-between items-center gap-2">
                            <img
                                onClick={ title === "Plastic" ? test : null }
                                src={
                                    title === "Plastic"
                                        ? pot
                                        : title === "Paper/cardboard"
                                        ? news
                                        : itemi
                                }
                                alt="item-img"
                            />

                            <p className="font-semibold text-xs">{item}</p>
                        </div>
                        <PrimaryButton green text="Add" add />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddItemCompo
