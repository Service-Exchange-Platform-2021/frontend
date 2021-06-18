//source: https://www.npmjs.com/package/react-avatar-edit
//npm i react-avatar-edit

//import React, { Component } from 'react'
import React from "react";
import Avatar from "react-avatar-edit";

export const AvatarUploader = (props) => {
  /* console.log('Avatar!!')
  console.log(props) */
  // const [preview, setPreview] = useState("");
  // const [savedImage, setSavedImage] = useState("");
  // const [sourceImage, setSourceImage] = useState("");

  //   const onClose = () => {
  //   setPreview(null);
  //   setSavedImage(null);
  //   setSourceImage(null);
  // }

  // const onCrop = (preview) => {
  //   setPreview(preview)
  // }

  // const onBeforeFileLoad = (e) => {
  //   if(e.target.files[0].size >=71680) {
  //     alert("File is too big! The maximal file size is 71860 kbs");
  //     e.target.value="";
  //   }
  // }

  return (
    <>
      <div>
        <Avatar
          className="form-control"
          width={280}
          height={240}
          onCrop={props.onCrop}
          // onClose={props.onClose}
          // onClose={err=>{console.log('onClose is removed after testing')}}
          onBeforeFileLoad={props.onBeforeFileLoad}
        />
        <br />
        {/* {props.preview ? <img src={props.preview} alt="Preview" /> : null} */}
        {props.savedImage ? (
          <img src={props.savedImage} alt="savedImages" />
        ) : null}
      </div>
    </>
  );
};

// class AvatarUploader extends Component {

//   constructor(props) {
//     super(props)
//     const src =
//     this.state = {
//       preview: null,
//       savedImage: null,
//       //src
//     }
//     this.onCrop = this.onCrop.bind(this)
//     this.onClose = this.onClose.bind(this)
//     this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
//   }

//   onClose() {
//     this.setState({preview: null,savedImage:this.state.preview})
//   }

//   onCrop(preview) {
//     this.setState({preview})
//   }

//   onBeforeFileLoad(e) {
//     if(e.target.files[0].size > 71680){
//       alert("File is too big!");
//       e.target.value = "";
//     };
//   }

//   render () {
//     return (
//       <div>
//         <Avatar
//           width={390}
//           height={295}
//           onCrop={this.onCrop}
//           onClose={this.onClose}
//           onBeforeFileLoad={this.onBeforeFileLoad}
//           // src={this.state.src}
//         />
//         {this.state.preview ? <img src={this.state.preview} alt="Preview" /> : null}
//         {this.state.savedImage ? <img src={this.state.savedImage} alt="savedImages" /> : null}
//       </div>
//     )
//   }
// }

export default AvatarUploader;
