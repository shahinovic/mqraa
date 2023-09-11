import React, { useEffect } from "react";
import "./StudentsForm.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  SchoolLogo,
  StudentsFilter,
  useLocalStorage,
} from "../../../components";
import { useSelector } from "react-redux";

const StudentsForm = () => {
  const [sessionsOptionsSFArray, setSessionsOptionsSFArray] = useLocalStorage(
    "sessionsOptionsSFArray",
    []
  );
  const [SFSessionsName, setSFSessionsName] = useLocalStorage(
    "SFSessionsName",
    []
  );
  const [parentsOptionsSFArray, setParentsOptionsSFArray] = useLocalStorage(
    "parentsOptionsSFArray",
    []
  );
  const [SFParentsNames, setSFParentsNames] = useLocalStorage(
    "SFParentsNames",
    []
  );

  const [studentPic, setStudentPic] = useLocalStorage("studentPic", "");

  const [addParent, setAddParent] = useLocalStorage("addParent", false);

  const myObj = {};

  const formTitle = Object.keys(myObj).length === 0 ? "إضافة" : "تعديل";

  // filter Inputs
  const options = useSelector((state) => state.sessions.value);
  useEffect(() => {
    setSessionsOptionsSFArray(options.map((option) => option.sessionName));
    setParentsOptionsSFArray(parentsOptions.map((option) => option.parentName));
  }, []);

  const filterInputs = [
    {
      cols: 12,
      type: "text",
      formPlaceholder: "اختر الحلقة",
      optionsArray: sessionsOptionsSFArray,
      names: SFSessionsName,
      setNames: setSFSessionsName,
    },
  ];

  // parent array

  const parentsOptions = useSelector((state) => state.parents.value);

  const parentArray = [
    {
      cols: 12,
      type: "text",
      formLabel: "حساب ولي الامر",
      formPlaceholder: "ادخل اسم ولي الامر",
      optionsArray: parentsOptionsSFArray,
      names: SFParentsNames,
      setNames: setSFParentsNames,
    },
  ];

  return (
    <div className="students-form  w-100 h-100 text-center">
      <h2>{formTitle}</h2>
      <Form>
        <div>
          <h3>معلومات الانتساب</h3>
          <StudentsFilter filterInputs={filterInputs} />
        </div>
        <div>
          <h3>المعلومات الشخصية للطالب</h3>
          <Row>
            <Col md={6}>
              <Form.Label>الاسم :</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ادخل اسم الطالب"
              />
            </Col>
            <Col md={6}>
              <Form.Label>الكنية :</Form.Label>
              <Form.Control type="text" placeholder="ادخل كنية الطالب" />
            </Col>
            <Col md={6}>
              <Form.Label>الاسم بالأجنبي :</Form.Label>
              <Form.Control type="text" placeholder="ادخل كنية الطالب" />
            </Col>
            <Col md={6}>
              <Form.Label>الكنية بالأجنبي :</Form.Label>
              <Form.Control type="text" placeholder="ادخل كنية الطالب" />
            </Col>
            <Col md={6}>
              <Form.Label>الجنس :</Form.Label>
              <Form.Select aria-label="Default select">
                <option>تحديد</option>
                <option value="1">ذكر</option>
                <option value="2">انثي</option>
              </Form.Select>
            </Col>
            <Col md={6} style={{ display: "flex" }}>
              <div>
                <Form.Label>اليوم :</Form.Label>
                <Form.Control type="number" placeholder="ادخل يوم الميلاد" />
              </div>
              <div>
                <Form.Label>الشهر :</Form.Label>
                <Form.Control type="number" placeholder="ادخل شهر الميلاد" />
              </div>
              <div>
                <Form.Label>السنة :</Form.Label>
                <Form.Control type="number" placeholder="ادخل سنة الميلاد" />
              </div>
            </Col>
            <Col md={6}>
              <Form.Label>مكان الميلاد :</Form.Label>
              <Form.Control type="text" placeholder="ادخل مكان الميلاد" />
            </Col>
            <Col md={6}>
              <Form.Label>الجنسية :</Form.Label>
              <Form.Control type="text" placeholder="ادخل الجنسية" />
            </Col>
            <Col md={6}>
              <Form.Label>العنوان :</Form.Label>
              <Form.Control type="text" placeholder="ادخل العنوان" />
            </Col>
          </Row>
        </div>
        <div>
          <h3>معلومات تخص الحساب</h3>
          <Row>
            <Col md={6}>
              <Form.Label>اسم المستخدم :</Form.Label>
              <Form.Control type="text" placeholder="ادخل اسم المستخدم" />
            </Col>
            <Col md={6}>
              <Form.Label>كلمة السر :</Form.Label>
              <Form.Control type="text" placeholder="ادخل كلمة السر" />
            </Col>
          </Row>
        </div>

        <div>
          <h3>معلومات صحية</h3>
          <Row>
            <Col md={6}>
              <Form.Label>يعاني من مرض :</Form.Label>
              <Form.Select aria-label="Default select">
                <option>تحديد</option>
                <option value="1">نعم</option>
                <option value="2">لا</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>سبب المرض :</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </div>
        <div>
          <h3>بيانات التواصل</h3>
          <Row>
            <Col md={6}>
              <Form.Label>رقم الهاتف :</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={6}>
              <Form.Label>البريد الإلكتروني :</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </div>
        <div>
          <h3>حالة الابوين</h3>
          <Row>
            <Col md={6}>
              <Form.Label>حالة الأب :</Form.Label>
              <Form.Select aria-label="Default select">
                <option>تحديد</option>
                <option value="1">علي قيد الحياة</option>
                <option value="2">ليس علي قيد الحياة</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>حالة الأم :</Form.Label>
              <Form.Select aria-label="Default select">
                <option>تحديد</option>
                <option value="1">علي قيد الحياة</option>
                <option value="2">ليست علي قيد الحياة</option>
              </Form.Select>
            </Col>
          </Row>
        </div>
        <div>
          <h3>
            <span>بيانات اولياء الامور</span>{" "}
            {addParent ? (
              <>
                <Button
                  className="mx-3"
                  onClick={() => setAddParent(!addParent)}
                  variant="danger"
                >
                  إلغاء
                </Button>
                <Button
                  className="mx-3"
                  onClick={() => setAddParent(!addParent)}
                  variant="success"
                >
                  تأكيد
                </Button>
              </>
            ) : (
              <Button
                className="mx-4"
                onClick={() => setAddParent(!addParent)}
                variant="danger"
              >
                إضافة ولي امر
              </Button>
            )}
          </h3>
          <Row>
            <Col>
              {addParent ? (
                <Row>
                  <Col md={6}>
                    <Form.Label>الاسم :</Form.Label>
                    <Form.Control type="text" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>الكنية :</Form.Label>
                    <Form.Control type="text" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>رقم الهاتف (سيعتبر اسم المستخدم) :</Form.Label>
                    <Form.Control type="text" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>البريد الإلكتروني :</Form.Label>
                    <Form.Control type="email" />
                  </Col>
                  <Col>
                    <Form.Label>صلة القرابة :</Form.Label>
                    <Form.Select aria-label="Default select">
                      <option>تحديد</option>
                      <option value="1">اب</option>
                      <option value="2">ام</option>
                    </Form.Select>
                  </Col>
                </Row>
              ) : (
                <StudentsFilter filterInputs={parentArray} />
              )}
            </Col>
          </Row>
        </div>
        <div>
          <h3>صورة الطالب :</h3>
          <Row>
            <Col className="text-center">
              <div className="img-container edit">
                <SchoolLogo
                  edit={false}
                  schoolLogo={studentPic}
                  setSchoolLogo={setStudentPic}
                />
              </div>
            </Col>
          </Row>
        </div>
        <Button variant="success" className="w-75 my-5 ">
          حفظ
        </Button>
      </Form>
    </div>
  );
};

export default StudentsForm;
