import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Gamelist from './GameList'
import GamePage from './GamePage'

const RouterApp = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Gamelist} />
                <Route exact path='/game/:id' component={GamePage} />
            </Switch>

        </Router>
    )
}

export default RouterApp