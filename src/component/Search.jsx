

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGift, faBell, faTicket, faLock, faDisplay, faCaretDown, faCreditCard, faMessage, faGear, faUser, faEnvelope, faTent } from '@fortawesome/free-solid-svg-icons';
import img1 from '../image/icon2.png';


const Search = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [data, setData] = useState([]);
  const [card, setCard] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/movies');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    }
  };

  const handleSelect = (id) => {
    setCard(id);
  };

  useEffect(() => {
    if (card !== null) {
      navigate('/det', { state: card });
    }
  }, [card, navigate]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:3001/movies');
      setMovies(response.data);
      setError(null);
    } catch (error) {
      console.error('Problem in fetching data:', error.message);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const filteredMovies = movies.filter((movie) =>
    movie.movieName.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div className='container'>
        <div className='searchnavbar row m-0 p-0'>
          {/* <div className='col-lg-2'>
            <img src={img1} alt='logo' className='logo' />
          </div> */}
          
           <div className=' SEarchtitle col-lg-3 col-md-2 col-sm-2'>
           <NavLink className="webName" to='/home'> <h1>Book<span>my</span>show</h1></NavLink>
          </div>
          <div className='Searchinput___box col-lg-7'>
            <form style={{width:"100%"}} onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Search'
                value={inputValue}
                onChange={handleChange}
                className='SearchInputContainer'
              />
            </form>
          </div>
          {/* <div className='col-lg-3' style={{ display: 'flex', gap: '30px' }}>
            <button onClick={() => setButtonClicked(true)} style={{ width: '100px' }}>
              Place
            </button>
            <NavLink to='/'>Signup</NavLink>
            <button onClick={() => setMenuButton(!menuButton)} style={{ width: '27px' }}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div> */}
        </div>

        {menuButton && (
          <div className='sidescreen-div'>
            <button style={{ border: 'none' }} onClick={() => setMenuButton(false)}>
              <i className='fa-solid fa-x'></i>
            </button>
            <div className='sidescreen-divhead'>
              <h3>Hey!</h3>
            </div>
            <div className='sidescreen-divlogindiv'>
              <div className='sidescreen-divlogin'>
                <div className='giftdiv'>
                  <FontAwesomeIcon icon={faGift} size='xl' style={{ color: '#e12329' }} />
                </div>
                <div className='gifttext'>
                  <p>Unlock special offers & great benefits</p>
                </div>
                <div className='giftbutton'>
                  <Link to='/'>
                    <button className='insideGiftbutton'>Login / Register</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='unlockdiv'>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faBell} style={{ marginRight: '20px', marginLeft: '20px' }} />
              </div>
              <div className='unlockdivtext'>
                <h6>Notification</h6>
              </div>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faCaretDown} rotation={270} />
              </div>
            </div>
            <div className='lockdiv'>
              <div className='lockdivicon'>
                <FontAwesomeIcon icon={faTicket} />
              </div>
              <div className='lockdivtext'>
                <h6>Your order</h6>
                <p>View all your bookings and purchases</p>
              </div>
              <div className='lockdivicon'>
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className='lockdiv'>
              <div className='lockdivicon'>
                <FontAwesomeIcon icon={faDisplay} />
              </div>
              <div className='lockdivtext'>
                <h6>Stream Library</h6>
                <p>Rented & Purchased Movies</p>
              </div>
              <div className='lockdivicon'>
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className='unlockdiv'>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <div className='unlockdivtext'>
                <h6>Play Credit Card</h6>
                <p>View Your Play Credit Card Details</p>
              </div>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faCaretDown} rotation={270} />
              </div>
            </div>
            <div className='unlockdiv'>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <div className='unlockdivtext'>
                <h6>Help And Support</h6>
                <p>View commonly asked queries and chats</p>
              </div>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faCaretDown} rotation={270} />
              </div>
            </div>
            <div className='lockdiv'>
              <div className='lockdivicon'>
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div className='lockdivtext'>
                <h6>Account & Setting</h6>
                <p>Location, payment, permission & more</p>
              </div>
              <div className='lockdivicon'>
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className='unlockdiv'>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faGift} />
              </div>
              <div className='unlockdivtext'>
                <h6>Rewards</h6>
                <p>View your rewards & unlock new ones</p>
              </div>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faCaretDown} rotation={270} />
              </div>
            </div>
            <div className='unlockdiv'>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faTent} />
              </div>
              <div className='unlockdivtext'>
                <h6>BookASmile</h6>
              </div>
              <div className='unlockdivicon'>
                <FontAwesomeIcon icon={faCaretDown} rotation={270} />
              </div>
            </div>
          </div>
        )}

        {buttonClicked && (
          <div className='fullscreen-div'>
            <div className='screen-div'>
              <button onClick={() => setButtonClicked(false)} style={{ border: 'none', backgroundColor: 'aqua' }}>
                <i className='fa-solid fa-x'></i>
              </button>
              <div className='placebody'></div>
            </div>
          </div>
        )}
      </div>

      <div className='navvi container'>
        <div className='leftnavvi'>
         
    
        </div>
        <div className='rightnavvi'>
         
        </div>
      </div>

    

      <div className='recomendedmovies container'>
        <h2>Search movie</h2>
       
      </div>

      <div className='container'>
        <div className='row'>
          {loading ? (
            <p>Loading...</p>
          ) : filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} onClick={() => handleSelect(movie.id)} className='col-md-3 mb-3'>
                <div className='card'>
                  <img src={movie.image} alt={movie.movieName} className='card-img-top' style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                  <div className='card-body'>
                    <h5 className='card-title'>{movie.movieName}</h5>
                    <p>{movie.type.join('/')}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found matching the search criteria.</p>
          )}
        </div>
      </div>

      
    </>
  );
};

export default Search;