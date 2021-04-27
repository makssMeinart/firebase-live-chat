import "./App.css"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router} from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Chat from "./components/Chat"
import {COLORS} from "./utils/consts"
import { Context } from "."
import Loader from "./components/Loader"
import { useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

const App = () => {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if(loading) {
    return <Loader />
  }

  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  )
}

export default App