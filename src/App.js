import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";


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
        <Header/>
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
