import styles from './LeagueCard.module.css';

export type LeagueCardProps = {
  country?: string;
  name: string;
  logo: string;
};

function LeagueCard({ name, logo }: LeagueCardProps) {
  return (
    <div>
      <div className={styles.league}>
        <img src={logo} alt="" />
        <span>{name}</span>
      </div>
    </div>
  );
}

export default LeagueCard;
