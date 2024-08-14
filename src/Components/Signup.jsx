import React, { useState } from "react";
import home from "./svg/home.svg";
import { useNavigate } from "react-router-dom";

function InputSection({ type, placeholder, onNext }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleNextClick = () => {
    if (inputValue) {
      onNext(inputValue);
    }
  };

  return (
    <div className="input-section">
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="input-section-input"
      />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

function OtpSection({ contactInfo }) {
  return (
    <div className="otp-section">
      <p>
        OTP sent to your {contactInfo.type} ({contactInfo.value})
      </p>
      <div className="otp-fields">
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
        <input type="text" maxLength="1" />
      </div>
      <button>Next</button>
    </div>
  );
}

function AdditionalInfo({ isSignup, toggleSignup }) {
  return (
    <div className="additional">
      <div className="social">
        <p>Social login</p>
        <ul >
          <li><img src="https://login.decathlon.net/assets/google-CXYtgH5h.svg" alt="google" /></li>
          <li><img src="https://login.decathlon.net/assets/facebook-WuuN3sW7.svg" alt="facebook" /></li>
          <li><img src="https://login.decathlon.net/assets/apple-BbTnnE8R.svg" alt="apple" /></li>
        </ul>
      </div>
      <div className="condition">
        <p>
          {isSignup ? "Already have an account?" : "No account? Create one!"}
        </p>
        <a href="/" onClick={toggleSignup}>
          {isSignup ? "Login" : "Create your DECATHLON account"}
        </a>
      </div>
      <div className="privacy">
        <ul>
          <li>Having trouble logging in?</li>
          <li>Privacy</li>
        </ul>
        <div>
          <span>English</span>
        </div>
        <div className="copyright">
          <p>
            This site is protected by reCaptcha.{" "}
            <a href="https://policies.google.com/privacy">
              Google Privacy Policy
            </a>{" "}
            applies as well as{" "}
            <a href="https://policies.google.com/terms">
              their terms of service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

const Signup = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [isSignup, setIsSignup] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const navigate = useNavigate()

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
    setContactInfo(null); // Reset contact info when method changes
  };

  const handleNext = (value) => {
    setContactInfo({ type: selectedMethod, value });
  };

  const toggleSignup = (e) => {
    e.preventDefault();
    setIsSignup(!isSignup);
  };

  const handleHomeClick =() => {
    navigate("/")
  }

  return (
    <div className="signup-main">
      <div className="nav">
        <div className="nav-left" onClick={handleHomeClick}>
          <img src={home} alt="" />
          <span>Back</span>
        </div>
        <div className="nav-right">
          <img
            src="https://login.decathlon.net/assets/decathlon-logo-vp-DDH3S1xy.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className="sign">
        <div className="img">
          <img
            src="https://login.decathlon.net/assets/side_picture-B36EUE8G.jpg"
            alt="pic"
          />
        </div>
        <div className="form-div">
          <div className="form">
            <h3>{isSignup ? "Let's go!" : "Login"}</h3>
            <p>
              {" "}
              {isSignup
                ? " Create an account once and log all Decathlon sites and partners in one click! "
                : "Go to your DECATHLON account here."}{" "}
            </p>
            <div className="method">
              <div
                className={`method-option ${
                  selectedMethod === "email" ? "active" : ""
                }`}
                onClick={() => handleMethodClick("email")}
              >
                Email
              </div>
              <div
                className={`method-option ${
                  selectedMethod === "phone" ? "active" : ""
                }`}
                onClick={() => handleMethodClick("phone")}
              >
                Phone number
              </div>
            </div>

            {contactInfo ? (
              <OtpSection contactInfo={contactInfo} />
            ) : (
              <>
                {selectedMethod === "email" && (
                  <>
                  <label> Enter an email address </label>
                  <InputSection
                    type="email"
                    placeholder="Email"
                    onNext={handleNext}
                    />
                    </>
                )}

                {selectedMethod === "phone" && (
                  <>
                  <label htmlFor="">Mobile phone number</label>
                  <InputSection
                    type="tel"
                    placeholder=" Mobile phone number"
                    onNext={handleNext}
                    />
                    </>
                )}

                <AdditionalInfo
                  isSignup={isSignup}
                  toggleSignup={toggleSignup}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
