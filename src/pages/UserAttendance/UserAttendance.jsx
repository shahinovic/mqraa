import { Container, Row } from "react-bootstrap";

import "./UserAttendance.css";
import { ProfileSections } from "../../components";
import { useLocation } from "react-router-dom";

const UserAttendance = () => {
  const teachersData = [
    {
      name: "جمال طيبي",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      id: "1",
    },
    {
      name: "جمال طيبي",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      id: "2",
    },
    {
      name: "جمال طيبي",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      id: "3",
    },
  ];

  const locationobj = useLocation();
  const location = locationobj.pathname;
  const id = location.split("/")[3];
  const user = teachersData.filter((teacher) => teacher.id === id)[0];

  // const teacher = teachersData[0];
  return (
    <div
      className="user-attendance text-center rounded-2 p-4 bg-light"
      dir="rtl"
    >
      <Container>
        <Row>
          <div className="header position-relative">
            <div
              style={{ width: "200px", height: "200px" }}
              className="img-container d-flex align-items-center justify-content-center rounded-pill overflow-hidden border border-3 border-black   "
            >
              <img
                src={user?.avatar}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
            </div>

            <div className="info">
              <h2>{user?.name}</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </Row>
        <Row>
          <ProfileSections />
        </Row>
      </Container>
    </div>
  );
};

export default UserAttendance;
