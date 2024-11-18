import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import movie from "../image/movie.jpg"
const Login = () => {
  const [formData, setFormData] = useState({ name: '', pass: '' });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/regester'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.pass) {
      alert('Please fill in all fields.');
      return;
    }
    const user = users.find((user) => user.name === formData.name && user.pass === formData.pass);
    if (user) {
      navigate('/home');
      setFormData({ name: '', pass: '' });
    } else {
      alert('Invalid username or password');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className='mainbox'>
     0
        <div className='centerbox'>
          <div className='boxhead'>
            <h1>LOGIN</h1>
          </div>
          <div className='logobox'>
            <div className='login_logo'>
              <i className="fa-solid fa-user fa-2xl" style={{ fontSize: '65px' }}></i>
            </div>
          </div>
          <div className='inputcontainer'>
            <input type="text" className='input' placeholder='user id' name="name" value={formData.name} onChange={handleChange} />
            <input type="password" className='input' placeholder='password' name="pass" value={formData.pass} onChange={handleChange} />
            <button className='button' onClick={handleSubmit}>Login</button>
          </div>
          <div className='footer'>
            <p>Not a member? <NavLink to="/s">Signup</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
