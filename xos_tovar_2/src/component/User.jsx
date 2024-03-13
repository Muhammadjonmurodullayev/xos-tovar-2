import React,{useEffect} from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import img from "./img/Image.png"
const User=() => {
    let navigate=useNavigate()
    const checked=() => {
        let value=document.querySelector(".checkbox").checked
        let login=document.querySelector(".login_value").value
        let password=document.querySelector(".password_value").value
        if(value) {
            localStorage.setItem("stroymarket-login",login)
            localStorage.setItem("stroymarket-password",password)
        }
        if(login&&password) {
            if(login==password) {
                navigate("/App",{replace: true})
            }
        }
    }
    useEffect(() => {
        let login=localStorage.getItem("stroymarket-login",)
        let password=localStorage.getItem("stroymarket-password",)
        if(login&&password) {
            document.querySelector(".login_value").value=login
            document.querySelector(".password_value").value=password
        }
    },[])
    const [selectedImage,setSelectedImage]=useState(null)
    const handleImageChange=(event) => {
        const file=event.target.files[0]
        const imageUrl=URL.createObjectURL(file)
        setSelectedImage(imageUrl)
    }
    return (
        <div className='parent'>
            <div className='user'>
                <div className="login">
                    <div className='h1_tag'>
                        <h1 className='text_p'>Xush kelibsiz </h1>
                        <p className='pp'>Tizimga kirish uchun login va parol kiriting</p>
                    </div>
                    <form >
                        <div className='p_div'>
                            <p className='p_text' >Login</p>
                            <input className='input_id login_value' type="login" placeholder='login' required title="Loginni kiriting" autoComplete="off" pattern=".{1,}" />
                        </div>
                        <div className='p_div'>
                            <p className='p_textt'>Password</p>
                          <input className='input_id password_value' type="password" placeholder='Password' required title="Parolni kiriting" autoComplete="off" pattern=".{1,}" />
                        </div>
                        <div className='buttton'>
                            <input className='checkbox' type="checkbox" name="" id="" />
                            <p>Eslab qolish</p>
                        </div>
                        <button onClick={() => {
                            checked()
                        }} className='button_check'>login</button>
                  </form>
                </div>
            </div>
            <img className='img' src={img} alt="" />
        </div>
    )
}
export default User
