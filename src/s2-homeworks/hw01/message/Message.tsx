import React from "react";
import s from "./Message.module.css";
import { MessageType } from "../HW1";
import styled from "styled-components";

// нужно создать правильный тип вместо any

export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
  return (
    <MessageWrapper id={"hw1-message-" + props.message.id}>
      <MessageBlock>
        <Block>
          <SendedMessage>
            <Name id={"hw1-name-" + props.message.id}>
              {/*создаёт студент*/}
              {props.message.user.name}
              {/**/}
            </Name>
            <Mes id={"hw1-text-" + props.message.id}>
              {/*создаёт студент*/}
              {props.message.message.text}
              {/**/}
            </Mes>
          </SendedMessage>

          <Avatar
            id={"hw1-avatar-" + props.message.id}
            // создаёт студент
            src={props.message.user.avatar}
            //
          />
        </Block>

        <Time id={"hw1-time-" + props.message.id}>
          {/*создаёт студент*/}
          {props.message.message.time}
          {/**/}
        </Time>
      </MessageBlock>
    </MessageWrapper>
  );
};

export default Message;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 50px;
`;

const MessageBlock = styled.div`
  width: 580px;
  height: 60px;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 5px;
  margin-right: 15px;
`;

const SendedMessage = styled.div`
border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(29, 33, 38, 0.1),
    0px 5px 20px 0px rgba(29, 33, 38, 0.03);
  background: rgb(0, 102, 204);

  width: 527px;
  height: 60px;
  text-align: right;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0%;
`;

const Mes = styled.pre`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
`;

const Time = styled.div`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0%;

  padding-right: 25px;
  padding-top: 5px;
`;
