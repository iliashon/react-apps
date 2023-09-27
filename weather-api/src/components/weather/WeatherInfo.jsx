import styles from "./WeatherInfo.module.css";

export default function WeatherInfo({ weatherObj }) {
    return (
        <section className={styles.weatherInfo}>
            <div>
                <img
                    src={`${weatherObj.current.condition.icon}`}
                    alt={`${weatherObj.current.condition.text}`}
                    width={200}
                />
            </div>
            <div className={styles.dayInfo}>
                <h2>{`${weatherObj.current.temp_c}`}&#176;C</h2>
                <h3>Cloud: {`${weatherObj.current.cloud}%`}</h3>
                <h3>Humidity: {`${weatherObj.current.humidity}%`}</h3>
                <h3>Wind: {`${weatherObj.current.gust_kph} km/h`}</h3>
                <h3>{`${weatherObj.location.country}, ${weatherObj.location.name}`}</h3>
            </div>
        </section>
    );
}
