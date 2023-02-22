import './App.css';
import { Registro } from './components/Registro';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grupo } from './components/Grupo';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="group" element={<Grupo />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
