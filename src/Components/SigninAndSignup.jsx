import React, { useState } from "react";
import "./module.css";
import "./SigninAndSignup.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";


function SigninAndSignup() {
  const [action, setAction] = useState("Sign In");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={openModal} className="modal-button">
        SignUp
      </button>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            zIndex: "9999",
          }}
        >
          <div className="body">
            <div className="container">
            <button onClick={closeModal} className="modal-butn">
            <ImCross />
          </button>
            
              <div className="header">
                <div className="text">{action}</div>
                
                <div className="underline"></div>
              </div>
              <div className="inputs">
                {action === "Sign In" ? (
                  <div></div>
                ) : (
                  <div className="input1">
                    <FaRegCircleUser className="icon" />
                    <input type="text" placeholder="Enter Full Name" />
                  </div>
                )}
                {action === "Sign In" ? (
                  <div></div>
                ) : (
                  <div className="input1">
                    <FaPhoneAlt className="icon" />
                    <input type="text" placeholder="Phone Number" />
                  </div>
                )}
                <div className="input1">
                  <MdOutlineMail className="icon" />
                  <input type="email" placeholder="Email Id" />
                </div>
                <div className="input1">
                  <RiLockPasswordFill className="icon" />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <div className="forgot-password">
                  Lost Password? <span>Click Here!</span>
                </div>
              )}
              <div className="submit-container">
                <div
                  className={action === "Sign In" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                >
                  Sign Up
                </div>
                <div
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Sign In");
                  }}
                >
                  Sign In
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}

export default SigninAndSignup;
