import React, { useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import SkillsMenuLarge from "./SkillsMenuLarge";
//import items from "../assets/data/itemsSkills";
import SearchContext from "../context/SearchContext";
import { Link } from "react-router-dom";
import FindMenuSmall from "./FindMenuSmall";

function FindMenu({goSearch}) {  

  const context = useContext(SearchContext);

  const {
    country,
    region,
    lookSelection,
    selectCountry,
    selectRegion,
    handleLookSelection,
    setShowSkillsSelection,
    showSkillsSelection,
    itemSkills,
    // setItemSkills
  } = context;
  
  // const data = { country, region, lookSelection, userInfo, searchResults, setItemSkills }
  

  return (
    <>
      <Link to="/">
        <span className="logo">
          <i className="fab fa-staylinked fa-2x"></i>
        </span>
      </Link>

      <form className="form largeFindMenu">
        <div className="skillsMenus">
          <SkillsMenuLarge
            title="I'm Looking For"
            // items={items}
            items={itemSkills}
            goSearch={goSearch}
            multiSelect
            selection={lookSelection}
            handleSelection={handleLookSelection}
            showSkillsSelection={showSkillsSelection}
            setShowSkillsSelection={setShowSkillsSelection}
          />
        </div>

        <div className="countryAndRegion">
          <CountryDropdown
            value={country}
            onChange={(e) => selectCountry(e)}
            required
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(e) => selectRegion(e)}
            required
          />
        </div>
        <div className="btnFindDiv">
          <button
            onClick={goSearch}
            type="button"
            value="search"
            className="btnFind"
          >
            Find
          </button>
        </div>
      </form>

      <FindMenuSmall 
        //showHide={showHide}
        // show={show}
        //setShow={setShow}
        // items={items}
        items={itemSkills}
        lookSelection={lookSelection}
        handleLookSelection={handleLookSelection}
        CountryDropdown={CountryDropdown}
        country={country}
        selectCountry={selectCountry}
        RegionDropdown={RegionDropdown}
        region={region}
        selectRegion={selectRegion}
        goSearch={goSearch}
        setShowSkillsSelection={setShowSkillsSelection}
        showSkillsSelection={showSkillsSelection}
      />
    </>
  );
}

export default FindMenu;
