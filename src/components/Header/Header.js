import React, { useState } from 'react';
import user from '../../images/user.png'
import {Link} from 'react-router-dom'
import './Header.scss';

import { useDispatch } from 'react-redux';
import { sText } from '../../features/movies/movieSlice';

const Header = () => {

const dispatch = useDispatch();
const [inputVal, setInputVal] = useState();
const handleInput= (e)=>{
    const stText = e.target.value;
    setInputVal(stText);
    dispatch(sText(stText));
}
    return(

        <div className='header'>
            <Link to='/'>
            <div className='logo'> Movie App</div>
            </Link>
            <input type="text" maxlength="500" name="search" id="search" placeholder="What are you looking for ?" 
            className='search'
            onChange={(e)=>handleInput(e)}
            value={inputVal} aria-autocomplete="list" autocomplete="off" autocapitalize="none" spellcheck="false"/>
            <div className='user-image'>
                <img src={user} alt='user'/>
            </div>
        </div>

    )

}

export default Header;