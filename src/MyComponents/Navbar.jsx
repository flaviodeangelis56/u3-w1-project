import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-black bg-black text-white">
      <img src="./" alt="logo netflix" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            My List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <form className="d-flex align-items-center" role="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search mx-3 text-white"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <p className="mx-3 mt-3 text-white">KIDS</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-bell-fill mx-3 text-white"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        <img src="./Netflix-assets/assets/avatar.png" alt="profile icon" style={{ width: "50px" }} className="mx-3" />
      </form>
    </Navbar>
  );
}

export default MyNavbar;
