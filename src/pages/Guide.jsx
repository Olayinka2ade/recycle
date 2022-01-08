import React from 'react'
import { Link } from 'react-router-dom';
import GuideCompo from '../components/GuideCompo';
import { Health, items, location,  } from '../utils/Array';

const Guide = () => {

    
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
                    <p className="text-3xl">Guide</p>
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
            <GuideCompo item={items} heading="Items" button  />
            <GuideCompo item={location} heading="Location"  button />
            <GuideCompo item={Health}   heading="Health Benefits" />
        </div>
    );
}

export default Guide
