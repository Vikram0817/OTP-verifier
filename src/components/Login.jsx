import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { OTP } from "../otp";

export default function Login(){

    const [enterOtp, setEnterOtp] = useState(["", "", "", ""])
    
    const otpBoxRef = useRef([]);
    
    const otp = useRecoilValue(OTP);

    function handleChange(digit, idx){
        setEnterOtp(prevVal => {
            const updatedOtp = [...prevVal];
            updatedOtp[idx] = digit;
            console.log(updatedOtp);
            return updatedOtp;
        })

        if(digit && idx < 4){
            otpBoxRef.current[idx + 1].focus();
        }
    }

    function handleBackspaceAndEnter(e, index) {
        if(e.key === "Backspace" && !e.target.value && index > 0){
          otpBoxRef.current[index - 1].focus()
        }
        if(e.key === "Enter" && e.target.value && index < 4){
          otpBoxRef.current[index + 1].focus()
        }
    }

    function handleLogin(){
        if(otp == enterOtp.join("")){
            alert("Logged in Successful!")
        }else{
            alert("Wrong OTP! Try again")
        }
    }

    return(
        <>
            <div>
                {enterOtp.map((digit, index)=>(
                    <input className="otp-input" type="number" key={index} value={digit} maxLength={1}  ref={refrance => otpBoxRef.current[index] = refrance}
                    onChange={(e)=> handleChange(e.target.value, index)} 
                    onKeyUp={e => handleBackspaceAndEnter(e, index)}
                    />))}
                    <br></br>
            </div>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}