import { useEffect, useState } from "react";

function useFetchData(country) {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocoalStorage();
    }
  }, []);
  const fetchDataFromAPI = async () => {
    const url = country
      ? `https://restcountries.com/v3.1/name/${country}`
      : "https://restcountries.com/v3.1/all";
    setIsLoading(true);
    setIsError(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch((error) => setIsError(error.message))
      .finally(() => setIsLoading(false));
  };
  const fetchDataFromLocoalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromAPI();
    }
  };
  return {
    result,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  };
}
export default useFetchData;
