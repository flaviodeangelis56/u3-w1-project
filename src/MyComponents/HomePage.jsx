import { Component } from "react";
import MyNavbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import MyFooter from "./MyFooter";
class HomePage extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <Header />
        <Main />
        <MyFooter />
      </>
    );
  }
}
export default HomePage;
