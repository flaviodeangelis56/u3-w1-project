import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./MyComponents/Navbar";
import Header from "./MyComponents/Header";
import Main from "./MyComponents/Main";
import MyFooter from "./MyComponents/MyFooter";
import Profile from "./MyComponents/Profile";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header />
      <Main />
      <MyFooter />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
