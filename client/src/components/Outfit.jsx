import React, { useState, useEffect } from 'react';

// const assignClass = () => {
//     if(apiData?.data?.weather[0]?.description
//       === "sunny"){
//         return 'sunny'
//     }
//   }

const Outfit = ({ apiData }) => {
  const [main, setMain] = useState(null);
  const [outfit, setOutfit] = useState({
    male:
      'Traverse Poncho, Mesh Sneakers, Waterproof Boonie Hat, T-shirt, Shorts.',
    female: 'Jumpsuit, Clogs, Rain Bonnet, Rain Poncho, Waterproof bag.'
  });

  const recomendation = (apiData) => {
    const rec = { male: '', female: '' };
    console.log(apiData.data.weather[0].main);
    switch (apiData.data.weather[0].main) {
      case 'Clouds':
        rec.male =
          '👨:Shoreline Jacket, Slim Fit Pants, Fit Henley, Waterproof Chukka.';
        rec.female =
          '👩:Hooded Rain Jacket, lightweight Pants, Wrap Top, Waterproof bag, Rain Boots.';
        break;

      // case "Drizzle":
      //  return <>
      //   <h3>👨Men</h3>
      //   <p>Rain Jacket, Active Pants, Watertight Cap, Short Sleve T-shirt, Waterproof Boots.</p>
      //   <h3>👩Women</h3>
      //   <p>Vinyl Smock, Short Sleeve Dress, Waterproof Hood, Waterproof Tote Bag, Rain Booties.</p>
      //   </>
      //   break;

      // case "Rain":
      //  return  <>
      //   <h3>👨Men</h3>
      //   <p>Traverse Poncho, Mesh Sneakers, Waterproof Boonie Hat, T-shirt, Shorts.</p>
      //   <h3>👩Women</h3>
      //   <p>Jumpsuit, Clogs, Rain Bonnet, Rain Poncho, Waterproof bag.</p>
      //  </>
      // break;
      // case "Snow":
      //  return  <>
      //   <h3>👨Men</h3>
      //   <p>Flannel Shirt Jacket, Snow Boots, Weather-ready Parka, Dark-Wash Jeans, Puffer Vest, Wool Beanie, Leather or wool Gloves, Wool Overcoat, Scarf.</p>
      //   <h3>👩Women</h3>
      //   <p>Winter Coat, Mittens, Snow Boots, Wool Beanie, Jeans, Thermal Tights, Scarf.</p>
      //   </>
      //   break;

      // case "Clear":
      //  return  <>
      //   <h3>👨Men</h3>
      //   <p>Shorts, T-shirt, Sneakers.</p>
      //   <h3>👩Women</h3>
      //   <p>Tank Dress, Sun Hat, Platform Wedge Sandals.</p>
      //   </>
      //   break;
      // case "Clouds":
      //  return  <>
      //   <h3>👨Men</h3>
      //   <p>Sweater, Long Sleeve Shirt, Jeans, Boots, Umbrella.</p>
      //   <h3>👩Women</h3>
      //   <p>Knit Cardigan, Button-down Collar Blouse, Skinny Jeans, Boots, Umbrella.</p>
      //   </>
      //   break;
      //  case "Mist":
      //  return  <>
      //     <h3>👨Men</h3>
      //     <p>Coat, Pants, Sneakers, Long Sleeve Shirt.</p>
      //     <h3> 👩Women</h3>
      //     <p>Bootcut pants, Sneakers, Sheer Top, Coat.</p>
      //   </>
      //  break;
      // case "Smoke":
      //   <p></p>
      // )
      // case "Haze":
      //   <p></p>
      // )
      // case "Dust":
      //   <p></p>
      // )
      // case "Fog":
      //   <p></p>
      // )
      // case "Sand":
      //   <p></p>
      // )
      // case "Ash":
      //   <p></p>
      // )
      // case "Squall":
      //   <p></p>
      // )
      // case "Tornado":
      //   <p></p>
      // )
    }
    return rec;
  };

  useEffect(() => {
    setOutfit(recomendation(apiData));
  }, []);

  return (
    <>
      <div>{outfit.female}</div>
      <div>{outfit.male}</div>
    </>
  );
};

export default Outfit;

// const Outfit = props => {
//
//   <div class="container">
//   <div class="Card">
//     <h1 id="title">Daily Suggestions.</h1>

//     {/* <h2 class="rain">Rain</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Traverse Poncho, Mesh Sneakers, Waterproof Boonie Hat, T-shirt, Shorts.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Jumpsuit, Clogs, Rain Bonnet, Rain Poncho, Waterproof bag.</p> */}

//     {/* <h2 class="showerRain">Shower Rain</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Rain Jacket, Active Pants, Watertight Cap, Short Sleve T-shirt, Waterproof Boots.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Vinyl Smock, Short Sleeve Dress, Waterproof Hood, Waterproof Tote Bag, Rain Booties.</p>
//      */}

//     {/* <h2 id="thunderstorm">Thunderstorm</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Shoreline Jacket, Slim Fit Pants, Fit Henley, Waterproof Chukka.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Hooded Rain Jacket, lightweight Pants, Wrap Top, Waterproof bag, Rain Boots.</p>
//  */}

//     {/* <h2 id="mist">Mist</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Coat, Pants, Sneakers, Long Sleeve Shirt.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Bootcut pants, Sneakers, Sheer Top, Coat.</p> */}

//     {/* <h2 id="snow">Snow</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Flannel Shirt Jacket, Snow Boots, Weather-ready Parka, Dark-Wash Jeans, Puffer Vest, Wool Beanie, Leather or wool Gloves, Wool Overcoat, Scarf.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Winter Coat, Mittens, Snow Boots, Wool Beanie, Jeans, Thermal Tights, Scarf.</p>
//      */}

//     <h2 id="brokenClouds">Broken Clouds</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Umbrella, Rain Jacket, Boonie Hat, Active Pants, Boots, Short Sleeves, Poncho</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Umbrella, Rain Jacket, Lightweight Pants, Booties, Short Sleve Jumpsuit  </p>

//     <h2 id="scatteredClouds">Scattered Clouds</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Shorts, T-shirt, Boots.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Shorts, booties, Tank Blouse.</p>

//     {/* <h2 id="fewClouds">Few Clouds</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Sweater, Long Sleeve Shirt, Jeans, Boots, Umbrella.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Knit Cardigan, Button-down Collar Blouse, Skinny Jeans, Boots, Umbrella.</p> */}

//     {/* <h2 id="clearSky">Clear Sky</h2>
//       <h3 id="Men">👨Men</h3>
//         <p id="fit">Shorts, T-shirt, Sneakers.</p>
//       <h3 id="women"> 👩Women</h3>
//         <p id="fit">Tank Dress, Sun Hat, Platform Wedge Sandals.</p> */}
//   </div>
//   </div>

//   );
// }
