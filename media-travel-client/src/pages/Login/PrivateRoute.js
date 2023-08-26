import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { UserContext } from "../../App"
import { useAuth } from "./contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  const {user} = useContext(UserContext)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user?.email || currentUser ? <Component/> : <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
          />
      }
      }
    ></Route>
  )
}
