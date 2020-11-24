import React from 'react';
import Card from 'react-bootstrap/Card';

function WeatherCard({ apiData }) {
  // const [feels_like, setFeelsLike] = useState('');
  // const [mainTemp, setMainTemp] = useState('');
  // const [description, setDescription] = useState('');

  // const [iconID, setIconID] = useState('');

  //   const assignClass = () => {
  //     if(apiData...description === "sunny"){
  //         return 'sunny'
  //     }
  //   }

  return (
    <Card>
      <Card.Body>
        <Card.Title className="weather_text">{apiData?.data?.name}</Card.Title>
        <Card.Text className="weather_text">
          <p>Main Temperature : {apiData?.data?.main?.temp} ℉</p>
          <p>Feels like: {apiData?.data?.main?.feels_like} ℉</p>
          <p>Description : {apiData?.data?.weather[0]?.description} </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default WeatherCard;
