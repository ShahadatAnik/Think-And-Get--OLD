import Axios from 'axios';
import { sha256, sha224 } from 'js-sha256';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation
} from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function ForgotPassword(){
    const [new_password, setNew_password] = React.useState('');
    const [confirm_password, setConfirm_password] = React.useState('');
    const [email, setEmail] = React.useState('');


    useEffect(() => {
        console.log(localStorage.getItem('resetMode'));
        console.log(localStorage.getItem('emailToReset'));
        if(localStorage.getItem('resetMode')== 'true'){
            setEmail(localStorage.getItem('emailToReset'));
        }
    },[]);

    const reset_password = () => {
        //setEmail(query.get("email"));
        //console.log(email);
        if(new_password === confirm_password){
            axios.get("http://localhost:3001/user/reset_password/", {
                params:{
                    email: email,
                    password: sha256(new_password),
                }
            }).then((response) => {
                if(response.data === "Password updated"){
                    alert("Password updated");
                    localStorage.setItem('resetMode', "false");
                    localStorage.setItem('emailToReset', "");
                    window.location.href = "/..";
                }
                else{
                    alert("Password not updated");
                }
            });
        }
        else{
            alert("Both password match with each other")
        }
    }
    return(<div>
        <h1>Reset Password</h1>
        <input type="password" placeholder="New Password" onChange={(e) => {
            setNew_password(e.target.value);
        }}/>
        <input type="password" placeholder="Confirm Password" onChange={(e) => {
            setConfirm_password(e.target.value);
        }}/>
        <button type="button" onClick = {()=>{reset_password()}}>Reset Password</button><br></br>
    </div>);
}