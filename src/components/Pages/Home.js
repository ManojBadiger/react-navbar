import React from "react";

export const Home = (props) => {
 
  return (
    <div>
      <h1>Get users details</h1>
      
     
      <div class="container mt-2">

  <div class="row">
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="card-title text-right"><i class="material-icons">Total fetched Todos</i></h4>
  
        <h5 class="item-card-title mt-3 mb-3"> {
        props.todolength
      }</h5>
      
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Total fetched albums</i></h4>
  
              <h5 class="card-title  mt-3 mb-3">{ props.albumc}</h5>
      
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Total fetched lists</i></h4>
   
              <h5 class="card-title  mt-3 mb-3">{props.listc}</h5>
      
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Total fetched photos</i></h4>
    
              <h5 class="card-title  mt-3 mb-3">{props.photoc}</h5>
      
  </div>
    </div>    
  </div>
  
</div>

    </div>
  );
};
