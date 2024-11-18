import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import img1 from '../image/icon2.png';
import image2 from '../image/img1.avif';
import image3 from '../image/img3.avif';
import image4 from '../image/img4.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faBell, faTicket, faLock, faDisplay, faCaretDown, faCreditCard, faMessage, faGear, faBars, faUser, faEnvelope,faA,faTent } from '@fortawesome/free-solid-svg-icons';


const Movies = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // const [selectedGenres, setSelectedGenres] = useState('All');

  const [card,setCard]=useState(null)
  const navi = useNavigate()
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/movies');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }  
  };
  const handleSearch = () => {
   navi("/search")
  };
  const filterMoviesByLanguage = () => {
    if (selectedLanguage === 'All') {
      return data;
    } else {
      return data.filter(movie => movie.langauge.includes(selectedLanguage))
    }
  };
  const handleSelect = (id) => {
    setCard(id);
  };
  
  useEffect(() => {
    if (card !== null) {
      console.log(card); // This will log the updated value of `card`
      // Assuming `navi` is a function that handles navigation
      navi('/det', { state: card }); // Pass the updated `card` state to the navigation function
    }
  }, [card]); // useEffect will run whenever `card` changes
  useEffect(() => {
    fetchData();
  }, []);
  return (
    < >
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

      {/* <div className='navvi container'> */}
        
      {/* </div> */}

      <div className='carousel-container container'>
        <div id='carouselExampleDark' className='carousel carousel-dark slide' data-bs-ride='carousel'>
          <div className='carousel-indicators'>
            <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
            <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='1' aria-label='Slide 2'></button>
            <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='2' aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active' data-bs-interval='10000'>
              <img src={image3} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'></div>
            </div>
            <div className='carousel-item' data-bs-interval='2000'>
              <img src={image2} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'></div>
            </div>
            <div className='carousel-item'>
              <img src={image4} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'></div>
            </div>
          </div>
          <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>

      <div className='recomendedmovies container'>

      <h1>Language</h1>
      <select className='seleterDropdown' onChange={(e) => setSelectedLanguage(e.target.value)} >
           <option className='seleterDropdown__Value' value='All'>All Languages</option>
          <option className='seleterDropdown__Value' value='Hindi'>Hindi</option>
           <option className='seleterDropdown__Value' value='English'>English</option>
         <option className='seleterDropdown__Value' value='Telugu'>Telugu</option>
          <option className='seleterDropdown__Value' value='Tamil'>Tamil</option>
         <option  value='Malayalam'>Malayalam</option>
       </select>

       {/* <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('Tamil')}>Tamil</button>
            <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('English')}>English</button>
            <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('Malayalam')}>Malayalam</button>
            <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('Hindi')}>Hindi</button>
            <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('Kannada')}>Kannada</button>
            <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('Telugu')}>Telugu</button>
            <button style={{margin:"5px" ,paddingLeft:"5px",paddingRight:"5px"}} onClick={() => setSelectedLanguage('All')}>All</button> */} 

      </div>

      <div className='container 'style={{width:"100%",display:"flex",justifyContent:"center"}}>
       
        <div className='rightmoviebar  row'>
        {filterMoviesByLanguage().map((product, index) => {
            
              return (
                <div style={{marginBottom:"40px"}} onClick={() => handleSelect(product.id)} className='col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12 ' >
                  <div className='card'>
                    <img src={product.image} alt={product.name} className='card-img-top' style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                    <div className='card-body'>
                      <h5 className='card-title'>{product.movieName}</h5>
                      <p>{product.type.join('/')}</p>

                    </div>
                  </div>
                </div>

              );   
          })}
        </div>
      </div>
      {/* <div className='product container'>
  <div className='product row'>
    {data.map((product, index) => {
      
        return (
          <div key={product.id} onClick={() => handleSelect(product.id)} className='col-lg-3 col-md-6   col-sm-12'>
            <div className='product-card'>
              <img src={product.image} alt={product.name} className='product-img' style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
              <div className='product-card-body'>
                <h5 className='product-card-title'>{product.movieName}</h5>
                <p className='product-card-type'>{product.type.join('/')}</p>
              </div>
            </div>
          </div>
        );    
    })}
  </div>
</div> */}
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

export default Movies;






















