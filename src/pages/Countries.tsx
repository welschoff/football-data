import { useEffect, useState } from 'react';
import CountryCard, { CountryCardProps } from '../components/CountryCard';
import { FaSearch } from 'react-icons/fa';
import styles from './Countries.module.css';

function Countries() {
  const [countries, setCountries] = useState<CountryCardProps[]>([]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<CountryCardProps[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch('http://localhost:3001/api/countries');
      const data = await response.json();
      console.log(data);
      setCountries(data);
    };
    getCountries();
  }, []);

  useEffect(() => {
    setOutput([]);
    countries?.filter((value) => {
      if (value.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
        setOutput((output) => [...output, value]);
      }
    });
  }, [input]);

  return (
    <>
      <div className={styles.form}>
        <div>
          <FaSearch className={styles.icon} />
          <input
            type="search"
            placeholder="Search..."
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
      </div>

      <div>
        {output?.map((item: { name: string; flag: string }) => (
          <CountryCard key={item.name} flag={item.flag} name={item.name} />
        ))}
      </div>
    </>
  );
}

export default Countries;
