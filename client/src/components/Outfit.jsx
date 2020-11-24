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
    male: '👨:',
    female: '👩:'
  });

  const recomendation = (apiData) => {
    let rec = { male: '', female: '' };
    console.log(apiData.data.weather[0].main);
    switch (apiData.data.weather[0].main) {
      case 'Clouds':
        rec.male =
          '👨: Shoreline Jacket, Slim Fit Pants, Fit Henley, Waterproof Chukka.';
        rec.female =
          '👩: Lightweight Pants, Wrap Top, Waterproof bag, Rain Boots.';
        break;

      case 'Drizzle':
        rec.male =
          '👨: Rain Jacket, Active Pants, Watertight Cap, Short Sleve T-shirt, Waterproof Boots.';
        rec.female =
          '👩: Vinyl Smock, Short Sleeve Dress, Waterproof Hood, Waterproof Tote Bag, Rain Booties.';
        break;

      case 'Rain':
        rec.male =
          '👨: Traverse Poncho, Mesh Sneakers, Waterproof Boonie Hat, T-shirt, Shorts.';
        rec.female =
          '👩: Jumpsuit, Clogs, Rain Bonnet, Rain Poncho, Waterproof bag.';
        break;

      case 'Snow':
        rec.male =
          '👨: Flannel Shirt Jacket, Snow Boots, Weather-ready Parka, Dark-Wash Jeans, Puffer Vest, Wool Beanie, Leather or wool Gloves, Wool Overcoat, Scarf.';
        rec.female =
          '👩: Winter Coat, Mittens, Snow Boots, Wool Beanie, Jeans, Thermal Tights, Scarf.';
        break;

      case 'Clear':
        rec.male = '👨: Shorts, T-shirt, Sneakers.';
        rec.female = '👩: Tank Dress, Sun Hat, Platform Wedge Sandals. ';
        break;

      case 'Clouds':
        rec.male = '👨: Sweater, Long Sleeve Shirt, Jeans, Boots, Umbrella.';
        rec.female =
          '👩: Knit Cardigan, Button-down Collar Blouse, Skinny Jeans, Boots, Umbrella. ';
        break;

      case 'Mist':
        rec.male = '👨: Coat, Pants, Sneakers, Long Sleeve Shirt. ';
        rec.female = '👩: Bootcut pants, Sneakers, Sheer Top, Coat.';
        break;

      // case "Smoke":

      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Haze":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Dust":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Fog":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Sand":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Ash":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Squall":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;

      // case "Tornado":
      // rec.male = "👨: "
      // rec.female ="👩: "
      // break;
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
