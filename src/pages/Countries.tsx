import { useEffect, useState } from 'react';
import CountryCard, { CountryCardProps } from '../components/CountryCard';
import Search from '../components/Search';

function Countries() {
  const [countries, setCountries] = useState<CountryCardProps[] | null>([]);

  const getCountries = async () => {
    const response = await fetch(
      'https://api-football-v1.p.rapidapi.com/v3/countries',
      {
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '7f76996b93msh5a4e487e8dd7106p1eddf8jsne1ae9ca636fa',
        },
      }
    );
    const data = await response.json();
    console.log(data.response);
    setCountries(data.response);
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
            key={country.code}
            flag={country.flag}
            name={country.name}
          />
        ))}
      </div>{' '}
    </>
  );
}

export default Countries;
