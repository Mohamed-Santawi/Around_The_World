/* eslint-disable react/prop-types */
export function SearchInput(props) {
  const { countriesList, filteredCountries } = props;
  const submitHandler = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value.trim();
    console.log("Search term:", searchTerm);
    console.log("Countries list:", countriesList);

    // Ensure countriesList is an array
    if (!Array.isArray(countriesList)) {
      console.error('countriesList is not an array:', countriesList);
      return;
    }

    const filteredList =
      !searchTerm || searchTerm === ""
        ? countriesList
        : countriesList.filter((country) => {
            console.log("Checking country:", country.name);
            return country.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });

    console.log("Filtered list:", filteredList);
    filteredCountries(filteredList);
  };
  return (
    <form className="relative flex-1" onSubmit={submitHandler}>
      <div className="absolute left-8 top-5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
              fill="#374151"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="h-12 w-full max-w-md rounded-full pl-20 shadow focus:outline-none dark:bg-gray-800 md:h-14"
      />
    </form>
  );
}
