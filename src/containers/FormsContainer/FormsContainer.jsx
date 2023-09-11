import React from "react";
import { FormsRouter } from "../../components";
import "./FormsContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { setFormStatus } from "../../services/reducers/showFormSlice";

const FormsContainer = () => {
  const show = useSelector((state) => state.showForm.value);
  const dispatch = useDispatch();
  const handleFormsContainerClick = (e) => {
    e.target.classList.contains("forms-container") &&
      dispatch(setFormStatus(false));
  };
  return (
    <div
      onClick={(e) => handleFormsContainerClick(e)}
      className={`forms-container ${show ? "show" : ""}`}
    >
      <FormsRouter />
    </div>
  );
};

export default FormsContainer;

/*

عايزين نعمل فانكشن عاملة زي  ال redux
يا تدينا اوبجيكت فيه داتا او اوبجيكت فاضي


*/
