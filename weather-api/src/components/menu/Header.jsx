import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import API_KEY from "../../api/ApiKey";

export default function Header({ chooseSity, pendingInfo }) {
    const [chooseInput, setChooseInput] = useState("");

    const [autoSelectionList, setAutoSeletionList] = useState([]);

    const [isOpenSetting, setIsOpenSetting] = useState(false);

    function controllChooseInput(ev) {
        setChooseInput(ev.target.value);
    }

    useEffect(() => {
        if (chooseInput.length !== 0) {
            fetch(
                `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${chooseInput}`
            )
                .then((response) => response.json())
                .then((json) => {
                    setAutoSeletionList(json);
                });
        }
    }, [chooseInput]);

    return (
        <header className={styles.header}>
            <h1>Weather</h1>
            <div className={styles.setting}>
                <img
                    onClick={() => {
                        setIsOpenSetting(!isOpenSetting);
                    }}
                    src="https://img.icons8.com/ios/50/ffffff/settings--v1.png"
                    alt="setting"
                />
                <div
                    className={
                        isOpenSetting ? styles.choose : styles.chooseClose
                    }
                >
                    <h2>Choose your city</h2>
                    <input
                        className={styles.inputSity}
                        type="text"
                        id="sity"
                        onChange={controllChooseInput}
                    />
                    <ul className={styles.autoSelectionList}>
                        {autoSelectionList.map((el, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        pendingInfo();
                                        chooseSity(`id:${el.id}`);
                                    }}
                                >
                                    {el.name}, {el.country}
                                </button>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}
