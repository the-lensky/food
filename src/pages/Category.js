import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import MealList from './MealList'

function Category(props) {

    const [meals, setMeals] = useState([])

    const {name} = useParams()

    useEffect(() => {
        getFilteredCategory(name)
            .then(((data) => {
                setMeals(data.meals)
            }) )
    }, [name])

    return (
        <>
            {
                !meals.length
                    ? <Prelaoder/>
                    : <MealList meals={meals}/>
            }
        </>
    )
}

export default Categoty