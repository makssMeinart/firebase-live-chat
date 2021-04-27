import React, { useContext, useState } from "react"
import styled from "styled-components/macro"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Context } from ".."
import Loader from "./Loader"
import firebase from "firebase"
import Message from "./Message"

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)

  const [value, setValue] = useState()
  // This gets the messages from database
  const [message, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  )

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValue("")
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Wrapper>
      {/* This is just a black cover over the background */}
      <Cover></Cover>
      <Container>
        <Chat__Inner>
          {/* Uploading Messages from database */}
          {message.map((item, index) => (
            <Message item={item} user={user} key={index} />
          ))}
        </Chat__Inner>
        <Chat__Input>
          <Input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Send a message"
            value={value}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Chat__Input>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url("https://mcdn.wallpapersafari.com/medium/49/79/aTFp9D.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: calc(100vh - 64px);
  position: relative;
  z-index: 1;
`
const Cover = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  pointer-events: none;
  z-index: -1;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.8rem;
`
const Chat__Inner = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.75);
  padding: 1.5rem;
  gap: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`
const Chat__Input = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 1.5rem 0;
`
const Input = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0 1rem;
  border-radius: 5px 0 0 5px;

  :focus {
    outline: none;
  }
`
const Button = styled.button`
  border: none;
  width: 100px;
  cursor: pointer;
  margin-left: 1rem;
  color: whitesmoke;
  font-weight: bold;
  transition: all 0.3s ease;
  background-color: darkolivegreen;
  border-color: darkolivegreen;
`

export default Chat
