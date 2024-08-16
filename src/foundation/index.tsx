'use client'

import React, { useState } from "react";
import ToggleInbox from "@/components/Inbox/ToggleInbox";
import ToggleTask from "@/components/Task/ToggleTask";

export default function Foundation() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-row-reverse items-end">
            <div className="mt-8">
                <svg
                    width="68"
                    height="68"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleClick}
                >
                    <g filter="url(#filter0_d_2_260)">
                        <path
                            d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z"
                            fill="#2F80ED"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M41.4427 18.3359C42.3618 18.9486 42.6101 20.1903 41.9974 21.1094L34.737 32H45C45.7376 32 46.4153 32.4059 46.7634 33.0563C47.1114 33.7066 47.0732 34.4957 46.6641 35.1094L37.3308 49.1094C36.7181 50.0284 35.4763 50.2768 34.5573 49.6641C33.6382 49.0514 33.3899 47.8096 34.0026 46.8906L41.263 36H31C30.2624 36 29.5847 35.594 29.2367 34.9437C28.8886 34.2934 28.9268 33.5043 29.3359 32.8906L38.6692 18.8906C39.2819 17.9715 40.5237 17.7232 41.4427 18.3359Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>

            {isExpanded && (
                <div className={`flex`}>
                    <ToggleTask />
                    <ToggleInbox />
                </div>
            )}
        </div>
    );
};