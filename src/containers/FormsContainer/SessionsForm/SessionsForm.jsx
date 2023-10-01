import React, { useEffect, useState } from "react";
import "../StudentsForm/StudentsForm.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {
  AddDayForSession,
  FormInput,
  FormSelect,
  SchoolLogo,
  SessionDates,
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
import {
  AiOutlinePlus as Plus,
  AiOutlineCheck as Check,
  AiFillDelete as Cancel,
} from "react-icons/ai";

const StudentsForm = () => {
  const [sessionsOptionsSFArray, setSessionsOptionsSFArray] = useState([]);
  const [SFSessionsName, setSFSessionsName] = useState([]);

  const [parentsOptionsSFArray, setParentsOptionsSFArray] = useState([]);
  const [SFParentsNames, setSFParentsNames] = useState([]);

  const [studentPic, setStudentPic] = useState([]);

  const [addDay, setAddDay] = useState(false);

  const [newDate, setNewDate] = useState({});

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
    name: "",
    foreignName: "",
    sessionType: "",
    gender: "",
    teachersList: "",
    show: "",
    dates: [],
  });
  // const prevFormData = usePrevious(formData);
  const handleAddDate = (date) => {
    const newDates = [...formData.dates, date];
    setFormData({ ...formData, dates: newDates });
  };

  const dispatch = useDispatch();

  const sessions = useSelector((state) => state.sessions.value);
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
        sessions.find((student) => student.id === selectedStudent[0])
      );
      // console.log(
      //   "🚀 ~ file: StudentsForm.jsx:124 ~ useEffect ~ students.find:",
      //   formData
      // );

      // const { foreignName, foreignKinaya, username } = formData;
      // setTimeout(() => {
      //   // `studentsImages/${foreignName}_${foreignKinaya}_${username}`
      //   const imageName = images.find((ele) =>
      //     ele.includes(
      //       `${formData.foreignName}_${formData.foreignKinaya}_${formData.imageID}`
      //     )
      //   );

      //   const imagePath = `studentsImages/${imageName}`;
      //   setFbImagePath(imageName);
      //   const imageRef = storageRef(storage, imagePath);

      //   getDownloadURL(imageRef)
      //     .then((downloadURL) => {
      //       if (downloadURL) {
      //         console.log("Download URL: ", downloadURL);
      //         setDownloadURL(downloadURL);
      //         // You can use the downloadURL to display the image in your application
      //       } else {
      //         console.error("Image not found.");
      //       }
      //     })
      //     .catch((error) => {
      //       console.error("Error: ", error);
      //     });
      // }, 3000);
      // // downloadURL
    }
  }, []);

  // Handle form input changes

  const uploadData = async (data, SFSessionsName, SFParentsNames) => {
    // setFormData({
    //   ...formData,
    //   imageID: v4(),
    // });

    console.log("🚀 ~ file: StudentsForm.jsx:160 ~ uploadData ~ data:", data);
    const {
      name,
      foreignName,
      sessionType,
      gender,
      teachersList,
      show,
      dates,
    } = data;
    // setFormData({
    //   ...formData,
    //   imageID: v4(),
    // });
    // const session = SFSessionsName;
    // const savedParentName = SFParentsNames;

    // const imgRef = storageRef(
    //   storage,
    //   `studentsImages/${foreignName}_${foreignKinaya}_${imageID}.${
    //     studentAvatar?.type.split("/")[1]
    //   }`
    // );

    // try {
    //   uploadBytes(imgRef, studentAvatar);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    try {
      const docRef = await addDoc(collection(db, "sessionsTable"), {
        name,
        foreignName,
        sessionType,
        gender,
        teachersList,
        show,
        dates,
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
    const studentDocRef = doc(db, "sessionsTable", studentId);

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
    // updateImage(updatedData);
  };

  // const updateImage = async (data) => {
  //   const desertRef = storageRef(storage, fbImagePath);
  //   deleteObject(desertRef)
  //     .then(() => {
  //       // image deleted successfully
  //       console.log("image deleted successfully");
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting image: ", error);
  //     });
  //   const { foreignName, foreignKinaya, studentAvatar, imageID } = data;
  //   const imgRef = storageRef(
  //     storage,
  //     `studentsImages/${foreignName}_${foreignKinaya}_${imageID}.${
  //       studentAvatar?.type.split("/")[1]
  //     }`
  //   );

  //   try {
  //     uploadBytes(imgRef, studentAvatar);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const deleteData = async (studentId) => {
    console.log(
      "🚀 ~ file: StudentsForm.jsx:307 ~ deleteData ~ studentId:",
      studentId
    );

    if (studentId.length === 1) {
      await deleteDoc(doc(db, "sessionsTable", studentId[0]));
    } else if (studentId.length > 1) {
      studentId.forEach(async (id) => {
        await deleteDoc(doc(db, "sessionsTable", id));
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
        return;
      }
    } else if (Array.isArray(event)) {
      if (!Object.values(formData.sessions).includes(event[0])) {
        setFormData({
          ...formData,
          sessions: [...formData.sessions, event[0]],
        });
        return;
      }
    } else if (typeof event === "object") {
      console.log(
        "🚀 ~ file: SessionsForm.jsx:318 ~ handleInputChange ~ event:object",
        event.target.name
      );
      if (
        (event.target && event.target.name.includes("day")) ||
        (event.target && event.target.name.includes("from")) ||
        (event.target && event.target.name.includes("to"))
      ) {
        const index = event.target.name.split("-")[1];
        const inputName = event.target.name.split("-")[0];
        const updatedDates = [...formData.dates];
        updatedDates[index][inputName] = event.target.value;
        setFormData({
          ...formData,
          dates: updatedDates,
        });

        console.log(
          "🚀 ~ file: SessionsForm.jsx:341 ~ handleInputChange ~ formData.dates:",
          formData.dates
        );
        return;

        // const dateProperty = event.target.name.split(".")[1];
        // const dateValue = event.target.value;
        // const dayOfWeek = Object.keys(formData.dates)[0]; // You may need to change this to the correct day of the week
        // // Create a copy of the dates object
        // const updatedDates = { ...formData.dates };

        // // Update the specific property within the dates object
        // updatedDates[dayOfWeek][dateProperty] = dateValue;
        // // Update the formData state with the updated dates object
        // setFormData({
        //   ...formData,
        //   dates: updatedDates,
        // });
      }
      // Handle object input
      // Add your logic for handling object input here
      // For example, you can set formData based on the object properties
    }
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      formStatus.action === "ADD" &&
        (await uploadData(formData, SFSessionsName, SFParentsNames));
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

  const teachers = useSelector((state) => state.teachers.value);

  const teachersNamesOptions = teachers.map((teacher) => {
    return {
      label: teacher.teacherName,
      value: teacher.teacherName,
    };
  });
  const studentsFormData = [
    {
      title: "بيانات الحلقة",
      cols: [
        {
          required: true,
          md: 6,
          label: "الاسم",
          type: "text",
          name: "name",
          placeholder: "ادخل اسم الحلقة",
          value: formData.name,
          onChange: handleInputChange,
          pattern: "^[\u0621-\u064A\u0660-\u0669\\s]+$",
          feedback: "الرجاء ادخال حروف عربية ومسافات فقط.",
        },
        {
          required: true,
          md: 6,
          label: "الاسم الأجنبي",
          type: "text",
          name: "foreignName",
          placeholder: "ادخل الاسم الأجنبي",
          value: formData.foreignName,
          onChange: handleInputChange,
          pattern: "^[A-Za-z][A-Za-z0-9\\s]*$",
          feedback: "الرجاء ادخال حروف الانجليزية فقط",
        },
        {
          required: true,
          md: 6,
          label: "النوع",
          type: "select",
          name: "sessionType",
          value: formData.sessionType,
          onChange: handleInputChange,
          placeholder: "النوع",
          options: [
            {
              label: "تحديد",
              value: "تحديد",
            },
            {
              label: "حفظ",
              value: "حفظ",
            },
            {
              label: "تثبيت",
              value: "تثبيت",
            },
            {
              label: "مراجعة",
              value: "مراجعة",
            },
          ],
        },
        {
          required: true,
          md: 6,
          label: "الفئة",
          type: "select",
          name: "gender",
          value: formData.gender,
          onChange: handleInputChange,
          placeholder: "النوع",
          options: [
            {
              label: "تحديد",
              value: "تحديد",
            },
            {
              label: "ذكور",
              value: "ذكور",
            },
            {
              label: "إناث",
              value: "إناث",
            },
            {
              label: "ذكور و إناث",
              value: "ذكور و إناث",
            },
          ],
        },
        {
          required: true,
          md: 6,
          label: "قائمة المعلمين",
          type: "select",
          name: "teachersList",
          value: formData.teachersList,
          onChange: handleInputChange,
          placeholder: "اختر المعلمين",
          options: [
            {
              label: "تحديد",
              value: "تحديد",
            },
            ...teachersNamesOptions,
          ],
        },
        {
          required: true,
          md: 6,
          label: "يعرض علي واجهة المستخدم ؟",
          type: "select",
          name: "show",
          value: formData.show,
          onChange: handleInputChange,
          placeholder: "",
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
      ],
    },
  ];

  // const sesstionsDates = Object.keys(formData.dates);
  // console.log(
  //   "🚀 ~ file: SessionsForm.jsx:569 ~ StudentsForm ~ sesstionsDates:",
  //   sesstionsDates
  // );

  // const times = Object.values(formData.dates[sesstionsDates[index]]);
  // console.log("🚀 ~ file: SessionsForm.jsx:575 ~ StudentsForm ~ times:", times);

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
            <Card.Title>حذف الحلقة</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>هل تريد حقا حذف هذه الحلقة ؟</Card.Text>
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
            <h3>مواعيد الحلقة</h3>
            <div className="sesstion-dates">
              <div className="headers">
                <Row>
                  <Col className="header" xs={4}>
                    اليوم
                  </Col>
                  <Col className="header" xs={4}>
                    من
                  </Col>
                  <Col className="header" xs={4}>
                    الي
                  </Col>
                </Row>
              </div>
              <div className="body">
                {formData.dates.map((date, index) => {
                  return (
                    <SessionDates
                      formData={formData}
                      setFormData={setFormData}
                      date={date}
                      handleInputChange={handleInputChange}
                      index={index}
                    />
                  );
                })}
                {addDay && (
                  <AddDayForSession
                    formData={formData}
                    newDate={newDate}
                    setNewDate={setNewDate}
                    // handleInputChange={handleInputChange}
                    index={formData.dates.length + 1}
                  />
                )}
                <button
                  onClick={() => {
                    setAddDay(!addDay);
                    // if (
                    //   addDay &&
                    //   !formData.dates.includes(newDate) &&
                    //   newDate.day !== undefined &&
                    //   newDate.from !== undefined &&
                    //   newDate.to !== undefined
                    // ) {
                    //   setFormData({
                    //     ...formData,
                    //     dates: [...formData.dates, newDate],
                    //   });
                    // }
                  }}
                  className={`btn  btn-info mt-2`}
                  type="button"
                >
                  {addDay ? (
                    <div className="svg add-remove">
                      <Check
                        className="add"
                        style={{
                          border: "1px solid red",
                          width: "25px",
                          height: "25px",
                        }}
                        onClick={() => {
                          if (
                            addDay &&
                            !formData.dates.includes(newDate) &&
                            newDate.day !== undefined &&
                            newDate.from !== undefined &&
                            newDate.to !== undefined
                          ) {
                            setFormData({
                              ...formData,
                              dates: [...formData.dates, newDate],
                            });
                          }
                        }}
                      />

                      <Cancel className="remove" />
                    </div>
                  ) : (
                    <div className="svg">
                      <Plus />
                    </div>
                  )}
                </button>
              </div>
            </div>
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
