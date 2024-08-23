import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"
import { FaUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import rightIMG from "../images/rightIMG.png"
import { api_base_url } from '../Helpher';

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        fetch(api_base_url + "/signUp", {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            name: name,
            email: email,
            phone: phone,
            password: pwd,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
              if(data.success === false){
                setError(data.message)
              }
              else{
                navigate("/login");
              }
          });
      };
  return (
    <>
    <div className='flex overflow-hidden items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]'>
        <div className='flex w-full items-center'>
            <div className='left w-[30%] flex flex-col ml-[100px]'>
                <img className='w-[210px]' src={logo} alt="" />
                <form onSubmit={createUser} className='pl-3 mt-5' action="">
                    <div className='inputCon'>
                        <p className='text-[14px] text-[#808080]'>Username</p>
                        <div className='inputBox w-[100%]'>
                            <i><FaUser /></i>
                            <input onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" name="username" id="username" placeholder="Username" required/>
                        </div>
                    </div>
                    <div className='inputCon'>
                        <p className='text-[14px] text-[#808080]'>Name</p>
                        <div className='inputBox w-[100%]'>
                            <i><BiSolidUserRectangle /></i>
                            <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" name="Name" id="Name" placeholder="Name" required/>
                        </div>
                    </div>
                    <div className='inputCon'>
                        <p className='text-[14px] text-[#808080]'>Email</p>
                        <div className='inputBox w-[100%]'>
                            <i><MdEmail /></i>
                            <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" name="Email" id="Email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className='inputCon'>
                        <p className='text-[14px] text-[#808080]'>Phone</p>
                        <div className='inputBox w-[100%]'>
                            <i><FaPhoneSquareAlt /></i>
                            <input onChange={(e) => {setPhone(e.target.value)}} value={phone} type="phone" name="Phone" id="Phone" placeholder="Phone" required/>
                        </div>
                    </div>
                    <div className='inputCon'>
                        <p className='text-[14px] text-[#808080]'>Password</p>
                        <div className='inputBox w-[100%]'>
                            <i><MdLock /></i>
                            <input onChange={(e) => {setPwd(e.target.value)}} value={pwd} type="password" name="Password" id="Password" placeholder="Password" required/>
                            <i className='cursor-pointer !mr-3 !text-[25px]'><IoMdEye /></i>
                        </div>
                    </div>
                    <p className='text-red-500 text-[14px] my-2'>{error}</p>
                    <p>Already have an account <Link to="/login" className='text-blue-500 mb-4'>Login</Link></p>

                    <button className='w-[100%] bg-green-600 transition-all hover:bg-green-700 p-2 rounded-md text-white mt-3'>SignUp</button>
                </form>
            </div>
            <div className='right flex items-end justify-end'>
                <img className='h-full w-[34vw]' src={rightIMG} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp