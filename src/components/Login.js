import styled from "styled-components"
import React, { useContext } from "react"
import { Context } from ".."
import firebase from "firebase"

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <Button onClick={login}>Login with Google</Button>
        </Card>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Container = styled.div`
  max-width: 1100px;
  height: calc(100vh - 63px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
const Button = styled.button`
  padding: .7rem 1.2rem;
  border: 3px solid darkolivegreen;
  background: darkolivegreen;
  font-weight: bold;
  color: whitesmoke;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s ease all;

  :hover {
    border: 3px solid darkolivegreen;
    background: none;
    color: darkolivegreen;
  }
`

export default Login
