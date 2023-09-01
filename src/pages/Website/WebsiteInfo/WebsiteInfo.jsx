import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ColorPicker, SchoolLogo } from "../../../components";
import "./WebsiteInfo.css";
import { BiEdit as Edit } from "react-icons/bi";
import { BsCheck2Circle as Check } from "react-icons/bs";

const WebsiteInfo = () => {
  const [schoolObj, setSchoolObj] = useState({
    profilePicture:
      "https://i.pinimg.com/564x/30/96/1b/30961b1105458dc219f4465b844ca700.jpg",
    schoolAbout: "المدرسة المتميزة - التجريبية",
    aboutUs: "0551466581",
    goals: "المدرسة المتميزة - التجريبية",
    vision: "المدرسة المتميزة - التجريبية",
    video: "https://youtu.be/9IfbLSU_9YE?si=L6jH7NAkFH20u8Ak",
    schoolLogo:
      "https://i.pinimg.com/236x/68/e6/28/68e628782c9d84c23b38656265cc98da.jpg",
    videoImg:
      "https://i.pinimg.com/564x/30/96/1b/30961b1105458dc219f4465b844ca700.jpg",
  });
  const [edit, setEdit] = useState(true);
  const [profilePicture, setProfilePicture] = useState(
    schoolObj.profilePicture
  );
  const [schoolAbout, setSchoolAbout] = useState(schoolObj.schoolAbout);
  const [aboutUs, setAboutUs] = useState(schoolObj.aboutUs);
  const [goals, setGoals] = useState(schoolObj.goals);
  const [vision, setVision] = useState(schoolObj.vision);
  const [firstColor, setFirstColor] = useState("#418a84");
  const [secondColor, setSecondColor] = useState("#bf8b49");
  const [video, setVideo] = useState(schoolObj.video);
  const [schoolLogo, setSchoolLogo] = useState(schoolObj.schoolLogo);
  const [videoImg, setVideoImg] = useState(schoolObj.videoImg);

  const handleEditToggle = () => setEdit(!edit);
  const handleSchoolAbout = (e) => setSchoolAbout(e.target.value);
  const handleAboutUs = (e) => setAboutUs(e.target.value);
  const handleGoals = (e) => setGoals(e.target.value);
  const handleVision = (e) => setVision(e.target.value);
  const handleVideo = (e) => setVideo(e.target.value);

  const handleDone = () => {
    setSchoolObj({
      profilePicture: profilePicture,
      schoolAbout: schoolAbout,
      aboutUs: aboutUs,
      goals: goals,
      vision: vision,
      video: video,
      schoolLogo: schoolLogo,
      videoImg: videoImg,
    });
    handleEditToggle();
  };

  const handleCancel = () => {
    setProfilePicture(schoolObj.profilePicture);
    setSchoolAbout(schoolObj.schoolAbout);
    setAboutUs(schoolObj.aboutUs);
    setGoals(schoolObj.goals);
    setVision(schoolObj.vision);
    setVideo(schoolObj.video);
    setSchoolLogo(schoolObj.schoolLogo);
    setVideoImg(schoolObj.videoImg);

    handleEditToggle();
  };
  return (
    <div className="website-info py-3 px-2 bg-light rounded-2" dir="rtl">
      <Row>
        {edit && (
          <Row>
            <Button
              variant="success"
              className="edit"
              onClick={() => handleEditToggle()}
            >
              <Edit /> تعديل البيانات
            </Button>
          </Row>
        )}
        <Col xs={12}>
          {!edit && (
            <Row>
              <ColorPicker
                text="اللون الرئيسي :"
                selectedColor={firstColor}
                setSelectedColor={setFirstColor}
              />
              <ColorPicker
                text="اللون الفرعي :"
                selectedColor={secondColor}
                setSelectedColor={setSecondColor}
              />
            </Row>
          )}
          <div className="card text-center py-3">
            <div className="card-head">
              <h4>صورة التعريف بالمؤسسة: </h4>
              <div className={`img-container ${!edit && "edit"}`}>
                <SchoolLogo
                  edit={edit}
                  schoolLogo={profilePicture}
                  setSchoolLogo={setProfilePicture}
                />
              </div>
            </div>
            <fieldset disabled={edit}>
              <Form.Group className="mb-3" controlId="schoolAbout">
                <Form.Label>حول المؤسسة:</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل فقرة للتعريف بالمدرسة"
                  onChange={handleSchoolAbout}
                  value={schoolAbout}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="aboutUs">
                <Form.Label>من نحن:</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل فقرة للتعريف بالمدرسة"
                  onChange={handleAboutUs}
                  value={aboutUs}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="aboutUs">
                <Form.Label>الأهداف:</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل هنا فقرة لسرد أهداف المدرسة"
                  onChange={handleGoals}
                  value={goals}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="aboutUs">
                <Form.Label>الرؤية:</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل هنا فقرة لسرد رؤية المدرسة"
                  onChange={handleVision}
                  value={vision}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="aboutUs">
                <Form.Label>رابط الفيديو التعريفي :</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="ادخل هنا رابط الفيديو التعريفي للمدرسة"
                  onChange={handleVideo}
                  value={video}
                />
              </Form.Group>
              <Row>
                <Col md={5}>
                  <div className="card-head">
                    <h5>شعار المدرسة :</h5>
                    <div className={`img-container ${!edit && "edit"}`}>
                      <SchoolLogo
                        edit={edit}
                        schoolLogo={schoolLogo}
                        setSchoolLogo={setSchoolLogo}
                      />
                    </div>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="card-head">
                    <h5>صورة الفيديو التعريفي :</h5>
                    <div className={`img-container wide ${!edit && "edit"}`}>
                      <SchoolLogo
                        edit={edit}
                        schoolLogo={videoImg}
                        setSchoolLogo={setVideoImg}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </fieldset>
          </div>
        </Col>
      </Row>
      {!edit && (
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center gap-5 text-center mx-auto bg-light"
            xs={10}
          >
            <Button
              className="edit"
              onClick={() => handleDone()}
              disabled={edit}
            >
              <Check /> تأكيد
            </Button>
            <Button
              variant="danger"
              className="edit"
              onClick={() => handleCancel()}
              disabled={edit}
            >
              إلغاء
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default WebsiteInfo;
