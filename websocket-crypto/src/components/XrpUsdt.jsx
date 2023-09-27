import { useEffect, useState } from "react";

const ws = new WebSocket("wss://stream.binance.com:9443/ws");

export default function XrpUsdt({ symbol }) {
    ws.onopen = function (ev) {
        console.log("Open conection");
        ws.send(
            JSON.stringify({
                method: "SUBSCRIBE",
                params: [`xrpusdt@aggTrade`],
                id: 2,
            })
        );
    };

    ws.onclose = function (ev) {
        console.log("Close conection");
    };

    const [coinObj, setCoinObj] = useState([]);

    const [bgColorPrice, setBgColorPrice] = useState();

    useEffect(() => {
        ws.addEventListener("message", (e) => {
            // console.log(JSON.parse(e.data));
            const coinInfoParse = JSON.parse(e.data);
            if (coinInfoParse.p > coinObj.p) {
                setBgColorPrice("green");
            } else if (coinInfoParse.p < coinObj.p) {
                setBgColorPrice("red");
            }
            setCoinObj(coinInfoParse);
        });
    }, [coinObj]);

    return (
        <div className="coin">
            <h1>Product id: {coinObj.s}</h1>
            <h1 className={bgColorPrice}>Price: {coinObj.p}</h1>
        </div>
    );
}
