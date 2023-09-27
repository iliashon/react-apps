import "./App.css";
import Bnb from "./components/Bnb";
import Btc from "./components/Btc";
import Eth from "./components/Eth";
import Sol from "./components/Sol";
import Xrp from "./components/Xrp";

function App() {
    return (
        <div className="App">
            <Btc />
            <Xrp />
            <Eth />
            <Sol />
            <Bnb />
        </div>
    );
}

export default App;
