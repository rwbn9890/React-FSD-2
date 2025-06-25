import React from 'react';
import { useSelector } from 'react-redux';
import useHook from '../../app/useHook';

const Movies = () => {
    
      const {loading, error, data} = useHook("https://fakestoreapi.com/products")

    // const moviesList = useSelector((state) => state.movies.list)
    // const usersList = useSelector((state) => state.movies.userList)
    // console.log("movies: " + moviesList)
    // console.log("users: " + usersList)
    console.log(data)

    return (
        <div>
            
        </div>
    );
}

export default Movies;
