





// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Theatre = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { theater, time, id } = location.state || {};
//   const numSeats = 200;
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [submittedSeats, setSubmittedSeats] = useState([]);
//   const [schedule, setSchedule] = useState(null);
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     const fetchSchedule = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/schedules/${id}`);
//         setSchedule(response.data);
//         setSubmittedSeats(response.data.seats || []); 
//       } catch (error) {
//         console.error('Error fetching schedule:', error);
//       }
//     };

//     if (id) {
//       fetchSchedule();
//     }
//   }, [id]);

//   useEffect(() => {
//     const ticketPrice = 100; // Assuming each ticket costs Rs. 100
//     setPrice(selectedSeats.length * ticketPrice);
//   }, [selectedSeats]);

//   const handleSelect = (seatNumber) => {
//     setSelectedSeats((prevSelectedSeats) => {
//       if (prevSelectedSeats.includes(seatNumber)) {
//         return prevSelectedSeats.filter((seat) => seat !== seatNumber);
//       } else {
//         return [...prevSelectedSeats, seatNumber];
//       }
//     });
//   };

//   const isSeatSubmitted = (seatNumber) => {
//     return submittedSeats.includes(seatNumber);
//   };

//   const handleSubmit = async () => {
//     if (selectedSeats.length === 0) {
//       alert("Please select the seats before submitting.");
//       return;
//     }

//     if (!schedule) return;

//     try {
//       const updatedSeats = [...schedule.seats, ...selectedSeats];

//       await axios.put(`http://localhost:3001/schedules/${id}`, {
//         ...schedule,
//         seats: updatedSeats
//       });

//       setSubmittedSeats((prevSubmittedSeats) => [...prevSubmittedSeats, ...selectedSeats]);
//       setSelectedSeats([]);
//       navigate("/home");
//     } catch (error) {
//       console.error('Error updating seats:', error);
//     }
//   };

//   const seats = [];
//   for (let i = 1; i <= numSeats; i++) {
//     const isSelected = selectedSeats.includes(i);
//     const isAlreadySubmitted = isSeatSubmitted(i);

//     seats.push(
//       <div
//         key={i}
//         className={`seat ${isSelected ? 'selected' : ''} ${isAlreadySubmitted ? 'submitted' : ''}`}
//         onClick={() => !isAlreadySubmitted && handleSelect(i)}
//       >
//         {i}
//       </div>
//     );
//   }

//   return (
//     <div className="theatre">
//       {theater && (
//         <>
//           <h1>{theater}</h1>
//           <p>Showtime: {time}</p>
//           <div className="seats-container">
//             {seats}
//           </div>
//           <div>
//             <p>Selected Seats: {selectedSeats.join(', ')}</p>
//             <button className='theaterbutton' onClick={handleSubmit}>Pay Rs. {price}</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Theatre;





import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Theatre = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theater, time, id } = location.state || {};
  const numSeats = 200;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [submittedSeats, setSubmittedSeats] = useState([]);
  const [schedule, setSchedule] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/schedules/${id}`);
        setSchedule(response.data);
        setSubmittedSeats(response.data.seats || []); 
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    if (id) {
      fetchSchedule();
    }
  }, [id]);

  useEffect(() => {
    const ticketPrice = 100; // Assuming each ticket costs Rs. 100
    setPrice(selectedSeats.length * ticketPrice);
  }, [selectedSeats]);

  const handleSelect = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const isSeatSubmitted = (seatNumber) => {
    return submittedSeats.includes(seatNumber);
  };

  const handleSubmit = async () => {
    if (selectedSeats.length === 0) {
      alert("Please select the seats before submitting.");
      return;
    }

    if (!schedule) return;

    try {
      const updatedSeats = [...schedule.seats, ...selectedSeats];

      await axios.put(`http://localhost:3001/schedules/${id}`, {
        ...schedule,
        seats: updatedSeats
      });

      setSubmittedSeats((prevSubmittedSeats) => [...prevSubmittedSeats, ...selectedSeats]);
      setSelectedSeats([]);
      navigate("/pay",{state:{price}});
    } catch (error) {
      console.error('Error updating seats:', error);
    }
  };

  const seats = [];
  for (let i = 1; i <= numSeats; i++) {
    const isSelected = selectedSeats.includes(i);
    const isAlreadySubmitted = isSeatSubmitted(i);

    seats.push(
<>
    
      <div
        key={i}
        className={`seat ${isSelected ? 'selected' : ''} ${isAlreadySubmitted ? 'submitted' : ''}`}
        onClick={() => !isAlreadySubmitted && handleSelect(i)}
      >
        {i}
      </div>
    

      


</>
    );
  }

  return (
    <div className="theatre">
      {theater && (
        <>
          <h1>{theater}</h1>
          <p>Showtime: {time}</p>
          <div className="seats-container">
            {seats}
            <div style={{width:"70%",height:"100px ",display:"flex" ,flexDirection:"column",alignItems:"center",justifyContent:"end"}}>
              <div className='screen' ></div>
              <p>All eyes this way please!</p>
              </div> 
          </div>
         
          <div>
            <p>Selected Seats: {selectedSeats.join(', ')}</p>
            <button className={`${selectedSeats?"theaterbutton":""}`} onClick={handleSubmit}>Pay Rs. {price}</button>







          </div>
          <div style={{height:"50px"}}></div>
          <div className='fixer'>
            <div style={{width:"25px",height:"25px",backgroundColor:"red"}}></div>
            <div className='fixerdivee'>
Select</div>
            <div style={{width:"25px",height:"25px",  background:"radial-gradient(circle, rgb(231, 236, 205) 36%, gold 76%)"}}></div>
            <div className='fixerdivee'>Sold</div>
            <div style={{width:"25px",height:"25px",backgroundColor:" lightgray"}}></div>
            <div className='fixerdivee'>Available
            </div>
           
          </div>
        </>
      )}
    </div>
  );
};

export default Theatre;
