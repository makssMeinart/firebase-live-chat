import React, { useContext } from "react"
import styled from "styled-components"
import { useAuthState } from "react-firebase-hooks/auth"
import { NavLink } from "react-router-dom"
import { Context } from ".."
import { LOGIN_ROUTE } from "../utils/consts"

export default function Navbar() {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)


  return (
    <Wrapper>
      <Container>
        <Logo>This is the Live Chat!</Logo>
        {/* We need to display different buttons depending on the status of account */}
        {user ? 
        (
        <Button onClick={() => auth.signOut()}>LogOut</Button>
        )  
        :
        (
        <Button >LogIn</Button>
        )
      }
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 63px;
  background-color: darkolivegreen;
`
const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.h2`
  margin: 0;
  color: whitesmoke;
`
const Button = styled.button`
  padding: .5rem 1.5rem;
  cursor: pointer;
  border: 3px solid whitesmoke;
  background: transparent;
  color: whitesmoke;
  font-weight: bold;
`
