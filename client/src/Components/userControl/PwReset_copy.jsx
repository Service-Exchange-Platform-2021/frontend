import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import searchContext from '../../context/SearchContext'
import PwResetForm from './forms/PwResetForm'

const PwReset = (props) => {

    const context = useContext(searchContext);

    const {newPassword, setNewPassword, alertPW, setAlertPW, confirmNewPW, setConfirmNewPW, alertPWCheck, setAlertPWCheck} = context;

    //frontend url: http://localhost:3000/reset_password/thisisthetoken
    console.log(props.match.params.token)
    const token = props.match.params.token;
    const url = `http://localhost:4000/`
    const authAxios = axios.create({
        baseURL: url,
        headers: { "Content-Type": "application/json",},     
        withCredentials: true                    
    }) 

    //const context = useContext(searchContext);
    //const {userInfo} = context;

     const changeNewPW = (e) => {
        setNewPassword(e.target.value);
    }

    const changeConfirmNewPW = (e) =>{
        setConfirmNewPW(e.target.value)
    };     
        
    const updatePW = async () => {
            try{
                const result = await authAxios.post('/reset_password/',{
                    newPassword: newPassword //check that the key is the same as in the backend
                })
                console.log(result.data)
            } catch(err)
                { console.log(err.message) }
            }

        const submitHandler = (e) => {
        e.preventDefault();

        // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        // const isPwValid = pwValidator.test(newPassword);

        // if(!isPwValid){
        //     setAlertPW(true)
        //     setTimeout(() => {
        //         setAlertPW(false)
        //     }, 20000); 
        //     return false;                    
        // }        

        if(newPassword !== confirmNewPW) {
            setAlertPWCheck(true)
            setTimeout(()=>{
                setAlertPWCheck(false)
            }, 5000);
            return false;
        }        

        updatePW();
        
        setNewPassword("");
        setConfirmNewPW("");   
        
        props.history.push('/logInPage')
    }

    useEffect(() => {
        console.log('useEffect')
        const checkToken = async() =>{
            try{
                console.log('checkToken')
                const result = await authAxios.post('reset_password/token',{
                    token: token
                })
                console.log('post call')
                console.log(result.data)
                //if result data is an error then show message to user that token is not valid
            }catch(err){
                console.log(err)
            }
        }
        checkToken()
    }, [])

    return (
        <>
        <PwResetForm
                    submitHandler = {
                        submitHandler }
                    changeNewPW = {
                        changeNewPW }
                    changeConfirmNewPW = {
                        changeConfirmNewPW }
                    alertPWCheck = {
                        alertPWCheck } 
                    alertPW = {
                        alertPW }       
            />    
        </>
    )
}

export default PwReset


































    // const submitHandler = (e)=> {
    //     e.preventDefault();

        // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        // const isPwValid = pwValidator.test(newpassword);

        // if(!isPwValid){
        //     setAlertPW(true)
        //     setTimeout(() => {
        //         setAlertPW(false)
        //     }, 20000); 
        //     return false;                    
        // }        

    //     if(newpassword !== confirmNewPW) {
    //         setAlertPWCheck(true)
    //         setTimeout(()=>{
    //             setAlertPWCheck(false)
    //         }, 5000);
    //         return false;
    //     }

     
    // }
    
    // const changeNewPW = (e)=> {
    //     setNewPassword(e.target.value);
    // }

    // const changeConfirmNewPW = (e) =>{
    //     setConfirmNewPW(e.target.value);
    // }