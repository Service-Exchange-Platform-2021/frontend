import React from 'react';
import Login from './userControl/Login'
import Main from './Main';
import {useContext} from 'react';
import SearchContext  from '../context/SearchContext';
import Search from './Search';



const LogInPage = () => {

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
         <Login/>  
         { bgPage }
        </>
    );
}

export default LogInPage;
