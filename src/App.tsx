import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterEmailPage from "./pages/RegisterEmailPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/email" element={<RegisterEmailPage />} />
      </Routes>
    </div>
  );
}

export default App;
