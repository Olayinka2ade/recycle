import React from 'react'
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const GuideCompo = ({item, heading, button}) => {
    return (
        <div>
            <div className="flex justify-between my-6 ">
                <p className="self-center text-lg font-semibold">{heading} </p>
                {button && <PrimaryButton green text="See all" />}
            </div>
            <div className="bg-secondary px-4 py-6">
                <div className="flex gap-4 overflow-x-scroll">
                    {item.map((it) => (
                        <Link to={it.route} key={it.id}>
                            <div
                                className="  px-4 py-2 min-w-fit border-2 bg-guideBack border-black rounded-xl "
                                style={{ width: "100px", height: "100px" }}
                            >
                                <img
                                    src={it.image}
                                    alt="item-pic"
                                    className="self-center w-12 h-12 mx-auto object-fill"
                                />

                                <p className="text-center text-xs mt-5">
                                    {it.text}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GuideCompo
