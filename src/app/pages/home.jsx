import { useGetCitiesQuery } from "app/services/modules/misc";

function Page() {
  const { data: cities, isLoading } = useGetCitiesQuery();
  return (
    <div>
      <p>Hello, Welcome to Alvi Beauty Home Page </p>
      {isLoading && <p>Loading...</p>}
      {cities && cities.results.map((city) => <p key={city.id}>{city.name}</p>)}
    </div>
  );
}

export default Page;
