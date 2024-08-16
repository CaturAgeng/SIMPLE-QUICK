'use client'

import React, { useState } from "react";
import TaskOpen from "../TaskOpen";

export default function ToggleTask() {
    const [isTaskOpen, setIsTaskOpen] = useState(false);
    const [isTaskClicked, setIsTaskClicked] = useState(false);

    const handleClickTask = () => {
        setIsTaskOpen(!isTaskOpen);
        setIsTaskClicked(!isTaskClicked);
    };

    const handleCloseTask = () => {
        setIsTaskOpen(false);
        setIsTaskClicked(false);
    };

    return (
        <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center justify-center mx-3 mt-8">
                <div className="flex flex-col items-center justify-center" style={{ minHeight: '20px' }}>
                    {!isTaskClicked && (
                        <h2 className="mb-2">Task</h2>
                    )}
                </div>
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClickTask}>
                    {isTaskClicked ? (
                        <>
                            <svg width="68" height="68" viewBox="0 0 72 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2_266)">
                                    <path d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z" fill="#F8B76B"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1111 24.6663H48.1111C49.3334 24.6663 50.3334 25.6663 50.3334 26.8885V41.3329C50.3334 42.5551 49.3334 43.5551 48.1111 43.5551H28.1111C26.8889 43.5551 25.8889 42.5551 25.8889 41.3329V26.8885C25.8889 25.6663 26.8889 24.6663 28.1111 24.6663ZM28.1111 26.8885V41.3329H37V26.8885H28.1111ZM48.1111 41.3329H39.2222V26.8885H48.1111V41.3329ZM47 30.7774H40.3334V32.444H47V30.7774ZM40.3334 33.5551H47V35.2218H40.3334V33.5551ZM47 36.3329H40.3334V37.9996H47V36.3329Z" fill="white"/>
                            </svg>

                        </>
                    ) : (
                        <>
                            <g filter="url(#filter0_d_2_175)">
                                <path d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z" fill="#F2F2F2"/>
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1111 21.6667H45.1111C46.3334 21.6667 47.3334 22.6667 47.3334 23.889V38.3334C47.3334 39.5556 46.3334 40.5556 45.1111 40.5556H25.1111C23.8889 40.5556 22.8889 39.5556 22.8889 38.3334V23.889C22.8889 22.6667 23.8889 21.6667 25.1111 21.6667ZM25.1111 23.889V38.3334H34V23.889H25.1111ZM45.1111 38.3334H36.2222V23.889H45.1111V38.3334ZM44 27.7779H37.3334V29.4445H44V27.7779ZM37.3334 30.5556H44V32.2223H37.3334V30.5556ZM44 33.3334H37.3334V35.0001H44V33.3334Z" fill="#F8B76B"/>
                        </>
                    )}
                </svg>
            </div>
            <TaskOpen isOpen={isTaskOpen} onClose={handleCloseTask} />
        </div>
    );
}