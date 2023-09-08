import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./MyComponents/Profile";
import Settings from "./MyComponents/Settings";
import HomePage from "./MyComponents/HomePage";
import SelectProfilePage from "./MyComponents/SelectProfilePage";

function App() {
  return (
    <div className="App">
      {/* <Settings /> */}
      {/* <HomePage /> */}
      {/* <Profile /> */}
      <SelectProfilePage />
    </div>
  );
}

export default App;
