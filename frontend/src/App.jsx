import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:username" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
  );
}

export default App;