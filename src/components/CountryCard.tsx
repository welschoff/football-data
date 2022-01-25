import styles from './CountryCard.module.css';

export type CountryCardProps = {
  name: string;
  flag: string;
  code?: string;
};

function CountryCard({ name, flag }: CountryCardProps) {
  return (
    <div>
      <div className={styles.country}>
        <img src={flag} alt="" />
        <span>{name}</span>
      </div>
    </div>
  );
}

export default CountryCard;
