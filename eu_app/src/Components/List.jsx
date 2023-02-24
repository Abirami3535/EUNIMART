import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function List() {
  let navigate = useNavigate();
  const [data, setDate] = useState([]);
  useEffect(() => {
    const temp = localStorage.getItem("data");
    if (!temp) {
      navigate("/sign-in");
    }

    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((actualData) => setDate(actualData.data))
      .catch((err) => {
        console.log(err.message);
      });

      console.log(data);

  }, []);
  return <div>

    <div>
      <input type="button" value={"Logout"} onClick={(e) => {
        localStorage.removeItem('data') ;    
        navigate("/sign-in");
        }} />
    </div>
    

    <div>
    {data.map((item, index) => {
      return <li key={index}>  
      <Link to={`/user/${item.id} `}><img src={item.avatar} /></Link>
      <Link to={`/user/${item.id}`}>{item.id}</Link>
       {item.email} {item.first_name} {item.last_name}
      </li>

    })}
    </div>
    
  </div>;
}

export default List;
