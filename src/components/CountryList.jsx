import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCitites } from "../contexts/CitiesContext";

function CountriesList() {

  const {cities, isLoading} = useCitites();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add Your first city by clicking on Map" />;

  // console.log(cities)

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((ele) => ele.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country,idx) => {
        return <CountryItem country={country} key={idx} />;
      })}
    </ul>
  );
}

export default CountriesList;
