import { useRef } from "react";

const SchoolLogo = ({ edit, schoolLogo, setSchoolLogo }) => {
  const handleLogoChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSchoolLogo(imageUrl);
    }
    console.log(schoolLogo);
  };
  const changeLogo = useRef(null);
  const changeLogoInput = useRef(null);
  const handleLogoClick = () => {
    changeLogoInput.current.click();
  };
  return (
    <>
      <img src={schoolLogo} alt="shool logo" />
      {!edit && (
        <div ref={changeLogo} onClick={handleLogoClick} className="change-logo">
          <span className="change">تغيير</span>
          <input
            ref={changeLogoInput}
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
      )}
    </>
  );
};

export default SchoolLogo;
