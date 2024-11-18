
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { format, addDays } from 'date-fns';

// const List = () => {
//   const location = useLocation();
//   const id = location.state;

//   const [listdata, setListData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:3001/movies/${id}`);
//         setListData(response.data);
//       } catch (error) {
//         console.error('Error fetching details:', error);
//         setError('Error fetching data. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (id) {
//       fetchDetails();
//     }
//   }, [id]);

//   const today = new Date();
//   const days = [0, 1, 2, 3, 4, 5, 6];
//   const dates = days.map(day => addDays(today, day));

//   const handleDateClick = (date) => {
//     setSelectedDate(format(date, 'yyyy-MM-dd'));
//   };

//   const handleTimeClick = async (theater, time) => {
//     if (!selectedDate) {
//       alert('Please select a date first.');
//       return;
//     }

//     try {
//       const schedulesResponse = await axios.get('http://localhost:3001/schedules');
//       const existingSchedule = schedulesResponse.data.find(schedule =>
//         schedule.date === selectedDate &&
//         schedule.theater === theater &&
//         schedule.time === time
//       );

//       if (!existingSchedule) {
//         try {
//           // Schedule is created with no ID initially
//           const response = await axios.post('http://localhost:3001/schedules', {
//             date: selectedDate,
//             theater,
//             time,
//             seats: []
//           });
//           console.log('Schedule added:', response.data);

//           // Navigate to the Theatre component with the new schedule ID
//           navigate('/theatre', { state: { theater, time,  id: response.data.id } });
//         } catch (error) {
//           console.error('Error adding schedule:', error);
//         }
//       } else {
//         navigate('/theatre', { state: { theater, time,  id: existingSchedule.id,listdata } });
//       }
//     } catch (error) {
//       console.error('Error fetching schedules:', error);
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!listdata) return <div>No movie details found for ID: {id}</div>;

//   return (
//     <div className='container'>
//       <div className='listmoviename'>
//         <h1>{listdata.movieName}</h1>
//       </div>
//       <div className='listmoviedetails'>
//         <div className='listmoviedetailDiv'><p>{listdata.certification}</p></div>
//       </div>
//       <div className='listmoviedate'>
//         {dates.map((date, index) => (
//           <div
//             key={index}
//             className={`listdays ${selectedDate === format(date, 'yyyy-MM-dd') ? 'selected' : ''}`}
//             onClick={() => handleDateClick(date)}
//           >
//             <p className='p'>{format(date, 'EEE')}</p>
//             <p className='p'>{format(date, 'dd')}</p>
//           </div>
//         ))}
//       </div>

//       <div>
//         {listdata.theater && listdata.theater.length > 0 ? (
//           <div>
//             {listdata.theater.map((theater, index) => (
//               <div key={index} className='theaterlistbox'>
//                 <div className='lefttheaterlistbox'>
//                   <h2>{theater}</h2>
//                 </div>
//                 <div className='righttheaterlistbox'>
//                   {listdata.time && listdata.time.length > 0 ? (
//                     <div className='righttheaterlistbox1'>
//                       {listdata.time.map((time, idx) => (
//                         <div
//                           key={idx}
//                           className='timeboxes'
//                           onClick={() => handleTimeClick(theater, time)}
//                         >
//                           {time}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>No showtimes available.</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No theaters found for this movie.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { format, addDays } from 'date-fns';

// const List = () => {
//   const location = useLocation();
//   const id = location.state;

//   const [listdata, setListData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:3001/movies/${id}`);
//         setListData(response.data);
//       } catch (error) {
//         console.error('Error fetching details:', error);
//         setError('Error fetching data. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (id) {
//       fetchDetails();
//     }
//   }, [id]);

//   const today = new Date();
//   const days = [0, 1, 2, 3, 4, 5, 6];
//   const dates = days.map(day => addDays(today, day));

//   const handleDateClick = (date) => {
//     setSelectedDate(format(date, 'yyyy-MM-dd'));
//   };

//   const handleTimeClick = async (theater, time) => {
//     if (!selectedDate) {
//       alert('Please select a date first.');
//       return;
//     }

//     try {
//       const schedulesResponse = await axios.get('http://localhost:3001/schedules');
//       const existingSchedule = schedulesResponse.data.find(schedule =>
//         schedule.date === selectedDate &&
//         schedule.theater === theater &&
//         schedule.time === time  
        

//       );

//       if (!existingSchedule) {
//         try {
//           // Schedule is created with no ID initially
//           const response = await axios.post('http://localhost:3001/schedules', {
//             date: selectedDate,
//             theater,
//             time,
//             seats: [],
//             movieName: listdata.movieName // Include movieName here
//           });
//           console.log('Schedule added:', response.data);

//           // Navigate to the Theatre component with the new schedule ID
//           navigate('/theatre', { state: { theater, time, id: response.data.id, movieName: listdata.movieName } });
//         } catch (error) {
//           console.error('Error adding schedule:', error);
//         }
//       } else {
//         navigate('/theatre', { state: { theater, time, id: existingSchedule.id, movieName: listdata.movieName } });
//       }
//     } catch (error) {
//       console.error('Error fetching schedules:', error);
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!listdata) return <div>No movie details found for ID: {id}</div>;

//   return (
//     <div className='container'>
//       <div className='listmoviename'>
//         <h1>{listdata.movieName}</h1>
//       </div>
//       <div className='listmoviedetails'>
//         <div className='listmoviedetailDiv'><p>{listdata.certification}</p></div>
//       </div>
//       <div className='listmoviedate'>
//         {dates.map((date, index) => (
//           <div
//             key={index}
//             className={`listdays ${selectedDate === format(date, 'yyyy-MM-dd') ? 'selected' : ''}`}
//             onClick={() => handleDateClick(date)}
//           >
//             <p className='p'>{format(date, 'EEE')}</p>
//             <p className='p'>{format(date, 'dd')}</p>
//           </div>
//         ))}
//       </div>

//       <div>
//         {listdata.theater && listdata.theater.length > 0 ? (
//           <div>
//             {listdata.theater.map((theater, index) => (
//               <div key={index} className='theaterlistbox'>
//                 <div className='lefttheaterlistbox'>
//                   <h2>{theater}</h2>
//                 </div>
//                 <div className='righttheaterlistbox'>
//                   {listdata.time && listdata.time.length > 0 ? (
//                     <div className='righttheaterlistbox1'>
//                       {listdata.time.map((time, idx) => (
//                         <div
//                           key={idx}
//                           className='timeboxes'
//                           onClick={() => handleTimeClick(theater, time)}
//                         >
//                           {time}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>No showtimes available.</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No theaters found for this movie.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;


import img1 from '../image/icon2.png';
import image2 from '../image/img1.avif';
import image3 from '../image/img3.avif';
import image4 from '../image/img4.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faBell, faTicket, faLock, faDisplay, faCaretDown, faCreditCard, faMessage, faGear, faBars, faUser, faEnvelope,faA,faTent } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate , NavLink,Link} from 'react-router-dom';
import { format, addDays } from 'date-fns';

const List = () => {
  const location = useLocation();
  const id = location.state;

  const [listdata, setListData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [menuButton, setMenuButton] = useState(false);

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search")
   };
  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/movies/${id}`);
        setListData(response.data);
      } catch (error) {
        console.error('Error fetching details:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  const today = new Date();
  const days = [0, 1, 2, 3, 4, 5, 6];
  const dates = days.map(day => addDays(today, day));

  const handleDateClick = (date) => {
    setSelectedDate(format(date, 'yyyy-MM-dd'));
  };

  const handleTimeClick = async (theater, time) => {
    if (!selectedDate) {
      alert('Please select a date first.');
      return;
    }

    try {
      const schedulesResponse = await axios.get('http://localhost:3001/schedules');
      const existingSchedule = schedulesResponse.data.find(schedule =>
        schedule.date === selectedDate &&
        schedule.theater === theater &&
        schedule.time === time &&
        schedule.movieName === listdata.movieName // Add movie name check here
      );

      if (!existingSchedule) {
        try {
          const response = await axios.post('http://localhost:3001/schedules', {
            date: selectedDate,
            theater,
            time,
            seats: [],
            movieName: listdata.movieName // Include movieName here
          });
          console.log('Schedule added:', response.data);

          // Navigate to the Theatre component with the new schedule ID
          navigate('/theatre', { state: { theater, time, id: response.data.id, movieName: listdata.movieName } });
        } catch (error) {
          console.error('Error adding schedule:', error);
        }
      } else {
        navigate('/theatre', { state: { theater, time, id: existingSchedule.id, movieName: listdata.movieName } });
      }
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!listdata) return <div>No movie details found for ID: {id}</div>;

  return (
    
   <>


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
        <div style={{height:"20px",backgroundColor:"rgb(243, 239, 239)"}}></div>
   <div className='listContainer'>
      
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" ,gap:"10px"}}>

      <div className='listmoviename '>
        <h1>{listdata.movieName}</h1>
      </div>
      <div className='listmoviedetails'>
        <div className='listmoviedetailDiv'><p>{listdata.certification}</p></div>
      </div>
      <div className='listmoviedate'>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`listdays ${selectedDate === format(date, 'yyyy-MM-dd') ? 'selected' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            <p className='p'>{format(date, 'EEE')}</p>
            <p className='p'>{format(date, 'dd')}</p>
          </div>
        ))}
      </div>


      </div>

      <div>
        {listdata.theater && listdata.theater.length > 0 ? (
        <div className='list-outer'>
            <div className='list-inner'>
            {listdata.theater.map((theater, index) => (
              <>

<div key={index} className='theaterlistbox'>
                <div className='lefttheaterlistbox'>
                  <h2>{theater}</h2>
                </div>
                <div className='righttheaterlistbox'>
                  {listdata.time && listdata.time.length > 0 ? (
                    <div className='righttheaterlistbox1'>
                      {listdata.time.map((time, idx) => (
                        <div
                          key={idx}
                          className='timeboxes'
                          onClick={() => handleTimeClick(theater, time)}
                        >
                          {time}
                        </div>
                        
                        
                      ))}
                         
                    </div>
                    
                
                  ) : (
                    <p>No showtimes available.</p>
                  )}
              
                </div>
              </div>
           
              </>
             
            ))}
          </div>
        </div>
        ) : (
          <p>No theaters found for this movie.</p>
        )}
     
      </div>
    
    </div>

   </>












  );
};

export default List;
