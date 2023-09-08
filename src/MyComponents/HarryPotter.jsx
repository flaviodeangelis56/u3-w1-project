import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";

class HarryPotter extends Component {
  state = {
    isLoading: true,
    HarryArr: [],
    error: false,
  };
  getHarry = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?s=harry&apikey=852a0260", { method: "GET" });
      if (resp.ok) {
        const HarryArr = await resp.json();
        console.log(HarryArr.Search[0].Poster);
        this.setState({ HarryArr: HarryArr.Search });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
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
        {this.state.error && <Alert variant="danger">Si è verificato un errore durante fetch</Alert>}
        {this.state.isLoading && <Spinner animation="grow" variant="danger" className="mx-auto" />}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.HarryArr[0].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.HarryArr[1].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.HarryArr[2].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.HarryArr[3].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.HarryArr[4].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.HarryArr[5].Poster} alt="" className="col-2 posterSelected" />
        )}
      </div>
    );
  }
}
export default HarryPotter;
