import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/sign-up" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
		</Routes>
	);
}

export default App;