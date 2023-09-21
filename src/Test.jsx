import React, { useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./config/firebase";

const Test = () => {
  //   const [downloadURL, setDownloadURL] = useState(null);
  //   const [images, setImages] = useState([]);
  // const listFilesInFolder = async (folderPath) => {
  //   const storageRef = ref(storage, folderPath); // Replace with your Firebase Storage reference
  //   try {
  //     const items = await listAll(storageRef);

  //     // Extract the names of the items (files and subfolders) within the folder
  //     const itemNames = items.items.map((item) => item.name);

  //     return itemNames;
  //   } catch (error) {
  //     console.error("Error listing files in folder: ", error);
  //     return [];
  //   }
  // };
  // const folderPath = "studentsImages"; // Replace with the path to your folder
  // listFilesInFolder(folderPath)
  //   .then((fileNames) => {
  //     setImages(fileNames);
  //   })
  //   .catch((error) => {
  //     console.error("Error: ", error);
  //   });

  // const imageName = images.find((ele) =>
  //   ele.includes("abdelrahman_mohamed_abdelrahman88")
  // );
  // const imagePath = `studentsImages/${imageName}`;

  // const imageRef = ref(storage, imagePath);

  // getDownloadURL(imageRef)
  //   .then((downloadURL) => {
  //     if (downloadURL) {
  //       console.log("Download URL: ", downloadURL);
  //       setDownloadURL(downloadURL);
  //       // You can use the downloadURL to display the image in your application
  //     } else {
  //       console.error("Image not found.");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error: ", error);
  //   });

  return (
    <div>
      {/* <img src={downloadURL} alt="" /> */}
      {/* {imageName} */}
      shahin
    </div>
  );
};

export default Test;

// Example usage:

// [
//     "abdallah_nagah_abdallah20.jpeg",
//     "abdelrahman_mohamed_abdelrahman88.jpeg",
//     "ahmed_shahin_shahin99.jpeg",
//     "esmail_adel_esmail99.jpeg",
//     "ibrahim_magdy_ibrahim88.jpeg",
//     "khaled_mohamed_khaled77.jpeg",
//     "mahmoud_abdelsalam_mahmoud99.jpeg",
//     "mahmoud_salem_salem77.png",
//     "mohamed_khaled_mohamed9987.jpeg",
//     "mohamed_shahin_shahin88.png",
//     "mohamed_talat_talat88.png",
//     "mostafa_abdallah_mostafa.jpeg",
//     "oihll_lkjjkh_kljkljkjkl.jpeg",
//     "sobhy_mahmoud_sobhy88.jpeg",
//     "taha_mahmoud_taha88.jpeg"
// ]
