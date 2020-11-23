import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function WeatherCard({ apiData }) {
  const [feels_like, setFeelsLike] = useState('');
  const [mainTemp, setMainTemp] = useState('');
  const [description, setDescription] = useState('');
  const [main, setMain] = useState('');
  const [iconID, setIconID] = useState('');

  return (
    <div>
      {apiData?.data?.main?.feels_like}
      {/* <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h1>Feels like: {feels_like} Degrees Celsius</h1>
      {/* <h1>Weather Parameter: {main}</h1> */}
      {/* <h1>Description : {description}</h1> */}
      {/* <img src={'http://openweathermap.org/img/wn/' + iconID + '@2x.png'} /> */}{' '}
    </div>
  );
}
export default WeatherCard;

// import React from 'react';
// import { Card } from 'react-bootstrap';

// const WeatherCard = ({}) => {
//   return (
//     <Card>
//       <Card.Body>
//           <Card.Title>
//             {.name}
//           </Card.Title>
//           <Card.Text>
//               <img src={'http://openweathermap.org/img/wn/' + iconID + '@2x.png'} />
//               <p>Main Temperature : {.mainTemp} Degrees Celsius</p>
//               <p>Feels like: {feels_like} Degrees Celsius</p>
//               <p>Description : {description}</p>
//           </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default WeatherCard
