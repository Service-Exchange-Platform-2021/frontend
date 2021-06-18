import React, { useContext } from "react";
import axios from "axios";
import searchContext from "../context/SearchContext";

const Test = () => {
  const context = useContext(searchContext);

  const { userInfo } = context;

  const url = `http://localhost:4000`;

  const handleDelete = () => {
    const authAxios = axios.create({
      baseURL: url,
      headers: { Authorization: `Bearer ${userInfo}` },
    });

    const deleteUser = async () => {
      try {
        const result = await authAxios.get("/delete");
        console.log(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    deleteUser();
    // setMessage(request)
  };

  return (
    <div>
      <h1>What a doggy day!</h1>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default Test;

// const config = { headers: {"Authorization": `Bearer ${token}`,
//                            "Access-Control-Allow-Credentials": true,
//                            "Content-Type": "application/json"
//                         }
//                     }

// axios.delete('http://localhost:4000/delete', config)
//     .then(res => {
//     //console.log(res)
//     console.log('res received', res.data);
//     })
//     .catch(err=>console.log(err))

//  axios.post('http://localhost:4000/register', data)
//  .then(res=>{
//      console.log('res received', res.data)
//  })
//  .then(newUserCreated => console.log(newUserCreated))
//  // in case the API responded, we will have the error inside error.response.data
//  .catch(err => console.log(err && err.response && err.response.data))
//  }
