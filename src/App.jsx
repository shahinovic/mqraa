import { Col, Container, Row } from "react-bootstrap";
import { Content, Location, Navbar, SideBar } from "./containers";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ location:", location);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={9} md={10}>
            <Navbar />
            <Location />
            <Content />
          </Col>
          <Col xs={3} md={2}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
