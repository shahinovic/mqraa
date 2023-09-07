import React, { useEffect, useRef } from "react";
import "./LogIn.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BsArrowLeft as ArrowLeft } from "react-icons/bs";

const LogIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSubmit = () => {
    loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: window.location.origin,
      },
    });
  };

  const logInBtn = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      logInBtn.current.classList.add("show");
    }, 300);
  }, []);

  return (
    <div className="log-in">
      <div className="layer">
        <div className="cta" dir="rtl">
          <p className="text-muted">تسجيل الدخول</p>
          <h1 className="mb-5">مرحبا بك في موقعنا</h1>
          <button ref={logInBtn} className="log-in-btn " onClick={handleSubmit}>
            <span>تسجيل الدخول</span>
            <ArrowLeft className="arrow fs-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
