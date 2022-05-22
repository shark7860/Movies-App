import React, { useEffect } from 'react';
import './Home.scss';
import MovieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';
import MovieListing from '../MovieListing/MovieListing ';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
import { useSelector } from "react-redux";
import { getMovieName } from "../../features/movies/movieSlice";
const Home = () => {
    const dispatch = useDispatch();
    const searchText = useSelector(getMovieName);
console.log(searchText);
    useEffect(()=>{
        const movieText = searchText;
        let page=1;
        
        const fetchMovies = async() =>{
            const res = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&plot=full&type=movie&page=${page}`)
            .catch((err)=>{
                console.log('err: ', err);
            });
            dispatch(addMovies(res?.data));
        };
        
        while(page<8) {
            fetchMovies();
        page=page+1;
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText]);
    

    return(

        <div>
            <div className='banner-img'></div>
            <MovieListing/>
        </div>

    )

}

export default Home;