export type LeagueCardProps = {
  name: string;
  code?: string;
  id?: number;
  country?: any;
  league?: any;
};

function CountryCard({ name }: LeagueCardProps) {
  return (
    <div>
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default CountryCard;
