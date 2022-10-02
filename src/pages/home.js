import "./css/home.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import LandingPage from "../Landing-page-image.svg";
import { useNavigate } from "react-router-dom";


function Home() {
    let navigate = useNavigate();

    function handleOnSubmit() {
        navigate('/create');
    }

    return (
      <Container className="home">
        <div className="header">
          <h1>Imagine if</h1>
          <h1 className="brand-name">Snapchat</h1>
          <h1>had events.</h1>
        </div>
        <span>
          Easily host and share events with your friends across any social
          media.
        </span>

        <Image src={LandingPage} className="landing-img" />
        <Button className="create-event" onClick={handleOnSubmit}>
          Create my event
        </Button>
      </Container>
    );
}

export default Home;
