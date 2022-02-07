import styles from './Results.module.css';

type TeamProps = {
  team_name: string;
  logo: string;
};

type ScoreProps = {
  fulltime: string;
};

export type ResultsProps = {
  fixture_id?: number;
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  score: ScoreProps;
};

function Results({ homeTeam, awayTeam, score }: ResultsProps) {
  return (
    <div className={styles.match}>
      <div>
        <img src={homeTeam.logo} alt="" />
        <span className={styles.home}>{homeTeam.team_name}</span>
      </div>
      <span className={styles.score}>{score.fulltime}</span>
      <div>
        <img src={awayTeam.logo} alt="" />
        <span className={styles.away}>{awayTeam.team_name}</span>
      </div>
    </div>
  );
}

export default Results;
