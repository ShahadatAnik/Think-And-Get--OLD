import Axios from 'axios';
import { sha256, sha224 } from 'js-sha256';
import { BrowserRouter, Routes, Route, useNavigate, redirect } from "react-router-dom";
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ForgotPassword(){
    const [email, setEmail] = React.useState('');
    const [verify_code, setVerify_code] = React.useState('');
    const [generatedcode, setGeneratedcode] = React.useState('');

    useEffect(() => {
        setGeneratedcode(makeid(5));
      },[]);

      const makeid=(length) =>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const forgot_password = () => {
        
        axios.get('http://localhost:3001/user/forgot_password/', {
            params: {
                email: email,
                code: generatedcode
            }
        }).then((response)=>{
            alert(response.data);
        })
    }

    const submit = () => {
        if(generatedcode != verify_code){
            alert('Wrong verification code')
        }
        else{
            //Redirect to reset password page
            //alert('Correct verification code')
            localStorage.setItem('resetMode', 'true');
            localStorage.setItem('emailToReset', email);
            window.location.href = "/reset_password";
            
        }
    }
    return(
        <div>
            Have you forgot your password? <br></br>
            Enter your email address and we will send you a verification code to reset your password.<br></br>
            <div class="mb-6">
            <input id="outlined-basic" label="" type="email" name="email" onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <button type="button" onClick = {()=>{forgot_password()}}>Send verification code</button><br></br>
      Enter the code here: <br></br>
                    <input id="outlined-basic" label="Product Name" type="text" name="productName" onChange={(e)=>{
        setVerify_code(e.target.value)
      }}/>   
      <button type="button" onClick = {()=>{submit()}}>Submit</button><br></br>
                        </div>
        </div>
    );
}