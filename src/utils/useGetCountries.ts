function useGetCountries() {
  const GetCountries = async function () {
    await fetch('https://api-football-v1.p.rapidapi.com/v3/countries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '7f76996b93msh5a4e487e8dd7106p1eddf8jsne1ae9ca636fa',
      },
      body: JSON.stringify(GetCountries),
    });
    console.log(GetCountries);
  };

  return GetCountries;
}

export default useGetCountries;
