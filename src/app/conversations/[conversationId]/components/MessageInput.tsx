"use client";

import useConversation from "@/hooks/useConversation";

import axios from "axios";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  register,
  required,
  type
}) => {
  const { conversationId } = useConversation();

  const handleKeyUp = () => {
    axios.post(`/api/conversations/${conversationId}/typing`);
  };

  return (
    <div
      className="
        relative
        w-full
      "
    >
      <input
        onFocus={handleKeyUp}
        // onKeyUp={handleKeyUp}
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2 px-4
          bg-neutral-100
          w-full
          rounded-full
          focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
