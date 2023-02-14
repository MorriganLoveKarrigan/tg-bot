import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        return () => {

        };
    }, []);
    
    const onClose = () => {
            tg.close()
    }

  return (
    <div className="App">
      WORKING
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
