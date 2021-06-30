import React, { useState, useContext } from "react";
import SearchContext from "../context/SearchContext";
import Mail from "./Mail";
import Avatar from "../assets/images/no-avatar.png";



const SearchResult = ({ result }) => {
  const [emailShow, setEmailShow] = useState(false);
  const [colorBtn, setColorBtn] = useState("true");
  const context = useContext(SearchContext);

  let bgColor = colorBtn ? "$redButton" : "#7c7c7c";

  const { userInfo } = context;

  const { avatar_url, country, description, email, region, skills, username } =
    result;

  // console.log("what's there", result);

  const mailMe = () => {
    setEmailShow(true);
    setColorBtn();
  };

  return (
    <>
      <section className="users">
        <div className="show-category">
          <div className="offer-Where">
            <p>
              <h4>
                <em>{username}</em>
              </h4>
              <br /> can offer you:
              <br />
              <br />
              <span>
                {skills.length > 0 &&
                  skills.map((select) => {
                    return (
                      <ul className="offer">
                        <li>{select.value}</li>
                      </ul>
                    );
                  })}
              </span>
            </p>
            <p className="country-region">
              in <br />
              <span>
                {" "}
                {country} / {region}
              </span>
            </p>
          </div>

          <div className="avatar-description-email">

            {userInfo.user ? (
              <img src={avatar_url} alt="avatar" className="avatar" />
            ) : (
              <img src={Avatar} alt="avatar" 
			  className="avatar" 
			  />
            )}
			
			{userInfo.user ? (
				<em><q>{description}</q></em>
				) : (
					<p></p>
					)}
             <p className = "email">
              e-mail:
              <span>
                {" "}
                {email ? (
                  <button
                    className="getInContact"
                    onClick={mailMe}
                    style={{ backgroundColor: bgColor }}
                  >
                    get in contact
                  </button>
                ) : (
                  <p className="redFont">
                    please logged in to see the <strong>e-mail</strong>{" "}
                  </p>
                )}
              </span>{" "}
            </p>

            <div>{emailShow ? <Mail toEmail={email} /> : null}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SearchResult;
