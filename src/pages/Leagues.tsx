import { useEffect, useState } from 'react';
import LeagueCard, { LeagueCardProps } from '../components/LeagueCard';
import { useParams } from 'react-router-dom';
import styles from './Leagues.module.css';

function Leagues() {
  const { country } = useParams();
  const [leagues, setLeagues] = useState<LeagueCardProps[]>([]);

  useEffect(() => {
    const getLeagues = async () => {
      const response = await fetch(
        `http://localhost:3001/api/leagues/${country}`
      );
      const data = await response.json();
      const sortArray = await data.sort(function (
        a: { name: string },
        b: { name: string }
      ) {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
      });
      console.log(data);
      setLeagues(sortArray);
    };
    getLeagues();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Wettbewerbe</h2>
      {leagues?.map((league) => (
        <LeagueCard
          key={league.league_id}
          name={league.name}
          logo={league.logo}
        />
      ))}
    </div>
  );
}

export default Leagues;
