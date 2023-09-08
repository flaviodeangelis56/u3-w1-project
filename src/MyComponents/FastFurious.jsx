import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";

class FastFurious extends Component {
  state = {
    isLoading: true,
    StarArr: [],
    error: false,
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
          <img src={this.state.StarArr[0].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.StarArr[1].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.StarArr[2].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.StarArr[3].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.StarArr[4].Poster} alt="" className="col-2 posterSelected" />
        )}
        {!this.state.isLoading && !this.state.error && (
          <img src={this.state.StarArr[5].Poster} alt="" className="col-2 posterSelected" />
        )}
      </div>
    );
  }
}
export default FastFurious;
