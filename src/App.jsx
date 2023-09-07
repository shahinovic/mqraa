import { Col, Container, Row } from "react-bootstrap";
import { Content, Navbar, SideBar } from "./containers";
import { useEffect, useState } from "react";
import { LogIn } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState("");
  const { isAuthenticated, logout } = useAuth0();
  const { isLoading, error } = useAuth0();

  const updateScreenSize = () => {
    const screenWidth = window.innerWidth;
    const bootstrapBreakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    };

    let currentSize = "";

    if (screenWidth < bootstrapBreakpoints.sm) {
      currentSize = "xs";
    } else if (screenWidth < bootstrapBreakpoints.md) {
      currentSize = "sm";
    } else if (screenWidth < bootstrapBreakpoints.lg) {
      currentSize = "md";
    } else if (screenWidth < bootstrapBreakpoints.xl) {
      currentSize = "lg";
    } else {
      currentSize = "xl";
    }

    setScreenSize(currentSize);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const { user } = useAuth0();

  useEffect(() => {
    isAuthenticated && console.table(user);
  }, [user]);

  const usersSub = ["google-oauth2|105338283554296505223"];

  useEffect(() => {
    isAuthenticated &&
      !usersSub.includes(user.sub) &&
      logout({
        returnTo: window.location.origin,
      });
  });

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && (
        <>
          {!isAuthenticated && <LogIn />}

          {isAuthenticated && usersSub.includes(user.sub) && (
            <>
              {!user?.email_verified && (
                <h1> يرجي التحقق من البريد الإلكتروني</h1>
              )}
              {user.email_verified && (
                <Container fluid>
                  <Row>
                    <Col xs={9} md={11}>
                      <Navbar screenSize={screenSize} />
                      <Content />
                    </Col>
                    <Col
                      xs={isOpen ? 8 : 3}
                      md={isOpen ? 2 : 1}
                      style={
                        isOpen
                          ? {
                              position: "absolute",
                              right: "0",
                              top: "10px",
                              zIndex: "9999",
                            }
                          : {}
                      }
                    >
                      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
                    </Col>
                  </Row>
                </Container>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
