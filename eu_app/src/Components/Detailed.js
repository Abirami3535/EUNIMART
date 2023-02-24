import React, { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

export default function Detailed() {
    const { userid } = useParams();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [mail, setMail] = useState('');

    useEffect(() => {
        const temp = localStorage.getItem("data");

    
        fetch(`https://reqres.in/api/users/${userid}`)
          .then((res) => res.json())
          .then(({ data }) => {
            console.log(data);
            const { last_name, first_name, email, avatar } = data;
            setName(last_name +' ' + first_name);
            setAvatar(avatar);
            setMail(email);
          })
          .catch((err) => {
            console.log(err.message);
          });
          
    
      }, []);

  return (
    <div>
        {name}
        {mail}
        {
            avatar!=='' && <img src={avatar} />
        }
    </div>
  )
}
