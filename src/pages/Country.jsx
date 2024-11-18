import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchData";
import { ShowMessage } from "../components";

export function Country() {
  const { country } = useParams();
  const { result, isError, isLoading } = useFetchData(country);
  console.log(result);
  return (
    <>
      {isError && <ShowMessage message={"Something Went Wrong ....!"} />}
      {isLoading && <ShowMessage message={"Data Is Loading..."} />}
      {!isError && !isLoading && (
        <>
          <Link
            to={"/"}
            className="mb-16 inline-block rounded-md bg-gray-100 p-3 md:mb-20"
          >
            <svg
              width="100"
              height="80"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2005_992)">
                <rect x="14" y="8" width="42" height="40" rx="6" fill="white" />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
                fill="#111827"
              />
              <defs>
                <filter
                  id="filter0_d_2005_992"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_992"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_992"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
          <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
            <img
              src={result?.flags?.svg}
              alt={result?.flags?.alt}
              className="mb-4 h-40 w-full rounded-md"
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <h2 className="mb-4 ml-3 text-lg font-extrabold">
                {result?.name?.common}
              </h2>
              <p>
                <span className="font-semibold">Native Name: </span>
                <span className="font-light">
                  {" "}
                  {result?.name?.nativeName?.eng?.common}
                </span>
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                <span className="font-light">
                  {parseInt(result?.population).toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                <span className="font-light">{result?.region}</span>
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                <span className="font-light">
                  {result.subregion ? result?.subregion : result?.region}
                </span>
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                <span className="font-light">{result?.capital}</span>
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-2">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                <span className="font-light">{result?.tld?.join(", ")}</span>
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                <span className="font-light">
                  {result?.currencies &&
                    Object.keys(result.currencies)
                      .map((currency) => `${result.currencies[currency].name}`)
                      .join(", ")}
                </span>
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                <span className="font-light">
                  {result?.languages &&
                    Object.keys(result.languages)
                      .map((language) => `${language}`)
                      .join(", ")}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
