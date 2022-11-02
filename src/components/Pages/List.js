import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { Link, NavLink } from "react-router-dom";

export const List = (props) => {
  const [table,setTable]=useState([])
  useEffect(() => { 
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
     setTable(res.data)
      console.log(table);
      props.listc(res.data.length)
    });
  });
  return (
    <div>
      <h1><u>List of users</u></h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
        <tbody>
            {
            table.map((e) => {
              return (
                <tr>
                  <td >{e['id']}</td>
      <td>{e['name']}</td>
      <td>{e['username']}</td>
                  <td>{e['phone']}</td>
                  <td>
          
                    {/* <NavLink  to={"https://"+ e['website']} target="_blank" rel="noreferrer" className="nav-logo">
            {e['website']}
     
                    </NavLink> */}
                    <a href={"https://"+e['website']} target="_blank" rel="noreferrer">{e['website']} </a>
                  </td>
    </tr>
               
              )
            })
          
    }
  
  </tbody>
</table>
    </div>
  );
};
