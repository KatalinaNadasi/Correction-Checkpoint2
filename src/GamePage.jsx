import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Button} from 'reactstrap'

const GamePage = ({ location }) => {

    const screenshots = location.state

    return (
        <>
            {screenshots.map(e => {
                return <img style={{maxWidth: '200px'}} src={e.image}  />
            })}
          <Button color='danger' tag={Link} to='/'>
              Go Home
          </Button>
        </>
    )
}

export default GamePage