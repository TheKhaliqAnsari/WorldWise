import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from './Message'
import { useCitites } from "../contexts/CitiesContext";

function CityList() {
  
  const {cities, isLoading} = useCitites();
  if (isLoading) return <Spinner />;
  if(!cities.length) return <Message message='Add Your first city by clicking on Map'/>
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
