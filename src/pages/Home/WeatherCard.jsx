import { Droplets, Thermometer, Wind } from "lucide-react";
import { Text, Image } from "../../components/ui";
import styles from "./styles/WeatherCard.module.css";
import Divider from "../../components/ui/Divider";

export default function WeatherCard({ weather }) {
  console.log(weather);
  const timeArr = weather.location.localtime.split(" ");
  console.log(timeArr);

  return (
    <div className={styles.container}>
      <div className={styles.now}>
        <Text step={7} weight="500">
          {timeArr[0]}
        </Text>
        <Text step={7} weight="500">
          {timeArr[1]}
        </Text>
      </div>
      <div className={styles.weather}>
        <div className={styles.state}>
          <div className={styles.stateImage}>
            <Image src={weather.current.condition.icon} alt="" />
          </div>
          <Text step={6}>{weather.current.condition.text}</Text>
        </div>
        <Divider />
        <div className={styles.temperature}>
          <Text step={9} weight="500">
            {weather.current.temp_c}°C
          </Text>
          <div className={styles.pressure}>
            <Thermometer size={32} />
            <div className="">
              <Text>{weather.current.pressure_mb} mbar</Text>
              <Text>Pressure</Text>
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.air}>
          <div className={styles.wind}>
            <Wind size={32} />
            <div className="">
              <Text>{weather.current.wind_kph} km/h</Text>
              <Text>Wind</Text>
            </div>
          </div>
          <div className={styles.humidity}>
            <Droplets size={32} />
            <div className="">
              <Text>{weather.current.humidity}%</Text>
              <Text>Humidity</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
