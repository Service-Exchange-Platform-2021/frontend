//source: https://www.npmjs.com/package/react-country-region-selector
//npm i react-country-region-selector or yarn add react-country-region-selector

import React, { useState } from "react";

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const RegionCountrySelector = ({
  setParentCountry,
  setParentRegion,
  country,
  region,
}) => {
  const selectCountry = (val) => {
    setParentCountry(val);
  };

  const selectRegion = (val) => {
    setParentRegion(val);
  };

  return (
    <>
      {/* <div className="form col-lg-12"> */}
      <div>
        <CountryDropdown
          // className="form-control col-lg-6"
          className="form-control"
          value={country}
          onChange={(val) => selectCountry(val)}
        />

        <RegionDropdown
          // className="form-control col-lg-6"
          className="form-control"
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)}
        />
      </div>
      {/* </div> */}
    </>
  );
};
// class RegionCountrySelector extends Component {
//   constructor (props) {
//     super(props);
//     this.state = { country: '', region: '' };
//   }

//   selectCountry (val) {
//     this.setState({ country: val });
//   }

//   selectRegion (val) {
//     this.setState({ region: val });
//   }

//   render () {
//     const { country, region } = this.state;
//     return (
//       <div>
//         <CountryDropdown
//           value={country}
//           onChange={(val) => this.selectCountry(val)} />
//         <RegionDropdown
//           country={country}
//           value={region}
//           onChange={(val) => this.selectRegion(val)} />
//       </div>
//     );
//   }
// }

export default RegionCountrySelector;
