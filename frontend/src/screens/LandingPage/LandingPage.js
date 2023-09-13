import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);

  
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to my My Notes</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
              <div className="buttonContainer">
                {" "}
                <a href="/login">
                  <Button size="lg" className="landingbutton">
                    {" "}
                    Login{" "}
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    {" "}
                    Signup{" "}
                  </Button>
                </a>{" "}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
