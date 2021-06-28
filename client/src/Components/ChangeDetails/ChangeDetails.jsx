import React, { useState, useContext } from 'react'
// import axios from '../userControl/configure-files/axios'
import axios from "axios"
import searchContext from '../../context/SearchContext'
import { useHistory } from 'react-router-dom';
import ChangeDetailsForm from './ChangeDetailsForm'

const ChangeDetails = () => {
    const history = useHistory()
    const context = useContext(searchContext)
    const { setUserInfo } = context

    const { userInfo } = context
    const user = userInfo.user


    const [firstname, setFirstName] = useState(user.firstname);
    const [lastname, setLastName] = useState(user.lastname);
    const [username, setUserName] = useState(user.username);

    const [country, setCountry] = useState(user.country); //for RegionCountrySelector package
    const [region, setRegion] = useState(user.region); //for RegionCountrySelector pack

    const [preview, setPreview] = useState("");
    const [savedImage, setSavedImage] = useState(user.avatar_url);

    const [offerSelection, setOfferSelection] = useState(user.skills);

    const [alertEM, setAlertEM] = useState(false);
    const [alertPW, setAlertPW] = useState(false);
    const [alertPWCheck, setAlertPWCheck] = useState(false);

    //we bring in the store at this point


    const postNewUser = (firstname, lastname, country, region, username, savedImage, offerSelection) => {

        const data = { firstname, lastname, country, region, username, savedImage, offerSelection };
        const config = { headers: { authorization: userInfo.token } }
        axios.patch('http://localhost:4000/profile', data, config)
            //we do not need res.json in axios at all
            .then(res => {
                console.log(res.data)
                setUserInfo({ ...userInfo, user: res.data })
                history.push("/profile")
            })
            // in case the API responded, we will have the error inside error.response.data 
            .catch(err => console.log(err.res && err.res.data))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        //email validator source: 
        //At least 8 characters long;
        //One lowercase, one uppercase, one number and one special character;
        //No whitespaces. use https://regexr.com/ and https://regex101.com/ for writing up and testing regex
        //source: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a (section 6)

        // const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/
        // const isEmValid = emailValidator.test(email);        

        // if(!isEmValid ){
        //     setAlertEM(true)
        //     setTimeout(() => {
        //         setAlertEM(false)
        //     }, 5000); 
        //     return false;           
        // }

        // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        // const isPwValid = pwValidator.test(password);

        // if(!isPwValid){
        //     setAlertPW(true)
        //     setTimeout(() => {
        //         setAlertPW(false)
        //     }, 5000); 
        //     return false;                    
        // }        

        // if ((isEmValid && isPwValid) && (password!==confirmPW)) {
        //     setAlertPWCheck(true)
        //     setTimeout(() => {
        //         setAlertPWCheck(false)
        //     }, 5000); 
        //     return false;
        // }

        postNewUser(firstname, lastname, country, region, username, savedImage, offerSelection);

        //  setFirstName("");
        //  setLastName("");
        //  setCountry("");
        //  setRegion("");
        //  setEmail("");
        //  setUserName("");
        //  setPassWord("");
        //  setConfirmPW("");

        //  setPreview(null);
        //  setSavedImage(null);

        //  setOfferSelection([]);
    }

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const changeLastName = (e) => {
        setLastName(e.target.value);
    }


    const changeUserName = (e) => {
        setUserName(e.target.value);
    }


    const changeCountry = (val) => {
        setCountry(val)
    }

    const changeRegion = (val) => {
        setRegion(val)
    }

    // const onClosing = () => {  
    //     console.log('onClose works!')      
    //     setPreview(null);
    //     setSavedImage(preview);    
    //   }

    const onCrop = (preview) => {

        setPreview(preview);
        setSavedImage(preview);
    }

    const onBeforeFileLoad = (e) => {

        if (e.target.files[0].size >= 80000) {
            alert("File is too big! The maximal file size is 80 KB");
            e.target.value = "";
        }
    }

    const changeOfferSelection = (selection) => {
        setOfferSelection(selection);
    }

    return (
        <>
            <ChangeDetailsForm
                submitHandler={submitHandler}
                changeFirstName={changeFirstName}
                changeLastName={changeLastName}
                changeUserName={changeUserName}
                changeCountry={changeCountry}
                changeRegion={changeRegion}
                changeOfferSelection={changeOfferSelection}
                firstname={firstname}
                lastname={lastname}
                username={username}
                country={country}
                region={region}
                offerSelection={offerSelection}
                alertEM={alertEM}
                alertPW={alertPW}
                alertPWCheck={alertPWCheck}

                //props passing to grandchild of Avatar
                // take onClose off to deactivate it
                // onClose = { onClose }
                onCrop={onCrop}
                onBeforeFileLoad={onBeforeFileLoad}
                preview={preview}
                savedImage={savedImage}
            />
        </>
    )
}

export default ChangeDetails