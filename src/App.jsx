import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Controls} from "./components/Controls";
function App() {
  return (
    <div className="App">
     <Header/>
        <Main>
            <Controls/>
        </Main>
    </div>
  );
}

export default App;
