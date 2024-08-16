import React, { useRef, useState, useEffect } from "react";

interface MessageProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PersonalOpen({ isOpen, onClose }: MessageProps) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { sender: "FastVisa Support", message: "Hey there. Welcome to your inbox!", time: "19:32", date: "June 09, 2021", type: "received" },
        { sender: "You", message: "Hi, I need help with something can you help me?", time: "19:32", date: "June 09, 2021", type: "sent" },
    ]);
    const [newMessageAdded, setNewMessageAdded] = useState(false);
    const [lastMessageIndex, setLastMessageIndex] = useState<number | null>(null);
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const newMessageRef = useRef<HTMLDivElement | null>(null);

    const addNewMessage = (newMsg: { sender: string; message: string; time: string; date: string; type: string; }) => {
        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages, newMsg];
            setLastMessageIndex(updatedMessages.length - 1); // Menyimpan index pesan terakhir
            setNewMessageAdded(true);
            return updatedMessages;
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (newMessageRef.current && chatContainerRef.current) {
                const chatContainer = chatContainerRef.current;
                const isNewMessageVisible = newMessageRef.current.getBoundingClientRect().top <= chatContainer.getBoundingClientRect().bottom;
                if (isNewMessageVisible) {
                    setNewMessageAdded(false);
                }
            }
        };

        const chatContainer = chatContainerRef.current;
        chatContainer?.addEventListener('scroll', handleScroll);

        return () => {
            chatContainer?.removeEventListener('scroll', handleScroll);
        };
    }, [messages]);

    const senderColors: { [key: string]: { textColor: string, bgColor: string } } = {
        "FastVisa Support": { textColor: "#2F80ED", bgColor: "#F8F8F8" },
        "You": { textColor: "#9B51E0", bgColor: "#EEDCFF" },
    };

    const handleSend = () => {
        if (message.trim() !== "") {
            const newMessage = {
                sender: "You",
                message: message,
                time: "19:32", // Anda bisa mengganti ini dengan waktu saat ini
                date: "June 09, 2021", // Anda bisa mengganti ini dengan tanggal saat ini
                type: "sent"
            };
            addNewMessage(newMessage);
            setMessage("");
        }
    };

    // Jika isOpen bernilai false, modal tidak akan ditampilkan
    if (!isOpen) return null;

    return (
        <>
            {/* Header */}
            <div className="flex flex-row justify-center items-center border-b">
                <button onClick={onClose} title="back" className="text-gray-500 hover:text-gray-800">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#333333"/>
                    </svg>
                </button>
                <div className="ml-4 mr-auto">
                    <h2 className="text-[#2F80ED] text-lg font-lato-bold">FastVisa Support</h2>
                </div>
                <button onClick={onClose} title="close" className="text-gray-500 hover:text-gray-800">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#333333"/>
                    </svg>
                </button>
            </div>

            {/* Chat History */}
            <div className="p-4 h-[554px] w-[668px] overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index}>
                        {/* Keterangan Pesan Baru */}
                        {newMessageAdded && index === lastMessageIndex && (
                            <>
                                {/* Keterangan "New Message" jika ada pesan baru */}
                                <div className="flex justify-center items-center my-2" ref={newMessageRef}>
                                    <hr className="w-full border-[#EB5757]" />
                                    <span className="px-4 text-[#EB5757] text-sm font-semibold">New Message</span>
                                    <hr className="w-full border-[#EB5757]" />
                                </div>
                            </>
                        )}
                        {/* Keterangan Hari */}
                        {index === 0 || messages[index - 1].date !== msg.date ? (
                            <div className="flex justify-center items-center my-2">
                                <hr className="w-full border-gray-300" />
                                <span className="px-4 text-gray-600 text-sm">{`Today ${msg.date}`}</span>
                                <hr className="w-full border-gray-300" />
                            </div>
                        ) : null}

                        {/* Pesan */}
                        <div className={`mb-4 ${msg.type === "sent" ? "text-right" : "text-left"}`}>
                            <div className="text-xs mt-1" style={{ color: senderColors[msg.sender]?.textColor || "#000" }}>
                                {msg.sender}
                            </div>
                            <div className={`flex items-start ${msg.type === "sent" ? "justify-end" : ""}`}>
                                <svg
                                    className={` ${msg.type === "sent" ? "order-2 ml-2" : "order-1 mr-2"}`}
                                    width="31"
                                    height="31"
                                    viewBox="0 0 31 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.07016 12.5731C6.68712 12.5731 5.55554 13.7046 5.55554 15.0877C5.55554 16.4707 6.68712 17.6023 8.07016 17.6023C9.4532 17.6023 10.5848 16.4707 10.5848 15.0877C10.5848 13.7046 9.4532 12.5731 8.07016 12.5731ZM23.1579 12.5731C21.7748 12.5731 20.6433 13.7046 20.6433 15.0877C20.6433 16.4707 21.7748 17.6023 23.1579 17.6023C24.5409 17.6023 25.6725 16.4707 25.6725 15.0877C25.6725 13.7046 24.5409 12.5731 23.1579 12.5731ZM13.0994 15.0877C13.0994 13.7046 14.231 12.5731 15.614 12.5731C16.9971 12.5731 18.1286 13.7046 18.1286 15.0877C18.1286 16.4707 16.9971 17.6023 15.614 17.6023C14.231 17.6023 13.0994 16.4707 13.0994 15.0877Z"
                                        fill="black"
                                    />
                                </svg>
                                <p className="text-gray-600 text-left inline-block max-w-[432px] w-auto break-words p-2 rounded-lg" style={{ backgroundColor: senderColors[msg.sender]?.bgColor || (msg.type === "sent" ? "#EEDCFF" : "#FCEED3") }}>
                                    <span>{msg.message}</span>
                                    <span className="block text-xs text-gray-600 mt-1">{msg.time}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center border-t p-4">
                <input
                    type="text"
                    className="flex-grow text-black p-2 border border-black rounded-md mr-4 placeholder-black"
                    placeholder="Type a new message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Send
                </button>
            </div>
        </>
    )
}