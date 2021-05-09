import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getMealById} from '../api'
import Preloader from '../components/Preloader'

function Recipe(props) {
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    const {goBack} = useHistory()


    // useEffect(() => {
    //     getMealById(id)
    //         .then((data) => {
    //             setRecipe(data.meals[0])
    //         })
    // }, [id])

    useEffect(() => {
       fetch(`https://themealdb.com/api/json/v1/1/${id}`)
           .then(data => setRecipe(data.meals[0]))
    }, [id]);

    return (
        <>
            <button className='btn green' onClick={goBack}>Go back</button>
            {
                !recipe.idMeal
                    ? <Preloader/>
                    : <div className='recipe'>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                        <h1>{recipe.strMeal}</h1>
                    </div>
            }
        </>
    )
}

export default Recipe