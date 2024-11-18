








import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faBell, faTicket, faLock, faDisplay, faCaretDown, faCreditCard, faMessage, faGear, faBars, faUser, faEnvelope,faA,faTent } from '@fortawesome/free-solid-svg-icons';
import img1 from '../image/icon2.png';



const Details = () => {
  const location = useLocation();

  const id = location.state; // Assuming you pass id as state from the previous component
  const [buttonClicked, setButtonClicked] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null); // State to store movie details
  const [isLoading, setIsLoading] = useState(true); // State to track loading state
  const [theatrelist,settheatrelist]=useState(null)

  const navigate = useNavigate()
  const handleClick=(ids)=>{
    settheatrelist(ids)
  }
  useEffect(()=>{
    if (theatrelist !== null) {
      console.log(theatrelist); 
      navigate('/list', { state: theatrelist }); 
    }

  },[theatrelist])

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true); // Set loading state to true before fetching data
      try {
        const response = await axios.get(`http://localhost:3001/movies/${id}`);
        setMovieDetails(response.data); // Set fetched data to state
        console.log(response.data,)
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error('Error fetching details:', error);
        setIsLoading(false); // Set loading state to false on error
      }
    };

    fetchDetails(); // Call fetchDetails function when component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Dependency array ensures useEffect runs when id changes

  if (isLoading) {
    return <div>Loading...</div>; // Render loading state while data is being fetched
  }

  if (!movieDetails) {
    return <div>No movie details found for ID: {id}</div>; // Render if movieDetails is null (e.g., if id is invalid)
  }


  const handleSearch = () => {
    navigate("/search");
  };
  return (
 <>

<div className='container'>
     

<div className='navbar row m-0 p-0'>
          <div className='title col-lg-3 col-md-2 col-sm-2'>
          <NavLink className="webName" to='/home'> <h1>Book<span>my</span>show</h1></NavLink>
          </div>
          <div className='search__icon'><i class="fa-solid fa-magnifying-glass"onClick={handleSearch}></i></div>
          <div className="search__box">
            <input type='search' placeholder='Search for movies' className='input' onClick={handleSearch} />

          </div>
          <div className='location__menu' >
            {/* <button className='location__menu__placeBox' onClick={() => setButtonClicked(true)} style={{ width: "100px" }}>Place</button> */}
            <NavLink className="location__menu__navlink" to="/">Signup</NavLink>
            <button className='location__menu__menubox' onClick={() => setMenuButton(!menuButton)} >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {menuButton ? (
        <div className='sidescreen-div open' id='slide'>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
            <button className='spanBoxCloseButton' onClick={() => setMenuButton(false)}>
              <i className='fa-solid fa-x'></i>
            </button>
          </div>
          <div className='sidescreen-divhead'>
            <h3 style={{ marginLeft: '5px' }}>Hey!</h3>
          </div>
          <div className='sidescreen-divlogindiv'>
            <div className='sidescreen-divlogin'>
              <div className='giftdiv'>
                <FontAwesomeIcon icon={faGift} size='xl' style={{ color: "#e12329" }} />
              </div>
              <div className='gifttext'>
                <p>Unlock special offers & great benefits</p>
              </div>
              <div className='giftbutton'>
                <Link to="/">
                  <button className='insideGiftbutton'>Login / Register</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='unlockdiv'>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faBell} style={{ marginRight: "20px", marginLeft: "20px" }} /></div>
            <div className='unlockdivtext'><h6>Notification</h6></div>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faCaretDown} rotation={270} /></div>
          </div>
          <div className='lockdiv'>
            <div className='lockdivicon'><FontAwesomeIcon icon={faTicket} /></div>
            <div className='lockdivtext'>
              <h6 style={{ padding: '0', margin: "0" }}>Your order</h6>
              <p style={{ padding: '0', margin: "0" }}>View all your bookings and purchases</p>
            </div>
            <div className='lockdivicon'><FontAwesomeIcon icon={faLock} /></div>
          </div>
          <div className='lockdiv'>
            <div className='lockdivicon'><FontAwesomeIcon icon={faDisplay} /></div>
            <div className='lockdivtext'>
              <h6 style={{ padding: '0', margin: "0" }}>Stream Library</h6>
              <p style={{ padding: '0', margin: "0" }}>Rented & Purchased Movies</p>
            </div>
            <div className='lockdivicon'><FontAwesomeIcon icon={faLock} /></div>
          </div>
          <div className='unlockdiv'>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faCreditCard} /> </div>
            <div className='unlockdivtext'>
              <h6 style={{ padding: '0', margin: "0" }}>Play Credit Card</h6>
              <p style={{ padding: '0', margin: "0" }}>View Your Play Credit Card Details</p>
            </div>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faCaretDown} rotation={270} /></div>
          </div>
          <div className='unlockdiv'>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faMessage} /> </div>
            <div className='unlockdivtext'>
              <h6 style={{ padding: '0', margin: "0" }}>Help And Support</h6>
              <p style={{ padding: '0', margin: "0" }}>View commonly asked queries and chats</p>
            </div>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faCaretDown} rotation={270} /></div>
          </div>
          <div className='lockdiv'>
            <div className='lockdivicon'><FontAwesomeIcon icon={faGear} /></div>
            <div className='lockdivtext'>
              <h6 style={{ padding: '0', margin: "0" }}>Account & Setting</h6>
              <p style={{ padding: '0', margin: "0" }}>Location, payment, permission & more</p>
            </div>
            <div className='lockdivicon'><FontAwesomeIcon icon={faLock} /></div>
          </div>
          <div className='unlockdiv'>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faGift} /> </div>
            <div className='unlockdivtext'>
              <h6 style={{ padding: '0', margin: "0" }}>Rewards</h6>
              <p style={{ padding: '0', margin: "0" }}>View your rewards & unlock new ones</p>
            </div>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faCaretDown} rotation={270} /></div>
          </div>
          <div className='unlockdiv'>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faA} /> </div>
            <div className='unlockdivtext'><h6>BookASmile</h6></div>
            <div className='unlockdivicon'><FontAwesomeIcon icon={faCaretDown} rotation={270} /></div>
          </div>
        </div>
      ) : (
        <div className='sidescreen-div closed'></div>
      )}

{buttonClicked && (
          <div className='fullscreen-div'>
            <div className='screen-div'>
              <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                <button onClick={() => setButtonClicked(false)}  className='spanBoxCloseButton'>
                  <i className='fa-solid fa-x'></i>
                </button>
              </div>
              <div className='placebody'></div>
            </div>
          </div>
          
        )}
      </div>




<div > <div className='maindis row' >
    <div className='maindisleft'><img className='maindisimg' src={movieDetails.image} alt="" /></div>
    <div className='maindisright'>
     <div className='maindisrightbox'>
      <div className='rightheading'><h1>{movieDetails.movieName}</h1></div>
      <div className='rightrating'><h3> {movieDetails.rating}  {movieDetails.vote}</h3></div>
      <div className='rightlangauge'><h5>{movieDetails.langauge.join(' , ')} </h5></div>
      <div className='righttype'><p>{movieDetails.type.join(',')} . {movieDetails.certification} . {movieDetails.releseDate} </p></div>
      <div className='rightbookbutton'><button className='bookbutton' onClick={()=>handleClick(movieDetails.id)}>book tickets</button></div>
     </div>
    </div>
 
 </div></div>

<div style={{width:"100%",height:"100px"}}></div>
<div className='mainfooter  container'>
        <div className='footerContainer '>
          <div className='footerContainerleft '>
            <div className='tentlogofooter'><FontAwesomeIcon icon={faTent} size='xl' /></div>
            <div>
              <h4>List your show</h4>
              <h6>Got a show, event, activity or a great experience? Partner with us & get listed on Book my show</h6>
            </div>
          </div>
          <div className='footerContainerright '>
            <button className='footerContainerrightbutton '>Contact Today !</button>
          </div>
        </div>
      </div>

      <div className='footerlogobox'>
        <div className='footerlogobox1'>
          <div className='hovericon1'>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "50px" }} size="2xl" />
            <p style={{ margin: "0", padding: "0px" }}>24/7 Customer support</p>
          </div>
        </div>
        <div className='footerlogobox2'>
          <div className='hovericon2'>
            <FontAwesomeIcon icon={faTicket} style={{ fontSize: "50px" }} size="2xl" />
            <p style={{ margin: "0", padding: "0px" }}>Resend Booking confirmation</p>
          </div>
        </div>
        <div className='footerlogobox3'>
          <div className='hovericon3'>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "50px" }} size="2xl" />
            <p style={{ margin: "0", padding: "0px" }}>24/7 Customer support</p>
          </div>
        </div>
      </div>

      <div className='footertextcontant'>
        <div className='footertextcontant1'>
          <h5>MOVIES NOW SHOWING IN CHENNAI</h5>
          <p>Indian 2 | Kalki 2898 AD | Teenz | Sarfira | Maharaja | Deadpool & Wolverine | Despicable Me 4 | Inside Out 2 | Longlegs | Kill</p>
          <h5>UPCOMING MOVIES IN CHENNAI</h5>
          <p>Twisters | Surjo Hiranya (Kannada) | The Heist | Aadesh | Pekamedalu | Vishesham | Not Out (2024) | Bad Newz | Kadaloora Kanmani</p>
          <h5>MOVIES BY GENRE</h5>
          <p>Drama Movies Action Movies | Thriller Movies | Comedy Movies | Adventure Movies | Horror Movies | Animation Movies | Sports Movies | Biography Movies | Romantic Movies</p>
          <h5>MOVIES BY LANGUAGE</h5>
          <p>Movies in English | Movies in Hindi | Movies in Tamil | Movies in Telugu | Movies in Nepali | Movies in Portuguese | Movies in English 70 | Movies in Sindhi </p>
          <h5>SPORTS EVENTS IN CHENNAI</h5>
          <p>Running | Chess | Archery | Athletics | Badminton | Basketball | Baseball | Boat Race | Bowling | Boxing</p>
        </div>
        <hr style={{ color: "white" }} />
        {/* <div>
        
        </div> */}
      </div>
 </>
  );
};

export default Details;
