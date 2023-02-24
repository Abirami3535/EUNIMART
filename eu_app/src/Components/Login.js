import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
export default function Login(){
    let navigate = useNavigate();
   const[mail,setMail]=useState('')
    const[name,setName]=useState('')
    const[phnum,setPhNum]=useState('')
    const handleSubmit =()=>{
        localStorage.setItem('data',JSON.stringify({name:name,phnum:phnum,mail:mail}));
        navigate("/")
        setName('')
        setMail('')
        setPhNum('')
    };
    useEffect(()=>{
        const data=localStorage.getItem('data')
        if(data){
            navigate("/")
        }
    },[])
    return(
        <div>
            <form>
            <h3>Sign In</h3>
            <div className="mb-3">
            <label>First Name</label>
            <input
                type="text" required
                className="form-control"
                placeholder=""
            />
            </div>
            <div className="mb-3">
            <label>Last Name</label>
            <input
                type="text" required
                className="form-control"
                placeholder=""
            />
            </div>
            <div className="mb-3">
            <label>Phone</label>
            <input
                type="tel"
                className="form-control"
                placeholder=""
            />
            </div>
            <div className="mb-3">
            <label>Email</label>
            <input
                type="email" required
                className="form-control"
                placeholder=""
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder=""
            />
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary"
            onClick={handleSubmit}>
                Submit 
            </button>
        </div>
            </form>

        </div>
    );
}