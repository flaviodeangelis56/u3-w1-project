import { Component } from "react";
import { Spinner } from "react-bootstrap";

class FastFurious extends Component {
  state = {
    isLoading: true,
    StarArr: [],
  };
  getHarry = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?s=fast&fu&apikey=852a0260", { method: "GET" });
      if (resp.ok) {
        const StarArr = await resp.json();
        console.log(StarArr.Search[0].Poster);
        this.setState({ StarArr: StarArr.Search });
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
      <div className="row mx-3 mb-2">
        {this.state.isLoading && <Spinner animation="grow" variant="danger" className="mx-auto" />}
        {!this.state.isLoading && <img src={this.state.StarArr[0].Poster} alt="" className="col-2 posterSelected" />}
        {!this.state.isLoading && <img src={this.state.StarArr[1].Poster} alt="" className="col-2 posterSelected" />}
        {!this.state.isLoading && <img src={this.state.StarArr[2].Poster} alt="" className="col-2 posterSelected" />}
        {!this.state.isLoading && <img src={this.state.StarArr[3].Poster} alt="" className="col-2 posterSelected" />}
        {!this.state.isLoading && <img src={this.state.StarArr[4].Poster} alt="" className="col-2 posterSelected" />}
        {!this.state.isLoading && <img src={this.state.StarArr[5].Poster} alt="" className="col-2 posterSelected" />}
      </div>
    );
  }
}
export default FastFurious;
