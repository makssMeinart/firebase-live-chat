import { Box, Container, Grid } from "@material-ui/core"
import React, { useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from ".."
import "../components/loader.css"

export default function Loader() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <Container>
      <Grid
        style={{ height: "calc(100vh - 63.99px)" }}
        container
        alignItems={"center"}
        justify={"center"}
      >
        <Box>
          {/* Loader */}
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Box>
      </Grid>
    </Container>
  )
}
