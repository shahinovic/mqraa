import React, { useEffect, useState } from "react";
// import "./StudentsForm.css";
import "../StudentsForm/StudentsForm.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {
  FormInput,
  FormSelect,
  SchoolLogo,
  StudentsFilter,
  useLocalStorage,
} from "../../../components";
import { useDispatch, useSelector } from "react-redux";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
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
import { setSelectedUser } from "../../../services/reducers/selectedUserSlice";

const StudentsForm = () => {
  const [sessionsOptionsSFArray, setSessionsOptionsSFArray] = useState([]);
  const [SFSessionsName, setSFSessionsName] = useState([]);

  const [parentsOptionsSFArray, setParentsOptionsSFArray] = useState([]);
  const [SFParentsNames, setSFParentsNames] = useState([]);

  const [studentPic, setStudentPic] = useState([]);

  // const [addParent, setAddParent] = useState([]);

  const [downloadURL, setDownloadURL] = useState(null);
  const [images, setImages] = useState([]);
  const [fbImagePath, setFbImagePath] = useState("");

  const formStatus = useSelector((state) => state.showForm.value);
  useEffect(() => {
    console.log(
      "🚀 ~ file: StudentsForm.jsx:45 ~ StudentsForm ~ formStatus:",
      formStatus
    );
  }, [formStatus]);

  // Define state variables for form validation
  const [validated, setValidated] = useState(false);

  // Define state variables for form input values and validation
  const [formData, setFormData] = useState({
    // Define initial values for form inputs here
    name: "",
    kinaya: "",
    dateOfBirth: "",
    relation: "",
    phoneNumber: "",
    email: "",
    job: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
    studentAvatar: null,
    imageID: "",
  });
  const prevFormData = usePrevious(formData);

  const dispatch = useDispatch();

  const parents = useSelector((state) => state.parents.value);
  const selectedStudent = useSelector((state) => state.selectedUser.value);
  const listFilesInFolder = async (folderPath) => {
    const storageImagesRef = storageRef(storage, folderPath); // Replace with your Firebase Storage reference
    try {
      const items = await listAll(storageImagesRef);

      // Extract the names of the items (files and subfolders) within the folder
      const itemNames = items.items.map((item) => {
        return item.name;
      });

      return itemNames;
    } catch (error) {
      console.error("Error listing files in folder: ", error);
      return [];
    }
  };

  const folderPath = "parentsImages";
  useEffect(() => {
    setFormData({
      ...formData,
      imageID: v4(),
    });
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
      setFormData(parents.find((parent) => parent.id === selectedStudent[0]));
      console.log(
        "🚀 ~ file: StudentsForm.jsx:124 ~ useEffect ~ students.find:",
        formData
      );
      setTimeout(() => {
        const imageName = images.find((ele) =>
          ele.includes(`${formData.imageID}`)
        );

        const imagePath = `parentsImages/${imageName}`;
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

  const uploadData = async (data) => {
    console.log("🚀 ~ file: ParentsForm.jsx:153 ~ uploadData ~ data:", data);
    const {
      name,
      kinaya,
      dateOfBirth,
      relation,
      phoneNumber,
      email,
      job,
      address,
      username,
      password,
      confirmPassword,
      studentAvatar,
      imageID,
    } = data;

    const imgRef = storageRef(
      storage,
      `parentsImages/${imageID}.${studentAvatar?.type.split("/")[1]}`
    );

    try {
      uploadBytes(imgRef, studentAvatar);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "parentsTable"), {
        name,
        kinaya,
        dateOfBirth,
        relation,
        phoneNumber,
        email,
        job,
        address,
        username,
        password,
        confirmPassword,
        // studentAvatar,
        imageID,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateData = async (updatedData, studentId) => {
    console.log(
      "🚀 ~ file: StudentsForm.jsx:240 ~ updateData ~ updatedData:",
      updatedData.imageID
    );
    const studentDocRef = doc(db, "parentsTable", studentId);

    try {
      await updateDoc(studentDocRef, {
        ...updatedData, // Include the updated data you want to set
        updateDate: new Date(), // Update the updateDate field with the current date
      });
      console.log(`Student with ID ${studentId} updated successfully.`);
    } catch (e) {
      console.error(`Error updating student with ID ${studentId}: `, e);
    }
    dispatch(setSelectedUser([]));
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
      `parentsImages/${imageID}.${studentAvatar?.type.split("/")[1]}`
    );

    try {
      uploadBytes(imgRef, studentAvatar);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteData = async (studentId) => {
    console.log(
      "🚀 ~ file: StudentsForm.jsx:307 ~ deleteData ~ studentId:",
      studentId
    );

    if (studentId.length === 1) {
      await deleteDoc(doc(db, "parentsTable", studentId[0]));
    } else if (studentId.length > 1) {
      studentId.forEach(async (id) => {
        await deleteDoc(doc(db, "parentsTable", id));
      });
    }
    dispatch(setSelectedUser([]));
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
    console.log(
      "🚀 ~ file: StudentsForm.jsx:307 ~ handleSubmit ~ event:",
      event.target
    );
    // setFormData({ ...formData, imageID: v4() });
    event.preventDefault();
    setTimeout(() => {
      console.log(
        "🚀 ~ file: StudentsForm.jsx:313 ~ handleSubmit ~ formData:",
        formData
      );
    }, 1000);

    const form = event.currentTarget;

    // Check if the form is valid

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // Mark the form as validated
    setValidated(true);

    // Add custom validation logic here, if needed

    if (form.checkValidity() === true) {
      formStatus.action === "ADD" && (await uploadData(formData));
      formStatus.action === "EDIT" &&
        (await updateData(formData, selectedUser[0]));
      formStatus.action === "DELETE" && (await deleteData(selectedUser));
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
      title: "معلومات ولي الأمر",
      cols: [
        {
          required: true,
          md: 6,
          label: "الاسم",
          type: "text",
          name: "name",
          placeholder: "ادخل اسم الولي",
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
          placeholder: "ادخل كنية الولي",
          value: formData.kinaya,
          onChange: handleInputChange,
          pattern: "^[\u0621-\u064A\u0660-\u0669]+$",
          feedback: "الرجاء ادخال حروف عربية فقط.",
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
          required: true,
          md: 6,
          label: "صلة القرابة",
          type: "select",
          name: "relation",
          value: formData.relation,
          onChange: handleInputChange,
          placeholder: "حدد صلة القرابة",
          options: [
            {
              label: "تحديد",
              value: "تحديد",
            },
            {
              label: "أب",
              value: "أب",
            },
            {
              label: "أم",
              value: "أم",
            },
          ],
        },
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
        {
          required: true,
          md: 6,
          label: "الوظيفة",
          type: "text",
          name: "job",
          placeholder: "",
          value: formData.job,
          onChange: handleInputChange,
        },
        {
          required: true,
          md: 6,
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
  ];

  // handle edit form
  const selectedUser = useSelector((state) => state.selectedUser.value);

  // handle edit form

  const handleEditForm = async () => {
    await updateData(formData, selectedUser[0]);
  };
  return (
    <div className="students-form  w-100 h-100  text-center">
      {formStatus.action === "DELETE" ? (
        <Card>
          <Card.Body>
            <Card.Title>حذف مستخدم</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>هل تريد حقا حذف هذا المستخدم ؟</Card.Text>
            <Button onClick={handleSubmit} variant="danger">
              حذف
            </Button>
            <Button onClick={handleCancel} variant="secondary">
              الغاء
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Form onSubmit={handleSubmit}>
          <h2>{formStatus.action === "ADD" ? "إضافة" : "تعديل"}</h2>
          {/* <div>
            <h3>معلومات الانتساب</h3>
            <StudentsFilter filterInputs={filterInputs} />
          </div> */}
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

          {/* <div>
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
          </div> */}
          <div>
            <h3>صورة ولي الأمر :</h3>
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
              <Button
                variant="success"
                // onClick={handleEditForm}
                type="submit"
                className="w-75 my-5 "
              >
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
      )}
    </div>
  );
};

export default StudentsForm;
