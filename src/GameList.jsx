import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'

const GameList = () => {

    const [data, setData] = useState([])
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [rate, setRate] = useState(true)


    useEffect(() => {
        const fetchData = () => {
            axios.get('https://wild-games.herokuapp.com/api/v1/')
                .then(response => setData(response.data))
                .catch(err => { setIsError(!isError); setError(err.message) })
                .finally(() => setLoading(!loading))
        };
        fetchData()
    }, [])

    const deleteCard = id => {
        const filterCard = data.filter(e => { return e.id !== id })
        setData(filterCard)
    }


    return (
        <>

            {rate ?
                <>
                    <button onClick={() => setRate(!rate)}>
                        {'Show me all the Games'}
                    </button>
                    {data.map(e => <Game {...e} deleteCard={deleteCard} />)}
                </>
                :
                <>
                    <button onClick={() => setRate(!rate)}>
                        {'Show me all the Games'}
                    </button>
                    {data.filter(e => { return e.rating >= 4.5 }).map(e => { return <Game {...e} deleteCard={deleteCard} /> })}
                </>
            }
        </>

    )
}
export default GameList