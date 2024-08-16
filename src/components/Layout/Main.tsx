import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


interface MainProps {
    children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <div className="flex h-screen bg-[#4F4F4F] text-white">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Topbar />
                <main className="absolute bottom-3 right-6">
                    {children}
                </main>
            </div>
        </div>
    );
};