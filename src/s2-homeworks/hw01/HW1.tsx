import React from "react";
import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";
import styled from "styled-components";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

// нужно создать правильный тип вместо any

type UserType = {
  avatar: string;
  name: string;
};

type MessagePropsType = {
  text: string;
  time: string;
};

export type MessageType = {
  id: number;
  user: UserType;
  message: MessagePropsType;
};

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: "Ivan", // можно менять
  },
  message: {
    text: "hello, i`m Ivan", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: "Friend Name", // можно менять
  },
  message: {
    text: "зеркальное сообщение для тренировки css", // можно менять
    time: "22:00", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <HW1_Title>Hometask №1</HW1_Title>
      <MainBlock>
        {/*проверка отображения (не менять)*/}
        <MessageBlock>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </MessageBlock>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </MainBlock>
    </div>
  );
};

export default HW1;

const HW1_Title = styled.div`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0%;
  text-align: left;
`;

const MainBlock = styled.div`

`

const MessageBlock = styled.div`

`

