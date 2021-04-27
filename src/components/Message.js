import React from "react"
import styled from "styled-components/macro"
import "./message.css"

export default function Message({ item, user }) {
  const { displayName, photoURL, text } = item
  
  return (
    <Wrapper
      className={user.uid === item.uid ? "our-message" : "their-message"}
    >
      <UserIcon className="user-icon">
        <Icon src={photoURL} />
      </UserIcon>
      <UserText className="user-text">
        <UserName>{displayName}</UserName>
        <Text>{text}</Text>
      </UserText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  max-width: 60%;
`

const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`
const Icon = styled.img`
  width: 45px;
  border-radius: 50%;
`

const UserName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 0.9rem;
  color: black;
`
const UserText = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 0.8rem 1.5rem 0.8rem 0.5rem;
  border-radius: 0.4rem;
  font-family: Roboto;
`
const Text = styled.p`
  margin: 0.4rem 0;
  font-size: 1.1rem;
  line-height: 1.2;
`
