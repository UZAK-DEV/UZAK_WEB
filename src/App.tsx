import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterEmailPage from "./pages/RegisterEmailPage";
import RegisterInfoPage from "./pages/RegisterInfoPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/email" element={<RegisterEmailPage />} />
        <Route path="/register/info" element={<RegisterInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
