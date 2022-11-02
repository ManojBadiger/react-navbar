import React, { useEffect, useState } from "react";
import axios from 'axios'
export const Album = (props) => {
  const [album,setAlbum]=useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      setAlbum(res.data)
      console.log(res);
       props.albumc(res.data.length)
    })
  })
  return (
    <div>
      <h1>Album Lists</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Id</th>
      <th scope="col">Title</th>
      
    </tr>
  </thead>
        <tbody>
            {
            album.map((e) => {
              return (
                <tr>
                  <td >{e['id']}</td>
      <td>{e['userId']}</td>
      <td>{e['title']}</td> 
               </tr>
               
              )
            })
          
    }
  
  </tbody>
</table>
    </div>
  );
};
