import React, { useState, useEffect } from 'react';

const Outfit = ({ apiData }) => {
  const [outfit, setOutfit] = useState({
    male: '👨: PJ Day! PS4 in mind?',
    female:
      '👩: Better stay in Netflix chickflix is on! Nighties and messy bun it is!'
  });

  const recomendation = (apiData) => {
    let rec = { male: '', female: '' };
    console.log(apiData.data.weather[0].main);
    switch (apiData.data.weather[0].main) {
      case 'Thunderstorm':
        rec.male = '👨: Shorts';
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
      case 'Smoke':
        rec.male =
          '👨: Air Filtering Mask, Light long sleve shirt, long pants, gloves';
        rec.female =
          '👩: Air filtering mask, Boots, Light long sleeve shirt, Long pants, gloves';
        break;
      case 'Haze':
        rec.male = '👨: Jeans and a t-shirt';
        rec.female = '👩: Jean dress, Trendy long sleeve shirt, Stylish boots';
        break;
      case 'Dust':
        rec.male =
          "👨: Wear a facemask, you don't want to breathe in the air today";
        rec.female =
          '👩: Facemask recommended, Full covering dress with long stockings and Boots to match.';
        break;
      case 'Fog':
        rec.male = '👨: A light jacket or maybe a hoodie ';
        rec.female =
          '👩: Anti-Freeze hair style, hoodie, long pants, Booties, Light long sleeve shirt.';
        break;
      case 'Sand':
        rec.male = '👨: A suit of armor, protect yourself! ';
        rec.female = '👩: A suit of armor, protect yourself!';
        break;
      case 'Ash':
        rec.male = '👨: Bring an umbrella and a face mask';
        rec.female =
          '👩: Cover up your face and wear some long sleeves and jeans';
        break;
      case 'Squall':
        rec.male = "👨: Wrap up it's going to get windy!";
        rec.female = '👩: A heavy jacket would be best';
        break;
      case 'Tornado':
        rec.male = '👨: Heavy windbreaker... who are we kidding get out!';
        rec.female = '👩: Who cares get out!';
        break;
    }
    return rec;
  };

  useEffect(() => {
    setOutfit(recomendation(apiData));
  }, [apiData]);

  return (
    <>
      <div className="recs">
        <p id="fit">{outfit.female}</p>
        <p id="fit">{outfit.male}</p>
      </div>
    </>
  );
};

export default Outfit;
