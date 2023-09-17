import { useRef } from "react";

const SchoolLogo = ({
  edit,
  schoolLogo,
  name,
  setSchoolLogo,
  handleLogoChange,
  studentPic,
}) => {
  console.log(
    "🚀 ~ file: SchoolLogo.jsx:10 ~ handleLogoChange:",
    handleLogoChange
  );

  if (handleLogoChange === undefined) {
    handleLogoChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setSchoolLogo(imageUrl);
      }
    };
  }
  const changeLogo = useRef(null);
  const changeLogoInput = useRef(null);
  const handleLogoClick = () => {
    changeLogoInput.current.click();
  };

  return (
    <>
      <img
        src={typeof schoolLogo === "string" ? schoolLogo : studentPic}
        alt=""
      />
      {!edit && (
        <div ref={changeLogo} onClick={handleLogoClick} className="change-logo">
          <span className="change">تغيير</span>
          <input
            ref={changeLogoInput}
            name={name}
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            webkitdirectory
          />
        </div>
      )}
    </>
  );
};

export default SchoolLogo;
