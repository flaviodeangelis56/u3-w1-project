import { Component } from "react";
import MyNavbar from "./Navbar";
import SettingMain from "./SettingsMain";
import MyFooter from "./MyFooter";

class Settings extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <SettingMain />
        <MyFooter />
      </>
    );
  }
}
export default Settings;
