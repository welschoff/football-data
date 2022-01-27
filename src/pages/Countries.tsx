import { useEffect, useState } from 'react';
import CountryCard, { CountryCardProps } from '../components/CountryCard';
import Search from '../components/Search';

function Countries() {
  const [countries, setCountries] = useState<CountryCardProps[] | null>([]);

  const getCountries = async () => {
    const response = await fetch('http://localhost:3001/api/countries');
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <Search />
      <div>
        {countries?.map((country) => (
          <CountryCard
            key={country.name}
            flag={country.flag}
            name={country.name}
          />
        ))}
      </div>{' '}
    </>
  );
}

export default Countries;
