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

import { addDoc, collection, doc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../../../config/firebase";
import { toggle } from "../../../services/reducers/refreshSlice";
import { setFormStatus } from "../../../services/reducers/showFormSlice";
import { v4 } from "uuid";
import { usePrevious } from "../../../hooks";

const StudentsForm = () => {
  const [sessionsOptionsSFArray, setSessionsOptionsSFArray] = useState([]);
  const [SFSessionsName, setSFSessionsName] = useState([]);

  const [parentsOptionsSFArray, setParentsOptionsSFArray] = useState([]);
  const [SFParentsNames, setSFParentsNames] = useState([]);

  const [studentPic, setStudentPic] = useState([]);

  const [addParent, setAddParent] = useState([]);

  const [downloadURL, setDownloadURL] = useState(null);
  const [images, setImages] = useState([]);
  const [fbImagePath, setFbImagePath] = useState("");

  useEffect(() => {
    console.log(
      "🚀 ~ file: StudentsForm.jsx:36 ~ StudentsForm ~ images:",
      images
    );
  }, [images]);

  const formStatus = useSelector((state) => state.showForm.value);

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
    imageID: "",
  });
  const prevFormData = usePrevious(formData);
  console.log(
    "🚀 ~ file: StudentsForm.jsx:85 ~ StudentsForm ~ prevFormData:",
    prevFormData
  );
  const dispatch = useDispatch();

  const students = useSelector((state) => state.students.value);
  const selectedStudent = useSelector((state) => state.selectedUser.value);
  const listFilesInFolder = async (folderPath) => {
    const storageImagesRef = storageRef(storage, folderPath); // Replace with your Firebase Storage reference
    try {
      const items = await listAll(storageImagesRef);

      // Extract the names of the items (files and subfolders) within the folder
      const itemNames = items.items.map((item) => {
        console.log("🚀 ~ file: StudentsForm.jsx:94 ~ itemNames ~ item:", item);
        return item.name;
      });

      return itemNames;
    } catch (error) {
      console.error("Error listing files in folder: ", error);
      return [];
    }
  };

  const folderPath = "studentsImages";
  useEffect(() => {
    listFilesInFolder(folderPath)
      .then((fileNames) => {
        setImages(fileNames);
      })
      .catch((error) => {
        console.error("Error: Images88 ", error);
      });
  }, []);

  useEffect(() => {
    if (formStatus.action === "EDIT") {
      setFormData(
        students.find((student) => student.id === selectedStudent[0])
      );
      console.log(
        "🚀 ~ file: StudentsForm.jsx:117 ~ useEffect ~ formData:",
        formData
      );
      const { foreignName, foreignKinaya, username } = formData;
      setTimeout(() => {
        // `studentsImages/${foreignName}_${foreignKinaya}_${username}`
        const imageName = images.find((ele) =>
          ele.includes(
            `${formData.foreignName}_${formData.foreignKinaya}_${formData.username}`
          )
        );
        console.log(
          "🚀 ~ file: StudentsForm.jsx:128 ~ setTimeout ~ images:",
          images
        );
        console.log(
          "🚀 ~ file: StudentsForm.jsx:127 ~ setTimeout ~ `${formData.foreignName}_${formData.foreignKinaya}_${formData.username}`:",
          `${formData.foreignName}_${formData.foreignKinaya}_${formData.imageID}`
        );

        const imagePath = `studentsImages/${imageName}`;
        setFbImagePath(imageName);
        const imageRef = storageRef(storage, imagePath);

        getDownloadURL(imageRef)
          .then((downloadURL) => {
            if (downloadURL) {
              console.log("Download URL: ", downloadURL);
              setDownloadURL(downloadURL);
              // You can use the downloadURL to display the image in your application
            } else {
              console.error("Image not found.");
            }
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      }, 3000);
      // downloadURL
    }
  }, [images]);

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

    const imgRef = storageRef(
      storage,
      `studentsImages/${foreignName}_${foreignKinaya}_${imageID}.${
        studentAvatar?.type.split("/")[1]
      }`
    );

    try {
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

  const updateData = async (studentId, updatedData) => {
    const studentDocRef = doc(db, "studentsTable", studentId);

    try {
      await updateDoc(studentDocRef, {
        ...updatedData, // Include the updated data you want to set
        updateDate: new Date(), // Update the updateDate field with the current date
      });
      console.log(`Student with ID ${studentId} updated successfully.`);
    } catch (e) {
      console.error(`Error updating student with ID ${studentId}: `, e);
    }
    updateImage(updatedData);
  };

  const updateImage = async (data) => {
    const desertRef = storageRef(storage, fbImagePath);
    deleteObject(desertRef)
      .then(() => {
        // image deleted successfully
        console.log("image deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting image: ", error);
      });
    const { foreignName, foreignKinaya, studentAvatar, imageID } = data;
    const imgRef = storageRef(
      storage,
      `studentsImages/${foreignName}_${foreignKinaya}_${imageID}.${
        studentAvatar?.type.split("/")[1]
      }`
    );

    try {
      uploadBytes(imgRef, studentAvatar);
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
    setFormData({ ...formData, imageID: v4() });

    const form = event.currentTarget;

    // Check if the form is valid

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // Mark the form as validated
    setValidated(true);

    // Add custom validation logic here, if needed

    if (form.checkValidity() === true) {
      formStatus.action === "ADD" &&
        (await uploadData(formData, SFSessionsName, SFParentsNames));
      formStatus.action === "EDIT" &&
        (await updateData(selectedUser[0], formData));
      dispatch(toggle());

      setTimeout(() => {
        dispatch(toggle());
      }, 1500);
      setTimeout(() => {
        dispatch(toggle());
      }, 1600);
      setTimeout(() => {
        dispatch(toggle());
      }, 1700);
    }
    dispatch(setFormStatus({ show: false }));
  };

  const handleCancel = () => {
    dispatch(setFormStatus({ show: false }));
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

  // handle edit form
  const selectedUser = useSelector((state) => state.selectedUser.value);

  return (
    <div className="students-form  w-100 h-100 text-center">
      <Form onSubmit={handleSubmit}>
        <h2>{formStatus.action === "ADD" ? "إضافة" : "تعديل"}</h2>
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
                  schoolLogo={
                    formStatus.action === "EDIT" &&
                    prevFormData?.studentAvatar === formData.studentAvatar
                      ? downloadURL
                      : formData.studentAvatar
                  }
                  studentPic={studentPic}
                  handleLogoChange={handleInputChange}
                />
                {/*
                () => {
                    if (formStatus.action === "EDIT") {
                      console.log('shahin')
                      return downloadURL + "shahin";
                    }
                  }
                */}
              </div>
            </Col>
          </Row>
        </div>
        <div className="actions d-flex gap-4">
          {formStatus.action === "ADD" && (
            <Button variant="success" type="submit" className="w-75 my-5 ">
              حفظ
            </Button>
          )}
          {formStatus.action === "EDIT" && (
            <Button variant="success" type="submit" className="w-75 my-5 ">
              تعديل
            </Button>
          )}
          <Button
            onClick={handleCancel}
            variant="danger"
            className="w-75 my-5 "
          >
            إلغاء
          </Button>
        </div>
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
