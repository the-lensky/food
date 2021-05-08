import React from 'react'
import { Link } from 'react-router-dom'

function Meal(props) {

    const {strMeal, strMealThumb, idMeal} = props

    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn green'> Watch recipe</Link>
            </div>
        </div>
    )
}

export default Meal