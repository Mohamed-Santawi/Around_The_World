/* eslint-disable react/prop-types */
import Select from "react-select";

const options = [
  { value: "All region", label: "All region" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Antarctic", label: "Antarctic" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export function RegionMenu(props) {
  const { countriesList, filteredCountries } = props;
  const changeHandler = (e) => {
    const region = e.label;
    const filteredList =
      region === "All region"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    filteredCountries(filteredList);
  };
  return (
    <Select
      className="w-full md:w-64"
      defaultValue={options[0]}
      options={options}
      onChange={changeHandler}
      classNames={{
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-full pl-4 shadow pr-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500",
        menu: () =>
          "bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg mt-1 dark:text-gray-100",
        option: ({ isFocused, isSelected }) =>
          `cursor-pointer p-2 ${
            isSelected
              ? "bg-blue-500 text-white"
              : isFocused
                ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                : "hover:!text-gray-800 text-gray-900 dark:text-gray-200"
          }`,
        indicatorSeparator: () => "hidden",
        singleValue: () => "text-gray-900 dark:text-gray-200",
        placeholder: () => "text-gray-500 dark:text-gray-400",
        valueContainer: () => "p-1",
        input: () => "text-gray-900 dark:!text-gray-100",
      }}
    />
  );
}
