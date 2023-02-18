
import Axios from 'axios';
import { sha256, sha224 } from 'js-sha256';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Signup(){
    const navigate = useNavigate();
  const [isInvalidName, setIsInvalidName] = React.useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = React.useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = React.useState(false);
  const [isInvalidPhone, setIsInvalidPhone] = React.useState(false);
  const [verify_code, setVerify_code] = React.useState('');
  const [generatedcode, setGeneratedcode] = React.useState('');
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    password_re: '',
    phone: '',
  });

  useEffect(() => {
    setGeneratedcode(makeid(5));
  },[]);

  const [show, setShow] = React.useState('password');

  const handleInput = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (value.length < 3) {
        setIsInvalidName(true);
      } else {
        setIsInvalidName(false);
      }
    }
    if (name === 'email') {
      if (!value.includes('@')) {
        setIsInvalidEmail(true);
      } else {
        setIsInvalidEmail(false);
      }
    }
    if (name === 'password') {
      if (value.length < 6) {
        setIsInvalidPassword(true);
      } else {
        setIsInvalidPassword(false);
      }
    }
    
    if (name === 'phone') {
      if (value.length < 11 || value.length > 11) {
        setIsInvalidPhone(true);
      } else {
        setIsInvalidPhone(false);
      }
    }
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


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

  const verifyEmail = () => {
    //setGeneratedcode(makeid(5));
    //console.log(generatedcode)
    Axios.post(
        'http://localhost:3001/user/verifyemail/',
        {
          code: generatedcode,
          email: user.email,
        });
    }

  const onSubmit = e => {
    
    if (
      isInvalidName ||
      isInvalidEmail ||
      isInvalidPassword ||
      isInvalidPhone ||
      (user.password !== user.password_re)
    ) {
      e.preventDefault();
      alert('Please fill out the form correctly');
    } 
    else if(generatedcode != verify_code){
        // console.log(generatedcode)
        // console.log(verify_code)
        alert('Wrong verification code')
    }
    else {
      //email verification
      Axios.post(
        'http://localhost:3001/user/create_user/',
        {
          name: user.name,
          email: user.email,
          password: sha256(user.password),
          phone: user.phone,
        },
        navigate('/Login')
      );
    }
  };
    return (
        <div>
            <div class="rounded-lg shadow-lg bg-white w-full max-w-lg mx-auto p-8 md:p-12 my-10">
                <h2 class="text-2xl font-bold text-center mb-8">Sign Up</h2>
                <form onSubmit={onSubmit}>
                    <div class="mb-6">
                        <input
                        name="name"
                        isInvalid={isInvalidName}
                        onChange={handleInput}
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="fullName"
                            placeholder="Full Name"
                        />
                    </div>
                    <div class="mb-6">
                        <input
                            name="phone"
                            isInvalid={isInvalidPhone}
                            onChange={handleInput}
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="phoneNumber"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div class="mb-6">
                        <input
                        name="email"
                        isInvalid={isInvalidEmail}
                        onChange={handleInput}
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="emailAddress"
                            placeholder="Email address"
                        />
                    </div>
                    <div class="mb-6">
                        <input
                        name="password"
                        isInvalid={isInvalidPassword}
                        onChange={handleInput}
                            type="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div class="mb-6">
                        <input
                        name="password_re"
                        isInvalid={isInvalidPassword}
                        onChange={handleInput}
                            type="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div class="mb-6">
                    <input id="outlined-basic" label="Product Name" type="text" name="productName" onChange={(e)=>{
        setVerify_code(e.target.value)
      }}/>   <button type="button" onClick = {()=>{verifyEmail()}}>Send verification code</button><br></br>
                        </div>
                    
                    <div class="text-center lg:text-left">
                        <button
                            type="submit"
                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Sign Up
                        </button>
                        <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                            Already have an account?
                            <a
                                href="/login"
                                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
