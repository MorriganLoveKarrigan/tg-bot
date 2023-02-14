import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {tg,onToggleButton} = useTelegram();

    useEffect(() => {
        return () => {
            tg.ready()
        };
    }, []);
    


  return (
    <div className="App">
      WORKING
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
