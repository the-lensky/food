import React from 'react'
import { useParams } from 'react-router-dom'

function Movie() {
    const value = useParams()
    return (
        <div>Movie</div>
    )
}

export default Movie