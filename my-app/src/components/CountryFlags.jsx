import React from 'react';
import '../App.css';

const CountryFlags = () => {
  const countries = [
    { name: 'USA', flag: '/flags/us.png' },
    { name: 'Canada', flag: '/flags/ca.png' },
    { name: 'UK', flag: '/flags/gb.png' },
    { name: 'France', flag: '/flags/fr.png' },
    { name: 'Germany', flag: '/flags/de.png' },
    { name: 'India', flag: '/flags/in.png' },
    { name: 'China', flag: '/flags/cn.png' },
    { name: 'Japan', flag: '/flags/jp.png' },
    { name: 'Australia', flag: '/flags/au.png' },
    { name: 'Brazil', flag: '/flags/br.png' }
  ];

  return (
    <div className="country-flags">
      {countries.map((country, index) => (
        <div key={index} className="flag-item">
          <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryFlags;
