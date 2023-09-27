import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const ws = new WebSocket("wss://stream.binance.com:9443/ws");

export default function Bnb({ symbol }) {
    ws.onopen = function (ev) {
        ws.send(
            JSON.stringify({
                method: "SUBSCRIBE",
                params: [`bnbusdt@aggTrade`],
                id: 2,
            })
        );
    };

    ws.onclose = function (ev) {
        alert("Close conection");
    };

    const [coinObj, setCoinObj] = useState([]);

    const [bgColorPrice, setBgColorPrice] = useState();

    useEffect(() => {
        ws.addEventListener("message", (e) => {
            const coinInfoParse = JSON.parse(e.data);
            setBgColorPrice(coinInfoParse.p > coinObj.p ? "green" : "red");
            setCoinObj(coinInfoParse);
        });
    }, [coinObj]);

    return (
        <div className={`coin ${bgColorPrice}`}>
            <img
                width={100}
                src="https://cdn-icons-png.flaticon.com/512/6001/6001283.png"
                alt="bnb"
            />
            <h1>BNB</h1>
            <h2>
                {isNaN(Number(coinObj.p).toFixed(3)) ? (
                    <ClipLoader color="#fff" />
                ) : (
                    Number(coinObj.p).toFixed(1)
                )}
            </h2>
        </div>
    );
}
