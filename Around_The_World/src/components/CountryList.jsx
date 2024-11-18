/* eslint-disable react/prop-types */
import { CountryCard } from "./CountryCard";
import { EmptyResult } from "./EmptyResult";

export function CountryList(props) {
  const { data } = props;
  return (
    <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data.length && data ? (
        data.map((country) => (
          <CountryCard
            key={country.name?.official}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <EmptyResult />
      )}
    </div>
  );
}
