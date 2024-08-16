'use client'

import React, { useState } from "react";
import InboxOpen from "../InboxOpen";

export default function ToggleInbox() {
    const [isModalInboxVisible, setIsModalInboxVisible] = useState(false);
    const [isInboxClicked, setIsInboxClicked] = useState(false);

    const handleClickInbox = () => {
        setIsModalInboxVisible(!isModalInboxVisible);
        setIsInboxClicked(!isInboxClicked);
    };

    const handleCloseInbox = () => {
        setIsModalInboxVisible(false);
        setIsInboxClicked(false);
    };

    return (
        <div className="flex flex-row-reverse">
                <div className="flex flex-col items-center justify-center mx-3 mt-8">
                    <div className="flex flex-col items-center justify-center" style={{ minHeight: '20px' }}>
                        {!isInboxClicked && (
                            <h2 className="mb-2">Inbox</h2>
                        )}
                    </div>
                    <svg width='68' height='68' viewBox="0 0 68 68" fill="none" xmlns='http://www.w3.org/2000/svg' onClick={handleClickInbox}>
                        {isInboxClicked ? (
                            <>
                                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z" fill="#8785FF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0371 23.9261H22.6667C21.9741 23.9261 21.4075 24.4928 21.4075 25.1854V42.815L26.4445 37.778H39.0371C39.7297 37.778 40.2964 37.2113 40.2964 36.5187V25.1854C40.2964 24.4928 39.7297 23.9261 39.0371 23.9261ZM37.7779 26.4446V35.2594H25.3993L24.6564 36.0024L23.926 36.7327V26.4446H37.7779ZM42.8149 28.9632H45.3334C46.026 28.9632 46.5927 29.5299 46.5927 30.2225V49.1114L41.5556 44.0743H27.7038C27.0112 44.0743 26.4445 43.5077 26.4445 42.8151V40.2965H42.8149V28.9632Z" fill="white"/>
                                </svg>
                            </>
                        ) : (
                            <>
                                <g filter="url(#filter0_d_2_188)">
                                    <path d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z" fill="#F2F2F2"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.4443 21.1107H23.9999C23.3888 21.1107 22.8888 21.6107 22.8888 22.2218V37.7774L27.3332 33.3329H38.4443C39.0555 33.3329 39.5555 32.8329 39.5555 32.2218V22.2218C39.5555 21.6107 39.0555 21.1107 38.4443 21.1107ZM37.3332 23.3329V31.1106H26.411L25.7555 31.7662L25.111 32.4106V23.3329H37.3332ZM41.7777 25.5552H43.9999C44.611 25.5552 45.111 26.0552 45.111 26.6663V43.333L40.6666 38.8885H28.4443C27.8332 38.8885 27.3332 38.3885 27.3332 37.7774V35.5552H41.7777V25.5552Z" fill="#8885FF"/>
                            </>
                        )}
                    </svg>
                </div>
            <InboxOpen isOpen={isModalInboxVisible} onClose={handleCloseInbox} />
        </div>
    );
}