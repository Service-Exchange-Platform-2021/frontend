import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";

const SearchResult = ({ result }) => {
  const context = useContext(SearchContext);

  const { userInfo } = context;

  const {
    avatar_url,
    country,
    description,
    email,
    firstname,
    lastname,
    region,
    skills,
    username,
  } = result;

  return (
    <>
      <section className="users">
        <div className="show-category">
          <div className="offer-Where">
            <p>
              <h4><em>{username}</em></h4>
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
              
              <span >
                {" "}
                {country} / {region}
              </span>
            </p>
          </div>

          <div className="avatar-description-email">
            {userInfo.user ? (
              <img src={avatar_url} alt="avatar" className="avatar" />
            ) : (
              <img src={avatar_url} alt="avatar" className="bluredImg" />
            )}
            <p><em><q>{description}</q></em></p>
            
            <p>
              e-mail:
              <span>
                {" "}
                {email ? (
                  email
                ) : (
                  <p className="redFont">
                    please logged in to see the <strong>e-mail</strong>{" "}
                  </p>
                )}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* { <div className="section-center">
          {users.map((user, userIndex) => {
            const { id, name, image, skills, desc } = user;
            let position = "nextSlide";
            if (userIndex === index) {
              position = "activeSlide";
            }
            if (
              userIndex === index - 1 ||
              (index === 0 && userIndex === users.length - 1)
            ) {
              position = "lastIndex";
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="user-img" />
                <h4>{name}</h4>
                <h6 className="skills">
                  <span>{skills}</span>
                </h6>
                <p className="text">{desc}</p>
              </article>
            );
          })}
          <button className="prev">
            <FiChevronLeft onClick={prevSlide} />
          </button>
          <button className="next">
            <FiChevronRight onClick={nextSlide} />
          </button>
        </div> } */}

      {/* { people.length > 0 ? 
        // people profiles
        <Images 
          images={images}
          openModal={openModal}
        /> 
        : null
      }

      {
        loading ?
          <img src={spinner} alt="loading..." />
        :
          null
      } */}
    </>
  );
};
export default SearchResult;
