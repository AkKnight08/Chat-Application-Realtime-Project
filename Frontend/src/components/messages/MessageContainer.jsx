import React, { useEffect } from "react";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput ";
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const { selectedConversation, setSelectedCOnversation } = useConversation();
  useEffect(() => {
    return () => setSelectedCOnversation(null);
  }, [setSelectedCOnversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex justify-between items-center">
            <span className="label-text font-bold">To : </span>
            <span className="text-gray-300 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome👋 {JSON.parse(localStorage.getItem("chat-user")).fullname} ❄️
        </p>
        <p>Select a chat to start messaging 😺</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
