import React, { useRef, useEffect, useContext } from "react"
import SkillsMenu from '../SkillsMenuLarge'
//import MyAlert from "../userControl/layout/Alert";
import SearchContext from "../../context/SearchContext";
import { Link } from "react-router-dom";

import RegionCountrySelector from "../userControl/selector/RegionCountrySelector";
import AvatarUploader from "../userControl/upload-edit/AvatarUploader";

const ChangeDetailsForm = (props) => {

  const context = useContext(SearchContext);

  const firstnameRef = useRef()

  const {
    lookSelection,
    handleLookSelection,
    setShowSkillsSelection,
    showSkillsSelection,
    itemSkills,
    // setItemSkills
  } = context;

  useEffect(() => {
    firstnameRef.current.focus();

  }, []);

  return (
    <>
      <div className="backRegister">
        <div className="card div-center-details ">
          <div className="container">
            <div className="details-body">


              <br />
              <form onSubmit={props.submitHandler}>
                <div className="form-row">
                  <div className="form-group col-lg-11 details">
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

                  <div className="form-group col-lg-11 details">
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

                  <div className="form-group col-lg-11 details">
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

                  <div className="form-group col-lg-11 details">
                    <label>Country & Region</label>

                    <RegionCountrySelector
                      country={props.country}
                      region={props.region}
                      setParentCountry={(val) => props.changeCountry(val)}
                      setParentRegion={(val) => props.changeRegion(val)}
                    />
                  </div>

                  <div className="form-group col-lg-11 details">

                    <SkillsMenu
                      title="Skills I can offer"
                      // items={items}
                      items={itemSkills}
                      multiSelect
                      selection={props.offerSelection}
                      handleSelection={props.changeOfferSelection}
                    />
                    <div className="skills outcome">
                      {props.offerSelection.length > 0 ?
                        props.offerSelection.map(item => {
                          return <div key={item.id}>
                            <h4>{item.value}</h4>
                          </div>
                        })
                        : null
                      }
                    </div>
                  </div>

                  <div className="uploader">
                    <label>
                      Avatar: Maximal Upload File Size 80 KB
                    </label>
                    <div className="uploader">
                      <AvatarUploader
                        // input name="avatar" type='file' accept='image/*'
                        // onClose={props.onClose}
                        onCrop={props.onCrop}
                        onBeforeFileLoad={props.onBeforeFileLoad}

                        preview={props.preview}
                        savedImage={props.savedImage}

                      />

                    </div></div>

                  <div className="form-group col-lg-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Submit
                    </button>
                  </div>
                  <div className="form-group col-lg-12 d-flex justify-content-center">
                    <button className="btn btn-primary btn-md"><Link to="/profile">Back to profile</Link>
                    </button>
                  </div>

                  {/* <div className="form-group col-lg-9">
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
                  </div> */}
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