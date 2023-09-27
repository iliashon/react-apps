import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/menu/Header";
import WeatherInfo from "./components/weather/WeatherInfo";
import { ClipLoader } from "react-spinners";
import API_KEY from "./api/ApiKey";

function App() {
    const [weatherObj, setWeatherObj] = useState(null);

    const [sity, setSity] = useState("london");

    function chooseSity(sity) {
        setSity(sity);
    }

    function pendingInfo() {
        setWeatherObj(null);
    }

    useEffect(() => {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${sity}`
        )
            .then((response) => response.json())
            .then((json) => {
                setWeatherObj(json);
            });
    }, [sity]);

    return (
        <div className="App">
            <Header chooseSity={chooseSity} pendingInfo={pendingInfo} />
            {!weatherObj ? (
                <ClipLoader color="#fff" size={100} className="loader" />
            ) : (
                <WeatherInfo weatherObj={weatherObj} />
            )}
        </div>
    );
}

export default App;
