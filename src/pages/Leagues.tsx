import { useEffect, useState } from 'react';
import LeagueCard, { LeagueCardProps } from '../components/LeagueCard';
import { useParams } from 'react-router-dom';

function Leagues() {
  const { country } = useParams();
  const [leagues, setLeagues] = useState<LeagueCardProps[]>([]);

  const getLeagues = async () => {
    const response = await fetch(
      `http://localhost:3001/api/leagues/${country}`
    );
    const data = await response.json();
    console.log(response.url);
    console.log(data);
    setLeagues(data);
  };

  useEffect(() => {
    getLeagues();
  }, []);

  return (
    <div>
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
