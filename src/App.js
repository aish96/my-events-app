import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import CreateEvent from "./pages/create-event";
import ViewEvent from "./pages/view-event";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<ViewEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
