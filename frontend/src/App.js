// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './pages/Add.jsx'
import AiSuggestion from "./pages/AiSuggestion.jsx";
import AllPlans from "./pages/AllPlans.jsx"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPlans />} />
        <Route path='/add' element={<Add />} />
        <Route path='/inspiration' element={<AiSuggestion />} />
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
