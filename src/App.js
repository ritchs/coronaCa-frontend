import './App.css';
import { Registro } from './components/Registro';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grupo } from './components/Grupo';
import  MyForm  from './components/MyForm';


function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="/group" element={<Grupo />} />
            <Route path="/f" element={<MyForm />} />
          </Routes>
        </BrowserRouter>
      
      </>
      
    </div>
  );
}

export default App;
