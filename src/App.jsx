import { Col, Container, Row } from "react-bootstrap";
import { Content, FormsContainer, Navbar, SideBar } from "./containers";
import { useEffect } from "react";
import { LogIn } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useDispatch } from "react-redux";
import { setStudentsReducer } from "./services/reducers/studentsSlice";
import { setTeachersAttendanceReducer } from "./services/reducers/teachersAttendanceSlice";
import { setSessionsReducer } from "./services/reducers/sessionsSlice";
import { useLocalStorage } from "./components";
import { setParentsReducer } from "./services/reducers/parentsSlice";

const App = () => {
  const [isOpen, setIsOpen] = useLocalStorage(false);
  const [screenSize, setScreenSize] = useLocalStorage("screenSize", "");
  const { isAuthenticated, logout } = useAuth0();
  const { isLoading, error } = useAuth0();
  const [students, setStudents, removeStudents] = useLocalStorage(
    "students",
    []
  );

  const [teachers, setTeachers, removeTeachers] = useLocalStorage(
    "teachers",
    []
  );
  const [sessions, setSessions, removeSessions] = useLocalStorage(
    "sessions",
    []
  );

  const [parents, setParents, removeParents] = useLocalStorage("parents", []);

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

  // app data
  const dispatch = useDispatch();
  const updateSlice = (reducer, newData) => {
    dispatch(reducer(newData));
  };
  const getStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "studentsTable"));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setStudents(data);
      updateSlice(setStudentsReducer, data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTeachers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "teachersTable"));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setTeachers(data);
      updateSlice(setTeachersAttendanceReducer, data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSessions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sessionsTable"));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setSessions(data);
      updateSlice(setSessionsReducer, data);
    } catch (error) {
      console.error(error);
    }
  };

  const getParents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "parentsTable"));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setParents(data);
      updateSlice(setParentsReducer, data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // get students
    students.length === 0
      ? getStudents()
      : updateSlice(setStudentsReducer, students);
    // get teachers
    teachers.length === 0
      ? getTeachers()
      : updateSlice(setTeachersAttendanceReducer, teachers);
    // get sessions
    sessions.length === 0
      ? getSessions()
      : updateSlice(setSessionsReducer, sessions);
    // get parents
    parents.length === 0
      ? getParents()
      : updateSlice(setParentsReducer, parents);
  }, [students, teachers, sessions]);

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && (
        <>
          {/* {!isAuthenticated && <LogIn />} */}

          {/* {isAuthenticated && usersSub.includes(user.sub) && (
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
          )} */}
          <Container fluid>
            <FormsContainer />
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
        </>
      )}
    </div>
  );
};

export default App;
