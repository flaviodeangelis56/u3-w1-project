import { Component } from "react";
import { Spinner } from "react-bootstrap";

class Halloween extends Component {
  state = {
    isLoading: true,
    HalloweenArr: [],
  };
  getHarry = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?s=halloween&apikey=852a0260", { method: "GET" });
      if (resp.ok) {
        const HalloweenArr = await resp.json();
        console.log(HalloweenArr.Search[0].Poster);
        this.setState({ HalloweenArr: HalloweenArr.Search });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount = async () => {
    console.log("did mount");
    this.getHarry();
  };
  render() {
    return (
      <div className="row mx-3">
        {this.state.isLoading && <Spinner animation="grow" variant="danger" className="mx-auto" />}
        {!this.state.isLoading && <img src={this.state.HalloweenArr[0].Poster} alt="" className="col-2" />}
        {!this.state.isLoading && <img src={this.state.HalloweenArr[1].Poster} alt="" className="col-2" />}
        {!this.state.isLoading && <img src={this.state.HalloweenArr[2].Poster} alt="" className="col-2" />}
        {!this.state.isLoading && <img src={this.state.HalloweenArr[3].Poster} alt="" className="col-2" />}
        {!this.state.isLoading && <img src={this.state.HalloweenArr[4].Poster} alt="" className="col-2" />}
        {!this.state.isLoading && <img src={this.state.HalloweenArr[5].Poster} alt="" className="col-2" />}
      </div>
    );
  }
}
export default Halloween;
