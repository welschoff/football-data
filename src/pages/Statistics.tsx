import { useEffect, useState } from 'react';
import Results, { ResultsProps } from '../components/Results';

function Statistics() {
  const [matchdays, setMatchdays] = useState<string[] | null>(null);
  const [results, setResults] = useState<ResultsProps[] | null>(null);

  const getMatchdays = async () => {
    const response = await fetch('http://localhost:3001/api/rounds/2');
    const data = await response.json();
    console.log(data);
    setMatchdays(data);
  };

  const getResults = async () => {
    const response = await fetch(
      'http://localhost:3001/api/rounds/2/Regular_Season_-_1'
    );
    const data = await response.json();
    console.log(data);
    setResults(data);
  };

  useEffect(() => {
    getMatchdays();
    getResults();
  }, []);

  return (
    <div>
      <select>
        {matchdays?.map((matchday) => (
          <option key={matchday}>{matchday}</option>
        ))}
      </select>
      <div>
        {results?.map((result) => (
          <Results
            key={result.fixture_id}
            homeTeam={result.homeTeam}
            score={result.score}
            awayTeam={result.awayTeam}
          />
        ))}
      </div>
    </div>
  );
}

export default Statistics;
