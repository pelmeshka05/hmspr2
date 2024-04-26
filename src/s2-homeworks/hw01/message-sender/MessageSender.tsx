import React, { useEffect, useRef, useState } from "react";
import { message0 } from "../HW1";
import s from "./MessageSender.module.css";
import styled from "styled-components";

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
  const M = props.M;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState<any>("");

  const onChange = (e: any) => {
    setText(e.currentTarget.value);
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length ? messages.length + 1 : 1,
        user: message0.user,
        message: {
          text,
          time: new Date().toTimeString().slice(0, 5),
        },
      },
    ]);
    setTimeout(() => setText(""), 4);
  };

  const onKeyDown = (e: any) => {
    e.key === "Enter" && e.shiftKey && addMessage();
  };

  return (
    <>
      {messages.map((m) => (
        <M key={"message" + m.id} message={m} />
      ))}

      <Wrapper id={"hw1-send-message-form"} className={s.sendForm}>
        <Input
          id={"hw1-textarea"}
          
          title={"Shift+Enter for send"}
          placeholder={"Type a message"}
          value={text}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Button id={"hw1-button"} className={s.button} onClick={addMessage}>
          {/*текст кнопки могут изменить студенты*/}
          Send
          {/**/}
        </Button>
      </Wrapper>
    </>
  );
};

export default MessageSender;

const Wrapper = styled.div`
padding: 10px;
`;

const Input = styled.input`
box-shadow: 0px 1px 2px 0px rgba(29, 33, 38, 0.1),0px 5px 20px 0px rgba(29, 33, 38, 0.03);
background: rgb(245, 247, 251);
border: none;
border-radius: 10px;
max-width: 850px;
width: 100%;
height: 50px;
padding-left: 20px;
margin-right: 50px;

`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: rgb(0, 102, 204);
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
`;
