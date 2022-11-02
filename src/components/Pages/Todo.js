import React, { useState } from "react";
import axios from 'axios'
import { Home } from "./Home";
export const Todo = (props) => {
  
   const [todo,setTodo]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    setTodo(res.data)
    
    props.getlength(res.data.length)
  })
   
  
  return (
    <div>
      
      <h1>Todo Lists</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
        <tbody>
          
          {
          
            todo.map((e) => {
              
              return (
                
                <tr key={e['id']}>
                  <td>{e['id']}</td>
                  <td>{e['title']}</td>
               
                  {e['completed'] ? <td style={{ color:'green' }}>
                    Complted
                  </td> :
                    <td style={{ color:'red' }}>
                      Not completed
                    </td>
                  }
                
     
               </tr>
               
              )
               
            })
         
          }
         
        
  </tbody>
</table>
    </div>
  );
};
