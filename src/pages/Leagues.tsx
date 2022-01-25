import { useEffect, useState } from 'react';
import LeagueCard, { LeagueCardProps } from '../components/LeagueCard';

function Leagues() {
  const [leagues, setLeagues] = useState<LeagueCardProps[] | null>([]);

  const getLeagues = async () => {
    const response = await fetch('http://localhost:3001/api/leagues');
    const data = await response.json();
    console.log(data);
    setLeagues(data);
  };

  useEffect(() => {
    getLeagues();
  }, []);

  return (
    <>
      <div>
        {leagues?.map((league) => (
          <LeagueCard key={league.league.id} name={league.league.name} />
        ))}
      </div>
    </>
  );
}

export default Leagues;
