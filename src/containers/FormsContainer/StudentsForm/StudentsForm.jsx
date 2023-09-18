import React, { useEffect, useState } from "react";
import "./StudentsForm.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  FormInput,
  FormSelect,
  SchoolLogo,
  StudentsFilter,
  useLocalStorage,
} from "../../../components";
import { useDispatch, useSelector } from "react-redux";

import { addDoc, collection } from "firebase/firestore";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../config/firebase";
import { getStudents } from "../../../services/reducers/studentsSlice";

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

  const formTitle =
    useSelector((state) => state.showForm.value.action) === "ADD"
      ? "إضافة"
      : "تعديل";

  // Define state variables for form validation
  const [validated, setValidated] = useState(false);

  // Define state variables for form input values and validation
  const [formData, setFormData] = useState({
    // Define initial values for form inputs here
    name: "",
    kinaya: "",
    foreignName: "",
    foreignKinaya: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
    hasDisease: "",
    diseaseReason: "",
    phoneNumber: "",
    email: "",
    fatherStatus: "",
    motherStatus: "",
    bankCode: "",
    accountNumber: "",
    parentName: "",
    parentKinaya: "",
    parentPhoneNumber: "",
    parentEmail: "",
    relativeRelation: "",
    sessions: [],
    studentAvatar: null,
  });
  const dispatch = useDispatch();
  // Handle form input changes

  const uploadData = async (data, SFSessionsName, SFParentsNames) => {
    const {
      name,
      kinaya,
      foreignName,
      foreignKinaya,
      gender,
      dateOfBirth,
      placeOfBirth,
      nationality,
      address,
      username,
      password,
      confirmPassword,
      hasDisease,
      diseaseReason,
      phoneNumber,
      email,
      fatherStatus,
      motherStatus,
      bankCode,
      accountNumber,
      parentName,
      parentKinaya,
      parentPhoneNumber,
      parentEmail,
      relativeRelation,
      studentAvatar,
    } = data;
    const session = SFSessionsName;
    const savedParentName = SFParentsNames;

    console.log(
      "🚀 ~ file: StudentsForm.jsx:170 ~ handleSubmit ~ `studentsImages/${foreignName}-${foreignKinaya}-${username}`:",
      `studentsImages/${foreignName}_${foreignKinaya}_${username}`,
      studentAvatar
    );

    const imgRef = storageRef(
      storage,
      `studentsImages/${foreignName}_${foreignKinaya}_${username}.${
        studentAvatar?.type.split("/")[1]
      }`
    );
    console.log(
      "🚀 ~ file: StudentsForm.jsx:196 ~ handleSubmit ~ imgRef:",
      imgRef
    );
    try {
      console.log(
        "🚀 ~ file: StudentsForm.jsx:132 ~ uploadData ~ imgRef, studentAvatar:",
        imgRef,
        studentAvatar
      );
      uploadBytes(imgRef, studentAvatar);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "studentsTable"), {
        name,
        kinaya,
        foreignName,
        foreignKinaya,
        gender,
        dateOfBirth,
        placeOfBirth,
        nationality,
        address,
        username,
        password,
        confirmPassword,
        hasDisease,
        diseaseReason,
        phoneNumber,
        email,
        fatherStatus,
        motherStatus,
        bankCode,
        accountNumber,
        parentName,
        parentKinaya,
        parentPhoneNumber,
        parentEmail,
        relativeRelation,
        session: session,
        savedParentName: savedParentName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleInputChange = (event) => {
    if (event?.target?.type === "file") {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setStudentPic(imageUrl);
        setFormData({
          ...formData,
          [event.target.name]: selectedFile,
        });
      }
    } else if (Array.isArray(event)) {
      if (!Object.values(formData.sessions).includes(event[0])) {
        setFormData({
          ...formData,
          sessions: [...formData.sessions, event[0]],
        });
      }
    } else {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    // Check if the form is valid

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // Mark the form as validated
    setValidated(true);

    // Add custom validation logic here, if needed

    if (form.checkValidity() === true) {
      await uploadData(formData, SFSessionsName, SFParentsNames);
      dispatch(getStudents());
    }
  };

  // filter Inputs
  const options = useSelector((state) => state.sessions.value);

  useEffect(() => {
    setSessionsOptionsSFArray(options.map((option) => option.sessionName));
    setParentsOptionsSFArray(parentsOptions.map((option) => option.parentName));
  }, []);

  const filterInputs = [
    {
      cols: 12,
      required: true,
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

  // component configuration

  const studentsFormData = [
    {
      title: "المعلومات الشخصية للطالب",
      cols: [
        {
          required: true,
          md: 6,
          label: "الاسم",
          type: "text",
          name: "name",
          placeholder: "ادخل اسم الطالب",
          value: formData.name,
          onChange: handleInputChange,
          pattern: "^[\u0621-\u064A\u0660-\u0669]+$",
          feedback: "الرجاء ادخال حروف عربية ومسافات فقط.",
        },
        {
          required: true,
          md: 6,
          label: "الكنية",
          type: "text",
          name: "kinaya",
          placeholder: "ادخل اسم الكنية",
          value: formData.kinaya,
          onChange: handleInputChange,
          pattern: "^[\u0621-\u064A\u0660-\u0669]+$",
          feedback: "الرجاء ادخال حروف عربية فقط.",
        },
        {
          required: true,
          md: 6,
          label: "الاسم الأجنبي",
          type: "text",
          name: "foreignName",
          placeholder: "ادخل اسم الأجنبي",
          value: formData.foreignName,
          onChange: handleInputChange,
          pattern: "^[A-Za-z][A-Za-z0-9]*$",
          feedback: "الرجاء ادخال حروف الانجليزية فقط",
        },
        {
          required: true,
          md: 6,
          label: "الكنية الأجنبية",
          type: "text",
          name: "foreignKinaya",
          placeholder: "ادخل الكنية الأجنبي",
          value: formData.foreignKinaya,
          onChange: handleInputChange,
          pattern: "^[A-Za-z][A-Za-z0-9]*$",
          feedback: "الرجاء ادخال حروف الانجليزية فقط",
        },
        {
          required: true,
          md: 6,
          label: "الجنس",
          type: "select",
          name: "gender",
          value: formData.gender,
          onChange: handleInputChange,
          placeholder: "الجنس",
          options: [
            {
              label: "تحديد",
              value: "تحديد",
            },
            {
              label: "ذكر",
              value: "ذكر",
            },
            {
              label: "أنثى",
              value: "أنثى",
            },
          ],
        },
        {
          required: true,
          md: 6,
          label: "تاريخ الميلاد",
          type: "date",
          name: "dateOfBirth",
          value: formData.dateOfBirth,
          onChange: handleInputChange,
        },
        {
          md: 6,
          label: "مكان الميلاد",
          type: "text",
          name: "placeOfBirth",
          value: formData.placeOfBirth,
          placeholder: "ادخل مكان الميلاد",
          onChange: handleInputChange,
        },
        {
          required: true,
          md: 6,
          label: "الجنسية",
          type: "text",
          name: "nationality",
          placeholder: "ادخل الجنسية",
          value: formData.nationality,
          onChange: handleInputChange,
        },
        {
          required: true,
          md: 12,
          label: "العنوان",
          type: "text",
          name: "address",
          placeholder: "ادخل العنوان",
          value: formData.address,
          onChange: handleInputChange,
        },
      ],
    },
    {
      title: "معلومات تخص الحساب",
      cols: [
        {
          required: true,
          md: 12,
          label: "اسم المستخدم",
          type: "text",
          name: "username",
          placeholder: "ادخل اسم المستخدم",
          value: formData.username,
          onChange: handleInputChange,
          pattern: `^[a-zA-Z0-9!@#$%^&*()-_=+[\\]{};:'",.<>?]+$`,
          feedback:
            "الرجاء استخدام الحروف الانجليزية والارقام والحروف المميزة فقط",
        },
        {
          required: true,
          md: 6,
          label: "كلمة المرور",
          type: "password",
          name: "password",
          placeholder: "ادخل كلمة المرور",
          value: formData.password,
          onChange: handleInputChange,
          pattern: `^[a-zA-Z0-9!@#$%^&*()-_=+[\\]{};:'",.<>?]+$`,
          feedback:
            "الرجاء استخدام الحروف الانجليزية والارقام والحروف المميزة فقط",
        },
        {
          required: true,
          md: 6,
          label: "تأكيد كلمة المرور",
          type: "password",
          name: "confirmPassword",
          placeholder: "تأكيد كلمة المرور",
          value: formData.confirmPassword,
          onChange: handleInputChange,
          pattern: formData.password,
          feedback: "الرجاء تأكيد كلمة المرور بشكل صحيح",
        },
      ],
    },
    {
      title: "معلومات صحية",
      cols: [
        {
          required: true,
          md: 6,
          label: "يعاني من مرض",
          type: "select",
          name: "hasDisease",
          value: formData.hasDisease,
          onChange: handleInputChange,
          options: [
            {
              label: "تحديد",
              value: "تحديد",
            },
            {
              label: "نعم",
              value: "نعم",
            },
            {
              label: "لا",
              value: "لا",
            },
          ],
        },
        {
          required: false,
          md: 6,
          label: "سبب المرض",
          type: "text",
          name: "diseaseReason",
          placeholder: "ادخل سبب المرض",
          value: formData.diseaseReason,
          onChange: handleInputChange,
        },
      ],
    },
    {
      title: "معلومات الاتصال",
      cols: [
        {
          required: true,
          md: 6,
          label: "رقم الهاتف",
          type: "tel",
          name: "phoneNumber",
          placeholder: "ادخل رقم الهاتف",
          value: formData.phoneNumber,
          onChange: handleInputChange,
          pattern: "^\\+?\\d{7,15}$",
          feedback: "الرجاء ادخال رقم هاتف صحيح مسبوق بعلامة +",
        },
        {
          required: true,
          md: 6,
          label: "البريد الإلكتروني",
          type: "email",
          name: "email",
          placeholder: "ادخل البريد الإلكتروني",
          value: formData.email,
          onChange: handleInputChange,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,
          feedback: "الرجاء ادخال عنوان بريد إلكتروني صحيح",
        },
      ],
    },
    {
      title: "معلومات الحساب",
      cols: [
        {
          required: true,
          md: 6,
          label: "رقم الحساب",
          type: "number",
          name: "accountNumber",
          placeholder: "ادخل رقم الحساب",
          value: formData.accountNumber,
          onChange: handleInputChange,
          pattern: /^[0-9]+$/u,
          feedback: "الرجاء ادخال رقم حساب صحيح (أرقام فقط).",
        },
        {
          required: true,
          md: 6,
          label: "رمز البنك",
          type: "number",
          name: "bankCode",
          placeholder: "ادخل رمز البنك",
          value: formData.bankCode,
          onChange: handleInputChange,
          pattern: /^[0-9]+$/u,
          feedback: "الرجاء ادخال رمز بنكي صحيح (أرقام فقط).",
        },
      ],
    },
  ];

  return (
    <div className="students-form  w-100 h-100 text-center">
      <Form onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <div>
          <h3>معلومات الانتساب</h3>
          <StudentsFilter filterInputs={filterInputs} />
        </div>
        {studentsFormData.map((ele, index) => {
          return (
            <div key={index}>
              <h3>{ele.title}</h3>
              <Row>
                {ele.cols.map((col, index) => {
                  if (col.type === "select") {
                    return (
                      <FormSelect
                        handleInputChange={handleInputChange}
                        col={col}
                        formData={formData}
                        index={index}
                        key={index + col.pattern}
                      />
                    );
                  } else {
                    return (
                      <FormInput
                        handleInputChange={handleInputChange}
                        formData={formData}
                        col={col}
                        index={index}
                        key={index + col.pattern}
                      />
                    );
                  }
                })}
              </Row>
            </div>
          );
        })}

        <div>
          <h3>
            <span>بيانات اولياء الامور</span>{" "}
            {addParent ? (
              <Button
                className="mx-3"
                onClick={() => setAddParent(!addParent)}
                variant="danger"
              >
                إلغاء
              </Button>
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
                  <FormInput
                    handleInputChange={handleInputChange}
                    formData={formData}
                    col={{
                      required: true,
                      md: 12,
                      label: "الاسم",
                      type: "text",
                      name: "parentName",
                      placeholder: "ادخل اسم الولي",
                      value: formData.parentName,
                      onChange: handleInputChange,
                      pattern: "^[\u0621-\u064A\u0660-\u0669]+$",
                      feedback: "الرجاء ادخال حروف عربية فقط.",
                    }}
                    index={32}
                  />
                  <FormInput
                    handleInputChange={handleInputChange}
                    formData={formData}
                    col={{
                      required: true,
                      md: 6,
                      label: "الكنية",
                      type: "text",
                      name: "parentKinaya",
                      placeholder: "ادخل كنية الولي",
                      value: formData.parentKinaya,
                      onChange: handleInputChange,
                      pattern: "^[\u0621-\u064A\u0660-\u0669]+$",
                      feedback: "الرجاء ادخال حروف عربية فقط.",
                    }}
                    index={32}
                  />
                  <FormInput
                    handleInputChange={handleInputChange}
                    formData={formData}
                    col={{
                      required: true,
                      md: 6,
                      label: "رقم الهاتف (سيعتبر اسم المستخدم)",
                      type: "tel",
                      name: "parentPhoneNumber",
                      placeholder: "ادخل رقم هاتف الولي",
                      value: formData.parentPhoneNumber,
                      onChange: handleInputChange,
                      pattern: "^\\+?\\d{7,15}$",
                      feedback: "الرجاء ادخال رقم هاتف صحيح مسبوق بعلامة +",
                    }}
                    index={32}
                  />
                  <FormInput
                    handleInputChange={handleInputChange}
                    formData={formData}
                    col={{
                      required: true,
                      md: 6,
                      label: "البريد الإلكتروني :",
                      type: "email",
                      name: "parentEmail",
                      placeholder: "ادخل البريد الإلكتروني للولي",
                      value: formData.parentEmail,
                      onChange: handleInputChange,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,
                      feedback: "الرجاء ادخال عنوان بريد إلكتروني صحيح",
                    }}
                    index={32}
                  />
                  <FormSelect
                    handleInputChange={handleInputChange}
                    col={{
                      required: true,
                      md: 6,
                      label: "صلة القرابة",
                      type: "select",
                      name: "relativeRelation",
                      value: formData.relativeRelation,
                      onChange: handleInputChange,
                      options: [
                        {
                          label: "تحديد",
                          value: "تحديد",
                        },
                        {
                          label: "اب",
                          value: "اب",
                        },
                        {
                          label: "ام",
                          value: "ام",
                        },
                      ],
                    }}
                    formData={formData}
                    index={1}
                  />
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
                  name="studentAvatar"
                  schoolLogo={formData.studentAvatar}
                  studentPic={studentPic}
                  handleLogoChange={handleInputChange}
                />
              </div>
            </Col>
          </Row>
        </div>
        <Button variant="success" type="submit" className="w-75 my-5 ">
          حفظ
        </Button>
      </Form>
    </div>
  );
};

export default StudentsForm;

/*

parentName: "",
    parentKinaya: "",
    parentPhoneNumber: "",
    parentEmail: "",

    */
