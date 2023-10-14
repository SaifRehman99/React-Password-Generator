import React from "react";

const StrengthChecker = ({ password }) => {
  const getPasswordStrength = () => {
    const length = password?.length;
    
    if (length < 1) return "";
    else if (length < 4) return "Very Weak";
    else if (length < 8) return "Poor";
    else if (length < 12) return "Medium";
    else if (length < 16) return "Strong";
    else return "Very Strong";
  };

  if(!getPasswordStrength()) return <React.Fragment/>;


  return <div className="flex justify-between color-white">
    <p>Strength:</p>
    <p>{getPasswordStrength()}</p>
  </div>;
};

export default StrengthChecker;
