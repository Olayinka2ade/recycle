import React, { useState } from "react";
import {Link} from "react-router-dom"

const BottomNavigation = () => {
    const [active, setActive] = useState(1)
    const items = [
        {
            id: 1,
            text: "Home",
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            route: "",
        },
        {
            id: 2,
            text: "Social",
            route: "",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        },
        {
            id: 3,
            text: "History",
            route: "",
            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
            id: 4,
            text: "Guide",
            route: "/guide",
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        },
    ];
    return (
        <div className="flex justify-between">
            {items.map((item) => (
                <div key={item.id} className="">
                    <Link to={item.route}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                                active === item.id
                                    ? "h-10 w-10 bg-iconPurple  p-1 rounded-lg"
                                    : "h-10 w-10   p-1 rounded-lg"
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={active === item.id ? "#fff" : "#000"}
                            onClick={() => setActive(item.id)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={item.icon}
                            />
                        </svg>
                    </Link>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default BottomNavigation;
