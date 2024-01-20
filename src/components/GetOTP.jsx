import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { OTP } from "../otp";
import { useNavigate } from "react-router-dom";

export default function GetOTP() {

    const [number, setNumber] = useState("");
    const setOtp = useSetRecoilState(OTP);

    const navigate = useNavigate();

    function getOTP() {
        if(number < 1000000000 || number > 9999999999){
            alert("Enter a valid number!")
            return;
        }
        const ans =  Math.floor(Math.random() * 10000);
        if(ans < 1000){
            return getOTP();
        }
        setOtp(ans);
        alert(`Your OTP is: ${ans}`)
        navigate("/Login")
    }

    return (
        <>
            <input className="phoneNum" type="text" placeholder="Enter your mobile number" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={getOTP}>Send OTP</button>
        </>
    )
}