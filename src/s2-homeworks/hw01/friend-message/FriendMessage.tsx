import React from "react";
import s from "./FriendMessage.module.css";
import { MessageType } from "../HW1";
import styled from "styled-components";

// создать тип вместо any и отобразить приходящие данные
type FriendMessgeType = {
  message: MessageType;
};

const FriendMessage = (props: FriendMessgeType) => {
  return (
    <MessageWrapper id={"hw1-friend-message-" + props.message.id}>
      <MessageBlock>
        <Block>
          <Avatar
            id={"hw1-friend-avatar-" + props.message.id}
            // создаёт студент
            src={props.message.user.avatar}
            //
          />
          <SendedMessage>
            
              <Name
                id={"hw1-friend-name-" + props.message.id}
                className={s.friendName}
              >
                {/*создаёт студент*/}
                {props.message.user.name}
                {/**/}
              </Name>
              <Mes
                id={"hw1-friend-text-" + props.message.id}
                className={s.friendMessageText}
              >
                {/*создаёт студент*/}
                {props.message.message.text}
                {/**/}
              </Mes>
           
          </SendedMessage>
          
        </Block>
        <Time
          id={"hw1-friend-time-" + props.message.id}
          className={s.friendTime}
        >
          {/*создаёт студент*/}
          {props.message.message.time}
          {/**/}
        </Time>
      </MessageBlock>
    </MessageWrapper>
  );
};

export default FriendMessage;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
`;

const MessageBlock = styled.div`
  width: 580px;
  height: 60px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 5px;
  margin-left: 10px;
`;

const SendedMessage = styled.div`
  border-radius: 10px;
  background: rgb(245, 247, 251);
  
  width: 527px;
  height: 60px;
  text-align: left;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
 color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0%;
`;

const Mes = styled.pre`
 color: rgb(0, 0, 0);
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

  padding-left: 25px;
  padding-top: 5px;
`;
