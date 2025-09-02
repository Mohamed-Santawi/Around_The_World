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
      ? `https://restcountries.com/v3.1/name/${country}?fields=name,capital,flags,population,region,subregion,currencies,languages,tld,nativeName`
      : "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,currencies,languages,tld,nativeName";
    setIsLoading(true);
    setIsError(false);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response data:", data);
        // Check if data is an array and not an error response
        if (Array.isArray(data)) {
          if (country) {
            setResult(data[0]);
          } else {
            setResult(data);
            setFilteredCountries(data);
            localStorage.setItem("countries", JSON.stringify(data));
          }
        } else {
          // If data is not an array, it might be an error response
          console.error("API returned non-array data:", data);
          setIsError("Invalid data format received from API");
          setResult([]);
          setFilteredCountries([]);
        }
      })
      .catch((error) => {
        console.error("API fetch error:", error);
        setIsError(error.message);
        setResult([]);
        setFilteredCountries([]);
      })
      .finally(() => setIsLoading(false));
  };
  const fetchDataFromLocoalStorage = () => {
    try {
      const data = JSON.parse(localStorage.getItem("countries"));
      if (data && Array.isArray(data)) {
        setResult(data);
        setFilteredCountries(data);
      } else {
        fetchDataFromAPI();
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      localStorage.removeItem("countries"); // Clear corrupted data
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
