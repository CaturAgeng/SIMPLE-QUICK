import { useState } from "react";
import MessageList from "../MessageList";
import ChatsOpen from "../MessageOpen/ChatsOpen";
import PersonalOpen from "../MessageOpen/PersonalOpen";
import { GroupChat, PersonalChat, Chat } from "../MessageList/type";

type InboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isOpen: boolean;
    onClose: () => void;
}

const chats: GroupChat[] = [
    { group: "109220-Naturalization", sender: "Cameron Phillips", message: "Please check this out!", time: "January 1, 2021 19:10", type: "group" },
    { group: "Jeanette Moraima Guaman Chamba (Hutto I-589)[Hutto Follow Up - Bief Service]", sender: "Ellen", message: "Hey, please read.", time: "02/06/2021 19:10", type: "group" },
    { group: "8405-Diana SALAZAR MUNGUIA", sender: "Cameron Phillips", message: "I understand your initial concerns.", time: "January 1, 2021 19:10", type: "group" },
];

const personal: PersonalChat[] = [
    { sender: "FastVisa Support", message: "Hey there! Welcome to your inbox.", time: "January 1, 2021 19:10", type: "personal" },
];

export default function InboxOpen(props: InboxProps) {
    const { isOpen } = props;

    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
    const [isChatOpen, setChatOpen] = useState(false);

    if (!isOpen) return null;

    const handleChatClick = (chat: Chat) => {
        setSelectedChat(chat);
        setChatOpen(true);
    };    

    const closeChat = () => {
        setChatOpen(false);
        setSelectedChat(null);
    };

    return (
        <div className="fixed inset-0 flex justify-end items-end bottom-24 right-8">
            <div className="bg-white rounded-lg shadow-lg" style={{ width: '734px', height: '737px' }}>
                {/* Search Bar */}
                <div className="flex justify-center items-center mx-8 mt-6 border-2 border-gray-500 border-opacity-45 rounded-md text-black">
                    <div className="flex flex-row justify-between gap-4 w-full mx-20 h-10 items-center">
                        <input type="text" title="search" placeholder="Search" className="placeholder-gray-700 text-md"/>
                        <svg width="15" height="15" viewBox="0 0 32 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="currentColor" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" d="M21.0804 18.9783H22.4434L31.0526 27.6047L28.4819 30.1754L19.8555 21.5662V20.2032L19.3896 19.7201C17.4228 21.4109 14.8694 22.4289 12.0916 22.4289C5.89781 22.4289 0.877197 17.4082 0.877197 11.2144C0.877197 5.02061 5.89781 0 12.0916 0C18.2854 0 23.3061 5.02061 23.3061 11.2144C23.3061 13.9922 22.2881 16.5456 20.5973 18.5124L21.0804 18.9783ZM4.32774 11.2145C4.32774 15.5104 7.79558 18.9783 12.0916 18.9783C16.3876 18.9783 19.8554 15.5104 19.8554 11.2145C19.8554 6.91846 16.3876 3.45062 12.0916 3.45062C7.79558 3.45062 4.32774 6.91846 4.32774 11.2145Z"/>
                        </svg>
                    </div>
                </div>
                {/* Message List */}
                <div className="mx-8 cursor-default">
                    <MessageList chats={chats} personal={personal} onChatClick={handleChatClick} />
                </div>
            </div>

            {/* Chat Modal */}
            {isChatOpen && selectedChat && (
                <>
                    <div className="fixed inset-0 flex justify-end items-end bottom-24 right-8">
                        <div className="bg-white rounded-lg shadow-lg" style={{ width: '734px', height: '737px' }}>
                            <div className="mx-8 mt-6">
                                {selectedChat.type === "group" ? (
                                    <ChatsOpen isOpen={isChatOpen} onClose={closeChat} /> 
                                ) : selectedChat.type === "personal" ? (
                                    <PersonalOpen isOpen={isChatOpen} onClose={closeChat} />
                                ) : null} 
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

