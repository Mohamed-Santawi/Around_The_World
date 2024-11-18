import {
  CountryList,
  RegionMenu,
  SearchInput,
  ShowMessage,
} from "../components";
import useFetchData from "../useFetchData";

export function Home() {
  const {
    result,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  } = useFetchData();
  return (
    <>
      {isError && <ShowMessage message={"Something Went Wrong ....!"} />}
      {isLoading && <ShowMessage message={"Data Is Loading..."} />}
      {!isError && !isLoading && (
        <>
          <div className="flex w-full flex-col items-center justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filteredCountries={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filteredCountries={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
}
