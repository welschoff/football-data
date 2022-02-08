import styles from './Results.module.css';

type TeamProps = {
  team_name: string;
  logo: string;
};

export type ResultsProps = {
  fixture_id?: number;
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  goalsHomeTeam: string;
  goalsAwayTeam: string;
};

function Results({
  homeTeam,
  awayTeam,
  goalsHomeTeam,
  goalsAwayTeam,
}: ResultsProps) {
  return (
    <div className={styles.teams}>
      <section className={styles.home}>
        <div>
          <img src={homeTeam.logo} alt="" />
          <span>{homeTeam.team_name}</span>
        </div>
        <div className={styles.goals}>
          <span>{goalsHomeTeam}</span>
        </div>
      </section>
      <section className={styles.away}>
        <div>
          <img src={awayTeam.logo} alt="" />
          <span>{awayTeam.team_name}</span>
        </div>
        <div>
          <span>{goalsAwayTeam}</span>
        </div>
      </section>
    </div>
  );
}

export default Results;
