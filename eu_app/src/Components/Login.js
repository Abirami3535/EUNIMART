import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
export default function Login(){
    let navigate = useNavigate();
   const[mail,setMail]=useState('')
    const[fname,setfName]=useState('')
    const[phnum,setPhNum]=useState('')
    const[lname,setlName]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit =()=>{
        localStorage.setItem('data',JSON.stringify({fname:fname,phnum:phnum,mail:mail,lastname:lname,password:password}));
        navigate("/")
        setfName('')
        setMail('')
        setPhNum('')
        setlName('')
        setPassword('')
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
                value={fname} onChange={(e)=>setfName(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label>Last Name</label>
            <input
                type="text" required
                className="form-control"
                placeholder=""
                value={lname} onChange={(e)=>setlName(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label>Phone</label>
            <input
                type="tel"
                className="form-control"
                placeholder=""
                value={phnum} onChange={(e)=>setPhNum(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label>Email</label>
            <input
                type="email" required
                className="form-control"
                placeholder=""
                value={mail} onChange={(e)=>setMail(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder=""
                value={password} onChange={(e)=>setPassword(e.target.value)}
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
