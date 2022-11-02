import React, { useState } from "react";
import axios from 'axios'
export const Photo = (props) => {
  
   const [todo,setTodo]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
    setTodo(res.data)
    console.log(res)
    props.photoc(res.data.length)
  })
  return (
    <div>
      <h1>Todo Lists</h1>
     <div class="container">
      <div class="row">
            {
            todo.map((e) => {
             
              return (
               <div class="col-4">
               <div className="card"  style={{ width: "18rem" }}>
                      <img src={ e['url']} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p style={{fontSize:'20px' }}  className="card-text">
     {e['title']}
    </p>
          <a  href={e['thumbnailUrl']} target="_blank" rel="noreferrer" className="btn btn-primary">
      ThumbNail
    </a>
          </div>
                      </div>
                      <br/>
                  </div>
                  

              )
            })
          
    }
  
              </div>
              </div>
    </div>
  );
};
