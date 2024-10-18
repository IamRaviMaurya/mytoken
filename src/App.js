import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TokenDisplay from "./components/TokenDisplay";
import User from "./components/User";
import QrCodeGenerator from "./components/QrCodeGenerator";
import UserTokenForm from "./components/UserTokenForm";

function App() {
  return (
<Router basename="/login">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/token" element={<TokenDisplay/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/qr-code" element={<QrCodeGenerator/>}/>
        <Route path="/user-token" element={<UserTokenForm/>}/>
      </Routes>
    </Router>

  );
}

export default App;