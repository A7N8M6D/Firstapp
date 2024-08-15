import React from 'react'
import "./Body.css";
const Body = () => {
  return (
    <div>
        <div class="card mb-3 position-relative  body-main bg-primary">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3b882411590179.560fa1a12e2da.jpg" class="card-img-top" alt="..."/>
  <div class="card-body position-absolute  body-main-m">
    <h5 class="card-title fs-1 fs-md-4 ">Card title</h5>
    <p class="card-text fs-3 fs-md-5" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text fs-4 fs-md-6"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>

    </div>
  )
}

export default Body