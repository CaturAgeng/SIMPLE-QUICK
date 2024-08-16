export type GroupChat = {
    group: string;
    sender: string;
    message: string;
    time: string;
    type: "group";
};

export type PersonalChat = {
    sender: string;
    message: string;
    time: string;
    type: "personal";
};

export type Chat = GroupChat | PersonalChat;

export default interface MessageListProps {
    chats: GroupChat[];
    personal: PersonalChat[];
    onChatClick: (chat: Chat) => void;
}