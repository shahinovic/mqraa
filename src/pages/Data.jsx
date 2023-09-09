import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect } from "react";

const Data = () => {
  const studentsData = [
    {
      name: "أسامة",
      nickname: "العنابي",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ جمال طيبي",
        2: "حلقة الشيخ رمضان بحري",
      },
      username: "student98721",
      date: "21-04-2011",
      birthPlace: "عين الحجل",
      nationality: "",
      identityType: "",
    },
    {
      name: "امجد",
      nickname: "خليف",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ عبدالحميد",
      },
      username: "student1114317",
      date: "21-04-2011",
      birthPlace: "الجلفة",
      nationality: "",
      identityType: "",
    },
    {
      name: "ايوب",
      nickname: "حمدون",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ حمزة مهرهرة",
      },
      username: "student1014915",
      date: "21-04-2011",
      birthPlace: "البوريرة",
      nationality: "",
      identityType: "",
    },
    {
      name: "ايوب",
      nickname: "سعيدون",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ علي زقاي",
      },
      username: "student1018348",
      date: "21-04-2011",
      birthPlace: "عنابة",
      nationality: "",
      identityType: "",
    },
    {
      name: "ابرهيم",
      nickname: "بن بتقة",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ علي زقاي",
        2: "حلقة الشيخ أحمد لملوم",
      },
      username: "student978950",
      date: "21-04-2011",
      birthPlace: "بوسعادة",
      nationality: "",
      identityType: "",
    },
    {
      name: "إسحاق",
      nickname: "رحموني",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ زكريا العنابي",
      },
      username: "student1028674",
      date: "21-04-2011",
      birthPlace: "تقرت",
      nationality: "",
      identityType: "",
    },
    {
      name: "إسماعيل",
      nickname: "فاسي",
      gender: "ذكر",
      sessions: {
        1: "حلقة الشيخ حمزة مهرهرة",
      },
      username: "student1027281",
      date: "21-04-2011",
      birthPlace: "الحمامات",
      nationality: "",
      identityType: "",
    },
    {
      name: "تجربة",
      nickname: "تجربة",
      gender: "ذكر",
      sessions: {
        1: "حلقة تجريبية",
      },
      username: "student6192976",
      date: "21-04-2011",
      birthPlace: "",
      nationality: "",
      identityType: "",
    },
  ];
  console.log(
    "🚀 ~ file: Data.jsx:114 ~ Data ~ studentsData:",
    studentsData.length
  );
  const addEle = async (ele) => {
    const {
      name,
      nickname,
      gender,
      sessions,
      username,
      date,
      birthPlace,
      nationality,
      identityType,
    } = ele;
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, "studentsTable"),
          where("username", "==", username)
        )
      );

      if (querySnapshot.size === 0) {
        await addDoc(collection(db, "studentsTable"), {
          name,
          nickname,
          gender,
          sessions,
          username,
          date,
          birthPlace,
          nationality,
          identityType,
        });
      }
      //   getStudents();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // studentsData.forEach((ele) => addEle(ele));
  }, []);

  return <div>data</div>;
};

export default Data;
