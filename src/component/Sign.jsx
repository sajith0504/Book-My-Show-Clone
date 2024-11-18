import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import axios from "axios"; 
import movie from "../image/movie.jpg"
const Sign = () => {
  const [data, setData] = useState({
    name: "",
    pass: "",
    email: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async () => {
    try {
      if(!data.name||!data.pass){
        alert('please fill the given field')
        return
      }
      const response = await axios.post('http://localhost:3001/regester', data); // Corrected URL spelling to 'register'
      console.log(response.data);
        setData({
        name: "",
        pass: "",
        email: ""
      });
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div>
      <div className='sign_mainbox'>
      <img src={movie} alt=""  style={{position:"absolute",width:"100%",height:"100vh"}} />
        <div className='sign_centerbox'>
          <div className='boxhead'>
            <h1>Sign Up</h1>
          </div>
          <div className='sign_logobox'>
            <div className='sign_logo'>
              <i className="fa-solid fa-user fa-2xl" style={{ fontSize: '65px' }}></i>
            </div>
          </div>
          <div className='sign_inputcontainer'>
            <input type="text" className='sign_input' placeholder='user id' name='name' value={data.name} onChange={handleChange} />
            <input type="password" className='sign_input' placeholder='password' name='pass' value={data.pass} onChange={handleChange} />
            <input type="email" className='sign_input' placeholder='email' name='email' value={data.email} onChange={handleChange} />
            <button className='sign_button' onClick={handleClick}>Sign Up</button>
          </div>
          <div className='sign_footer'>
            <p>Already a member? <NavLink to="/">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;

