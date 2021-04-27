import React, { useContext } from "react"
import { Redirect, Route, Switch } from "react-router"
import { Context } from ".."
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts"
import {useAuthState} from "react-firebase-hooks/auth"
import { privateRoutes, publicRoutes } from "./routes"

export default function AppRouter() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} />
      })}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} />
      })}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  )
}

//
