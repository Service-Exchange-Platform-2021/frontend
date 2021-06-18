import React from 'react';
import Register from './userControl/Register'
import Main from './Main';
import {useContext} from 'react';
import SearchContext  from '../context/SearchContext';
import Search from './Search';






const RegisterPage = () => {

    const {currentPage} = useContext(SearchContext); 

    console.log("currentPage", currentPage);

    let bgPage = ""
    switch(currentPage) {
        case "/": bgPage = <Main />
            break;
        case "/search": bgPage = <Search />
            break;
        default: bgPage = <Main />
    }

    return (
        <>
         <Register/>  
         { bgPage }
        </>
    );
}

export default RegisterPage;
