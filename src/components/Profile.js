import React, { useState } from 'react';
import OtpInput from './OtpInput';

const Profile = () => {
    const [otp, setOtp] = useState(0);    
  
    const handleChange = (value) => {
        setOtp(value);
        console.log("OTP Value >>>>>> "+value);        
    };
  
    return (
      <div>
        <OtpInput
          opacity="1"
          value={otp}
          onChange={handleChange}
          numInputs={6}
          shouldAutoFocus={true}
          separator={
            <span>
              {window.innerWidth < 380 ? (
                <span>&nbsp;&nbsp;</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </span>
          }
          isInputNum={true}
          inputStyle={{
            borderStyle: "ridge",
            fontSize: "1rem",
            border: "1px solid #AFB4C5",
            // borderColor: "#AFB4C5",
            borderRadius: "8px",
            WebkitTextFillColor: "#000",
            width: "2.1rem",
            height: "2.4rem",
            fontWeight: "300",
            backgroundColor: "transparent",
            outline: "none",
          }}
        />
      </div>
    )
  }

export default Profile