import React, { useRef, useEffect, useContext } from "react"
import SkillsMenuLarge from '../SkillsMenuLarge'
import items from '../../assets/data/itemsSkills'
import MyAlert from "../userControl/layout/Alert";
import SearchContext from "../../context/SearchContext";

import { Link } from "react-router-dom";

//3rd party package
import RegionCountrySelector from "../userControl/selector/RegionCountrySelector";
import AvatarUploader from "../userControl/upload-edit/AvatarUploader";


const ChangeDetailsForm = (props) => {

  const firstnameRef = useRef()

  useEffect(() => {
    firstnameRef.current.focus();

  }, []);

  return (
    <>
      <div className="backRegister">
        <div className="card div-center-details ">
          <div className="container">
            <div className="card-body">


              <br />
              <form onSubmit={props.submitHandler}>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <label>First Name</label>

                    <input
                      type="text"
                      name="firstname"
                      ref={firstnameRef}
                      value={props.firstname}
                      placeholder="your first name"
                      className="form-control"
                      onChange={props.changeFirstName}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-6">
                    <label>Last Name</label>

                    <input
                      type="text"
                      name="lastname"
                      value={props.lastname}
                      placeholder="your last name"
                      className="form-control"
                      onChange={props.changeLastName}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-10">
                    <label>Country</label>

                    <RegionCountrySelector
                      country={props.country}
                      region={props.region}
                      setParentCountry={(val) => props.changeCountry(val)}
                      setParentRegion={(val) => props.changeRegion(val)}
                    />

                  </div>


                  <div className="form-group col-lg-5">
                    <label>User Name</label>

                    <input
                      type="text"
                      name="username"
                      value={props.username}
                      placeholder="unique, no space"
                      className="form-control"
                      onChange={props.changeUserName}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-4">
                    <label>
                      Skills I can offer
                    </label>


                    <SkillsMenuLarge
                      // title="I'm looking for" 
                      className="form-control"
                      items={items}
                      multiSelect
                      selection={props.offerSelection}
                      handleSelection={props.changeOfferSelection} />
                    {props.offerSelection.length > 0 ?
                      props.offerSelection.map(item => {
                        return <div key={item.id}>
                          <h4>{item.value}</h4>
                        </div>
                      })
                      : null
                    }

                  </div>

                  <div className="form-group col-lg-4">
                    <label>
                      Avatar: Maximal Upload File Size 80 KB
                    </label>

                    <AvatarUploader
                      // input name="avatar" type='file' accept='image/*'
                      // onClose={props.onClose}
                      onCrop={props.onCrop}
                      onBeforeFileLoad={props.onBeforeFileLoad}
                      preview={props.preview}
                      savedImage={props.savedImage}
                    />

                  </div>

                  <div className="form-group col-lg-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Submit
                    </button>
                  </div>
                  <div className="form-group col-lg-12 d-flex justify-content-end">
                    <button className="btn btn-primary btn-md"><Link to="/profile">Back to profile</Link>
                    </button>
                  </div>

                  <div className="form-group col-lg-9">
                    {props.alertEM && (
                      <MyAlert
                        alertType={"warning"}
                        alertHeading={"Error!"}
                        alertMessage={"Please Enter A Valid Email "}
                      />
                    )}
                    {props.alertPW && (
                      <MyAlert
                        alertType={"danger"}
                        alertHeading={"Error!"}
                        alertMessage={"Please Enter A Valid Password "}
                      />
                    )}
                    {props.alertPWCheck && (
                      <MyAlert
                        alertType={"warning"}
                        alertHeading={"Error!"}
                        alertMessage={"Inconsistent Password!"}
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeDetailsForm;
